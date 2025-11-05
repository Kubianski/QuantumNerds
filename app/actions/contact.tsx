"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

const contactSchema = z.object({
  name: z.string().min(2, "Imię musi mieć minimum 2 znaki"),
  email: z.string().email("Nieprawidłowy adres email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Wiadomość musi mieć minimum 10 znaków"),
})

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }

    const validatedData = contactSchema.parse(data)

    console.log("[v0] Wysyłanie formularza kontaktowego:", {
      name: validatedData.name,
      email: validatedData.email,
      hasDiscordWebhook: !!process.env.DISCORD_WEBHOOK_URL,
      hasEmailConfig: !!(process.env.OVH_SMTP_HOST && process.env.OVH_SMTP_USER && process.env.OVH_SMTP_PASSWORD),
    })

    // Wysyłanie na Discord
    if (process.env.DISCORD_WEBHOOK_URL) {
      try {
        const discordResponse = await fetch(process.env.DISCORD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [
              {
                title: "📧 Nowa wiadomość z formularza kontaktowego",
                color: 0x3b82f6,
                fields: [
                  { name: "👤 Imię", value: validatedData.name, inline: true },
                  { name: "📧 Email", value: validatedData.email, inline: true },
                  { name: "📱 Telefon", value: validatedData.phone || "Nie podano", inline: true },
                  { name: "💬 Wiadomość", value: validatedData.message },
                ],
                timestamp: new Date().toISOString(),
              },
            ],
          }),
        })
        console.log("[v0] Discord webhook status:", discordResponse.status)
      } catch (discordError) {
        console.error("[v0] Błąd Discord webhook:", discordError)
      }
    }

    if (process.env.OVH_SMTP_HOST && process.env.OVH_SMTP_USER && process.env.OVH_SMTP_PASSWORD) {
      try {
        console.log("[v0] Konfiguracja SMTP:", {
          host: process.env.OVH_SMTP_HOST,
          port: process.env.OVH_SMTP_PORT || "587",
          user: process.env.OVH_SMTP_USER,
        })

        const transporter = nodemailer.createTransport({
          host: process.env.OVH_SMTP_HOST,
          port: Number.parseInt(process.env.OVH_SMTP_PORT || "587"),
          secure: false,
          auth: {
            user: process.env.OVH_SMTP_USER,
            pass: process.env.OVH_SMTP_PASSWORD,
          },
          tls: {
            rejectUnauthorized: false,
          },
        })

        await transporter.verify()
        console.log("[v0] SMTP połączenie zweryfikowane")

        const info = await transporter.sendMail({
          from: `"Formularz Kontaktowy" <${process.env.OVH_SMTP_USER}>`,
          to: "kontakt@quantumnerds.pl",
          subject: `Nowa wiadomość od ${validatedData.name}`,
          html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #3b82f6; }
                .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>📧 Nowa wiadomość z formularza kontaktowego</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">👤 Imię:</div>
                    <div class="value">${validatedData.name}</div>
                  </div>
                  <div class="field">
                    <div class="label">📧 Email:</div>
                    <div class="value">${validatedData.email}</div>
                  </div>
                  <div class="field">
                    <div class="label">📱 Telefon:</div>
                    <div class="value">${validatedData.phone || "Nie podano"}</div>
                  </div>
                  <div class="field">
                    <div class="label">💬 Wiadomość:</div>
                    <div class="value">${validatedData.message}</div>
                  </div>
                  <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
                    Wiadomość wysłana: ${new Date().toLocaleString("pl-PL")}
                  </p>
                </div>
              </div>
            </body>
          </html>
        `,
        })

        console.log("[v0] Email wysłany:", info.messageId)
      } catch (emailError) {
        console.error("[v0] Błąd wysyłania emaila:", emailError)
        // Nie przerywamy procesu - Discord już został wysłany
      }
    } else {
      console.log("[v0] Brak konfiguracji SMTP - email nie zostanie wysłany")
    }

    return { success: true, message: "Wiadomość została wysłana!" }
  } catch (error) {
    console.error("[v0] Błąd wysyłania formularza:", error)
    if (error instanceof z.ZodError) {
      return { success: false, message: error.errors[0].message }
    }
    return { success: false, message: "Wystąpił błąd. Spróbuj ponownie." }
  }
}

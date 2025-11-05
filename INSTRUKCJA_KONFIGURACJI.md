# Instrukcja konfiguracji powiadomień

## 1. Konfiguracja Discord Webhook

### Krok 1: Stwórz webhook na Discord
1. Otwórz Discord i przejdź do serwera, na którym chcesz otrzymywać powiadomienia
2. Kliknij prawym przyciskiem myszy na kanał tekstowy
3. Wybierz "Edytuj kanał" → "Integracje" → "Webhooks"
4. Kliknij "Nowy Webhook"
5. Nadaj nazwę (np. "TechService Powiadomienia")
6. Skopiuj URL webhooka

### Krok 2: Dodaj webhook do zmiennych środowiskowych
1. W panelu Vercel przejdź do zakładki "Vars" (w lewym menu)
2. Dodaj nową zmienną:
   - Nazwa: `DISCORD_WEBHOOK_URL`
   - Wartość: Wklej skopiowany URL webhooka
3. Zapisz zmiany

## 2. Konfiguracja Email przez SMTP OVH

### Zmienne środowiskowe do dodania w zakładce "Vars":

\`\`\`
OVH_SMTP_HOST=ssl0.ovh.net
OVH_SMTP_PORT=587
OVH_SMTP_USER=kontakt@quantumnerds.pl
OVH_SMTP_PASSWORD=Gumis1234!?
\`\`\`

### Jak dodać zmienne:
1. W panelu Vercel przejdź do zakładki "Vars" (w lewym menu)
2. Dodaj każdą zmienną osobno:
   - Kliknij "Add Variable"
   - Wpisz nazwę i wartość
   - Zapisz
3. Po dodaniu wszystkich zmiennych, przeładuj aplikację

### Adres docelowy emaili:
Wszystkie wiadomości z formularza będą wysyłane na: **kontakt@quantumnerds.pl**

## 3. Testowanie

Po skonfigurowaniu:
1. Wypełnij formularz kontaktowy na stronie
2. Sprawdź, czy otrzymałeś powiadomienie na Discord
3. Sprawdź skrzynkę email kontakt@quantumnerds.pl

## 4. Bezpieczeństwo

**WAŻNE:** 
- Nigdy nie udostępniaj publicznie swoich zmiennych środowiskowych
- Hasło SMTP jest przechowywane bezpiecznie w Vercel
- Wszystkie dane są wysyłane przez szyfrowane połączenie

## Uwagi
- Powiadomienia Discord działają natychmiast po dodaniu DISCORD_WEBHOOK_URL
- Email przez SMTP OVH wymaga wszystkich 4 zmiennych środowiskowych
- Wszystkie dane są wysyłane bezpiecznie przez Server Actions
- Formularz wyświetla komunikat o sukcesie/błędzie po wysłaniu

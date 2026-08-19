let recipientEmail = '407autorentals@gmail.com'

export function setRecipientEmail(email: string) {
  recipientEmail = email
}

export function getRecipientEmail(): string {
  return import.meta.env.VITE_RECIPIENT_EMAIL?.trim() || recipientEmail
}

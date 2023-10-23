import { TContactForm } from "@/types";

export async function SendEmailHandler(data: TContactForm) {
  await fetch('/api/sendEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
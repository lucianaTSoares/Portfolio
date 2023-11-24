import { TContactForm } from "@/types";
import toast from "react-hot-toast";

export async function SendEmailHandler(data: TContactForm) {
  const response = await fetch('/api/sendEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  
  const responseToJson = await response.json()

  if (responseToJson.status !== 200) {
    toast.error(responseToJson.message);
  } else {
    toast.success(responseToJson.message);
  }
}
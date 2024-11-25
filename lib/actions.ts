"use server"

import { z } from "zod"
import { ContactFormSchema } from "./schemas"

type ContactFormInput = z.infer<typeof ContactFormSchema>

export async function sendEmail(data: ContactFormInput) {
    const result = ContactFormSchema.safeParse(data)

    if (result.error) {
        return { error: result.error.format() }
    }

    try {
       const { name, email, message } = result.data
       const { data, error } = await resend.emails.send({
        from: "sunebarikara@gmail.com",
        to: [email],
        cc: ["sunebarikara@gmail.com"],
        subject: "Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactFormEmail({ name, email, message })
       })

       if (!data || error) {
        throw new Error("Failed to send email");
       }

       return { success: true}
    } catch (error) {
        return { error }
    }
}
"use client"

import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { sendEmail } from "@/lib/actions"
import { ContactFormSchema } from "@/lib/schemas"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

type Inputs = z.infer<typeof ContactFormSchema>

// Update the form
export default function ContactForm() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    const result = await sendEmail(data)

    if (result?.error) {
      toast.error("Error occurred, Please try again.")
      return
    }

    toast.success("Message sent successfully!")
    reset()
  }

  return (
    <section className="relative isolate">
      {/* background pattern */}

      {/* form  */}
      <div className="relative">
        <form 
        onSubmit={handleSubmit(processForm)}
        className="mt-16 lg:flex-auto"
        noValidate
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* name  */}
            <div className="mt-6">
              <Input
                className="py-6"
                id="name"
                type="text"
                placeholder="Name"
                autoComplete="off"
                {...register("name")}
              />

              { errors.name?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  { errors.name.message}
                </p>
              )}
            </div>

            {/* email  */}
            <div className="mt-6">
              <Input
                className="py-6"
                id="email"
                type="email"
                placeholder="Email"
                autoComplete="off"
                {...register("email")}
              />

              { errors.email?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  { errors.email.message}
                </p>
              )}
            </div>

            {/* message  */}
            <div className="sm:col-span-2 mt-3">
              <Textarea
              rows={4}
                placeholder="Message"
                {...register("message")}
              />

              { errors.message?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  { errors.message.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full disabled:opacity-50"
            >
              { isSubmitting ? "Processing..." : "Contact Us"}
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            By submitting this form, I agree to the {""}
            <Link href={"/privacy"} className="font-bold">
              privacy&nbsp;policy.
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}

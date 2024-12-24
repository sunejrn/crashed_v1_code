"use client"

import ProfileCard from "./profile-card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ContactForm() {

  return (
    <section className="roboto">
      <h1 className="text-xl font-bold mt-14 mb-3">Contact Me</h1>

      <ProfileCard
        name="Kara Sune"
        bio="I&#39;m a FullStack Developer | React | JavaScript | NodeJs | Tailwindcss | NextJs | TypeScript | MongoDB | SQL"
        email="Karasune66@gmail.com"
        linkedin="linkedin"
        github="https://github.com/gitKarasune"
      />

      <h2 className="text-xl font-bold mt-16">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

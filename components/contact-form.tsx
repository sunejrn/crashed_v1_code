"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ContactForm() {

  return (
    <section className="roboto">
      <h1 className="text-xl font-bold mt-16">Contact Me</h1>




      {/* <div className="mt-5 bg-gray-300 dark:bg-gray-950 transform transition-all text-gray-700 dark:text-gray-200 hover:bg-black hover:dark:bg-white hover:text-gray-200 dark:hover:text-black w-36 py-4 rounded-full flex justify-center cursor-pointer items-center">
        View all
        </div> */}


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

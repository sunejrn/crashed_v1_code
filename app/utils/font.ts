import { Roboto} from 'next/font/google'

// My Custom Header Font
const robotoFont = Roboto({
    subsets: ['latin'],
    weight: ["400", "500"],
    variable: "--font-Roboto",
  })

export const roboto = robotoFont.variable;
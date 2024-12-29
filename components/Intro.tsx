import Image from "next/image"
import authorKaraImage from "@/public/Images/authors/profile.jpg"
import { JSX, SVGProps } from 'react'
import { FaGithub, FaLinkedinIn, FaHeart } from 'react-icons/fa'
import { SiNodedotjs, SiJavascript, SiReact, SiTypescript, SiNextdotjs, SiExpress, SiTailwindcss, SiCss3, SiHtml5, SiJquery } from 'react-icons/si';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogHeader } from "@/components/ui/dialog"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const navigation = [
    {
        name: 'Linkedin',
        href: 'https://linkedin.com/in/sune-kara',
        icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
            <FaLinkedinIn />
        )
    },
    {
        name: 'Github',
        href: 'https://github.com/gitkarasune',
        icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
            <FaGithub />
        )
    }
]

export default function Intro() {

    return (
        <>
            <section className="flex md:flex-row flex-col-reverse items-start gap-x-10 gap-y-10 pb-24 pt-3">
                <div className="flex-1">
                    <h1 className="title no-underline"> Kara Sune</h1>
                    <p className="font-ligh text-sm text-gray-400 dark:text-gray-700">@_kendev</p>
                    {/* I&#39;m a  */}
 
                    <p className="mt-3 mb-4 text-muted-foreground roboto">
                        A FullStack Developer | React | JavaScript | NodeJs/Express | Tailwindcss | NextJs | TypeScript | MongoDB | <span className="bg-gray-200 Building-Solutions px-1">Building Solutions</span> | Open for collaborations. ❤
                    </p>

                    <p className="text-sm text-muted-foreground">I&#39;m currently building my ideas.</p>
                    <p className="text-sm text-muted-foreground mb-4">Ask me about JavaScript, React, NextJs, NodeJs, Css...and more</p>

                    <div className=" mt-8 gap-2 flex items-center">
                        <div className="bg-gray-200 dark:bg-gray-200 transition-all hover:scale-125 text-white rounded-md p-1"><SiReact className="text-3xl" id="React" /></div>
                        <div className="bg-gray-200 dark:bg-gray-200 transition-all hover:scale-125 text-white rounded-md p-1"><SiTailwindcss className="text-3xl" id="Tailwindcss" /></div>
                        <div className="bg-gray-200 dark:bg-gray-200 transition-all hover:scale-125 text-white rounded-md p-1"><SiCss3 className="text-3xl" id="css" /></div>
                        <div className="bg-gray-200 dark:bg-gray-200 transition-all hover:scale-125 text-white rounded-md p-1"><SiJavascript className="text-3xl rounded-md" id="Js" /></div>
                        <div className="bg-gray-200 dark:bg-gray-200 transition-all hover:scale-125 text-white rounded-md p-1"><SiTypescript className="text-3xl rounded-md" id="typescript" /></div>
                        <div className="bg-gray-200 dark:bg-gray-200 transition-all hover:scale-125 text-white rounded-md p-1"><SiNodedotjs className="text-3xl" id="Nodejs" /></div>
                        <div className="bg-gray-200 dark:bg-gray-200 transition-all hover:scale-125 text-white rounded-md p-1"><SiExpress className="text-3xl" id="Express" /></div>
                        <div className="bg-gray-200 dark:bg-gray-200 transition-all hover:scale-125 text-white rounded-md p-1"><SiJquery className="text-3xl" id="Jquery" /></div>
                        <div className="bg-gray-200 dark:bg-gray-200 transition-all hover:scale-125 text-white rounded-md p-1"><SiNextdotjs className="text-3xl" id="Nextjs" /></div>
                        <div className="bg-gray-200 dark:bg-gray-200 transition-all hover:scale-125 text-white rounded-md p-1"><SiHtml5 className="text-3xl" id="Html" /></div>
                    </div>

                    <section className="mt-7 flex justify-center items-center">
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="bg-gray-200 px-5 text-xs py-2 rounded-full dark:bg-gray-900 dark:border transform transition-all text-gray-700 dark:text-gray-200  cursor-pointer">Achievement</button>
                            </DialogTrigger>

                            {/* Now the Dialog Pop-Up is here */}
                            <DialogContent className="mx-auto roboto p-14 rounded-md ">
                                <DialogHeader className="flex flex-col justify-center items-center">
                                    <DialogTitle className="text-center mb-10">Achievements</DialogTitle>
                                    <DialogDescription className="flex flex-col justify-start items-start">
                                        <section className="grid grid-col-1 grid-cols-2 gap-2">
                                            <section className="w-10 h-10 bg-black dark:bg-white dark:text-black shadow-xl py-10 px-20 flex justify-center items-center rounded-lg">Hello</section>
                                            <section className="w-10 h-10 bg-black dark:bg-white dark:text-black shadow-xl py-10 px-20 flex justify-center items-center rounded-lg">Hello</section>
                                        </section>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </section>

                    <div className="flex gap-3 mt-8">
                        {navigation.map(item => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                role='noreferrer noopener'
                                className='text-muted-foreground hover:text-foreground'
                            >
                                <span className='sr-only'>{item.name}</span>
                                <item.icon aria-hidden='true' className='h-10 w-10' />
                            </a>
                        ))}
                    </div>
                </div>

                {/* For the Image */}

                <section className="relative">
                    <Image
                        className="flex-1 rounded-xl "
                        src={authorKaraImage}
                        alt="Kara Sunebari"
                        width={175}
                        height={175}
                        priority={true}
                    />
                    <span className="absolute bottom-1 right-1 bg-blue-400 dark:bg-gray-900 p-2 rounded-full text-white">
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <FaHeart className="animate-ping" />
                            </HoverCardTrigger>
                            <HoverCardContent className="w-24 text-sm">
                                Avaliable
                            </HoverCardContent>
                        </HoverCard>
                    </span>
                </section>
            </section>
        </>
    )
}

import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaLinkedinIn, FaGithub, FaCheckCircle } from 'react-icons/fa'

import Image from 'next/image';
interface ProfileCardPros {
    name: string;
    email: string;
    linkedin: string;
    github: string;
}

const ProfileCard: React.FC<ProfileCardPros> = ({ name, email, linkedin, github }) => {

    const [isFullscreen, setIsFullscreen] = useState<{ isOpen: boolean, image: string | null }>({
        isOpen: false,
        image: null,
    });

    useEffect(() => {
        if (isFullscreen.isOpen) {
            // Lock scroll when the model is open
            document.body.style.overflow = "hidden";
        } else {
            // unlock scroll when the model is closed
            document.body.style.overflow = "auto";
        }

        // Clean: reset when the component unmounts or modal is closed
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [isFullscreen.isOpen]);

    const handleOpenFullscreen = (imageUrl: string) => {
        setIsFullscreen({ isOpen: true, image: imageUrl });
    }

    const handleCloseFullscreen = () => {
        setIsFullscreen({ isOpen: false, image: null });
    }

    return (
        <div className='max-w-xl max-auto bg-white dark:shadow-xl profile-dark shadow-lg rounded-2xl overflow-hidden'>
            {/* Fullscreen model */}
            {isFullscreen.isOpen && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50' onClick={handleCloseFullscreen}>
                    <div className='relative' onClick={(e) => e.stopPropagation()}>
                        <Image
                            className='rounded-lg'
                            src={isFullscreen.image!}
                            alt='profile'
                            width={800}
                            height={800}
                            objectFit='cover'
                            priority={true}
                        />
                        <button className='absolute top-4 right-4 text-blue-700 text-3xl' onClick={handleCloseFullscreen}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

            {/* Profile card */}
            <div className='relative h-40 p-4 ImageBackround cursor-pointer' onClick={() => handleOpenFullscreen("/Images/projects/Typing-game.jpg")}>
                <div className='flex justify-end relative h-full'>
                    {/* Profile Image */}
                    <div className='absolute bottom-0 right-0'>
                        <Image
                            className='rounded-2xl border-2 border-white'
                            src="/Images/authors/profile.jpg"
                            alt='profile'
                            width={100}
                            height={100}
                            objectFit='cover'
                            onClick={(e) => {
                                e.stopPropagation() //Prevent event bubbling
                                handleOpenFullscreen("/Images/authors/profile.jpg")
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="p-4 relative">
                <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-1'>{name} <FaCheckCircle className='text-xs text-blue-500 dark:text-green-500' /></h2>
                <div className='grid mt-5 gap-2 grid-cols-2'>
                    <div className='mt-3 transition-all hover:rotate-2 bg-gray-300 dark:bg-gray-900 py-4 px-4 rounded-full '>
                        <a href={`mailto:${email}`} className='text-gray-600 text-sm dark:text-gray-400 hover:dark:text-blue-600 hover:text-blue-600 hover:underline flex items-center'><FaEnvelope className='mr-2 text-blue-600' size={18} />Kendev@gmail</a>
                    </div>
                    <div className=' mt-3 transition-all hover:rotate-2 bg-gray-300 dark:bg-gray-900 py-4 px-4 rounded-full '>
                        <a href={linkedin} target='_blank' className='text-gray-600 text-sm dark:text-gray-400 hover:dark:text-blue-600 hover:text-blue-600 flex hover:underline items-center'><FaLinkedinIn className='mr-2 text-blue-600' size={18} />in/sune-kara</a>
                    </div>
                    <div className=' mt-3 transition-all hover:rotate-2 bg-gray-300 dark:bg-gray-900 py-4 px-4 rounded-full '>
                        <a href={github} target='_blank' className='text-gray-600 text-sm dark:text-gray-400 hover:dark:text-blue-600 hover:text-blue-600 items-center flex hover:underline'><FaGithub className='mr-2 text-blue-600' size={18} />gitKarasune</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
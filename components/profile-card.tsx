import React, { useState } from 'react'
import { FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa'

import Image from 'next/image';
import profile from "@/public/Images/authors/profile.jpg"
import coverPicture from "@/public/Images/projects/Typing-game.jpg"

interface ProfileCardPros {
    name: string;
    bio: string;
    email: string;
    linkedin: string;
    github: string;
}

const ProfileCard: React.FC<ProfileCardPros> = ({ name, bio, email, linkedin, github }) => {

    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleOpenFullscreen = () => {
        setIsFullscreen(true);
    }

    const handleCloseFullscreen = () => {
        setIsFullscreen(false);
    }
    return (
        <div className='max-w-sm max-auto bg-white shadow-lg rounded-2xl overflow-hidden'>
            {/* Fullscreen model */}
            {isFullscreen && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50' onClick={handleCloseFullscreen}>
                    <div className='relative'>
                        <Image
                            className='rounded-lg p-0 m-0'
                            src={profile}
                            alt='profile'
                            width={800}
                            height={800}
                            objectFit='cover'
                            priority={true}
                        />
                        <button className='absolute top-4 right-4 text-white text-3xl' onClick={handleCloseFullscreen}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

            {/* Fullscreen Cover model */}
            {isFullscreen && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50' onClick={handleCloseFullscreen}>
                    <div className='relative'>
                        <Image
                            className='rounded-lg p-0 m-0'
                            src={coverPicture}
                            alt='profile'
                            width={800}
                            height={800}
                            objectFit='cover'
                        />
                        <button className='absolute top-4 right-4 text-white text-3xl' onClick={handleCloseFullscreen}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
            {/* Profile card */}
            <div className='relative h-40 p-4 ImageBackround' onClick={handleOpenFullscreen}>
                <div className='flex justify-end relative h-full'>
                    <div className='absolute bottom-0 right-0'>
                        <Image
                            className='rounded-full border-2 border-white'
                            src={profile}
                            alt='profile'
                            width={100}
                            height={100}
                            objectFit='cover'
                            onClick={handleOpenFullscreen}
                        />
                    </div>
                </div>
            </div>

            <div className='p-4'>
                <h2 className='text-2xl font-semibold text-gray-800'>{name}</h2>
                <p className='text-gray-600 mt-2'>{bio}</p>
                <div className='mt-4'>
                    <a href={`mailto:${email}`} className='text-indigo-600 flex items-center'><FaEnvelope className='mr-2' />{email}</a>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <a href={linkedin} className='text-blue-600'><FaLinkedinIn size={24} /></a>
                    <a href={github} className='text-gray-800'><FaGithub size={24} /></a>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
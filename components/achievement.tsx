import React from 'react'
import { FaTrophy, FaCertificate, FaAward } from 'react-icons/fa';
interface Achievement {
    title: string;
    description: string;
    date: string;
    icon: JSX.Element;
}

const achievements: Achievement[] = [
    {
        title: 'Certified React Developer',
        description: 'Completed the official React certification course with a score of 80%',
        date: 'May 2024',
        icon: <FaTrophy className='h-6 w-6 text-blue-500' />,
    }
]

const achievement: React.FC = () => {
    return (
        <section className='py-6 roboto'>
            <div className='w-full'>
                <h2 className='font-semibold'>Achievements</h2>

                <div className='mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {achievements.map((achievement, index) => (
                        <div key={index} className='bg-gray-300 dark:bg-black w-96 p-4 rounded-lg shadow-md'>
                            <div className='flex gap-2 items-center'>
                                {achievement.icon}
                                <h3 className='text-md text-black dark:text-white'>{achievement.title}</h3>
                            </div>
                            <p className='mt-2 text-sm dark:text-gray-400 text-gray-600 '>{achievement.description}</p>
                            <span className='mt-4 flex underline justify-end items-end text-sm text-gray-500'>{achievement.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default achievement;

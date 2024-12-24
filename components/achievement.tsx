import React from 'react'
import { FaTrophy, FaCertificate, FaAward } from 'react-icons/fa';
interface Achievement {
    title: string;
    icon: JSX.Element;
}

const achievements: Achievement[] = [
    {
        title: 'Certified React Developer',
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
                        <div key={index} className='bg-gray-300 dark:bg-black w-64 p-4 rounded-lg shadow-md'>
                            <div className='flex gap-2 items-center'>
                                {achievement.icon}
                                <h3 className='text-sm text-black dark:text-white'>{achievement.title}</h3>
                            </div>
                        </div>
                    ))}
                    {achievements.map((achievement, index) => (
                        <div key={index} className='bg-gray-300 dark:bg-black w-64 p-4 rounded-lg shadow-md'>
                            <div className='flex gap-2 items-center'>
                                {achievement.icon}
                                <h3 className='text-sm text-black dark:text-white'>{achievement.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default achievement;

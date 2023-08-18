import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-scroll';

import BrandLogo from '@/Assets/BrandLogo'
import Menu from '@/Components/Menu';
import { useDevice, DeviceContext } from '@/Utils/DeviceContext';

export default function Layout(props) {
    const device = useDevice();

    const linkVariants = {
        opened: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: -25,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    }

    const menuVariants = {
        closed: {
            opacity: 0,
            pointerEvents: 'none',
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        },

        opened: {
            opacity: 1,
            pointerEvents: 'auto',
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        }
    }

    return (
        <DeviceContext.Provider value={{ device }}>
            <div className='relative'>
                <nav className='w-full shadow-lg shadow-black-500/500 fixed left-0 top-0 flex justify-center items-center z-50'>
                    <div className='w-full flex justify-between items-center p-6 max-w-screen-2xl bg-white'>
                        <BrandLogo
                            className='w-40 z-50'
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ type: 'spring', damping: 15 }}
                        />
                        {/* MOBILE NAVIGATION */}
                        <Menu className='lg:hidden'>
                            <Menu.Trigger />

                            <Menu.Content
                                className='absolute w-screen h-screen top-0 left-0 flex flex-col gap-8 justify-center items-center text-lg font-bold bg-white z-[-1]'
                                variants={menuVariants}
                            >
                                {props.routes.map((item, idx) =>
                                    <motion.span
                                        key={idx}
                                        variants={linkVariants}
                                    >
                                        <Link
                                            key={idx}
                                            to={item.uri}
                                            smooth={true}
                                            duration={500}
                                            className='first-letter:capitalize text-black'
                                            type='button'
                                            spy={true}
                                            offset={-80}
                                            activeClass="text-blue"
                                            onClick={(e) => {
                                                e.target.parentElement.click()
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.span>
                                )}
                            </Menu.Content>
                        </Menu>

                        {/* DESKTOP NAVIGATION */}
                        <motion.header
                            className='hidden lg:flex gap-8 justify-between items-center text-lg font-bold'
                        >
                            {props.routes.map((item, idx) =>
                                <motion.span
                                    key={idx}
                                    className='first-letter:capitalize'
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ type: 'spring', delay: idx * 0.1, damping: 15 }}
                                >
                                    <Link
                                        to={item.uri}
                                        smooth={true}
                                        duration={500}
                                        className='first-letter:capitalize text-black transition-colors hover:text-blue'
                                        spy={true}
                                        offset={-80}
                                        spyThrottle={-1000}
                                        activeClass="text-blue"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.span>
                            )}
                        </motion.header>
                    </div>
                </nav>

                <main className='w-full overflow-x-hidden'>{props.children}</main>
            </div >
        </DeviceContext.Provider >
    )
}
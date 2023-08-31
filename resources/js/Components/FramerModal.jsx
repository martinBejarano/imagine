import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const Modal = ({ open, setOpen, children, className, ...otherProps }) => {

    // if(!open) return null

    return (
        <AnimatePresence>
            {open &&
                <motion.div
                    key="modal"
                    className='bg-black bg-opacity-30 fixed flex items-center justify-center w-screen h-screen z-10 top-0 left-0 '
                    onClick={() => { setOpen(false) }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        onClick={(e) => { e.stopPropagation() }}
                        className={`bg-white rounded-xl p-6 w-full max-w-2xl min-h-[500px] flex ${className || ''}`}
                        {...otherProps}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default Modal
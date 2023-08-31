import { AnimatePresence, motion } from 'framer-motion';
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function useModal() {
    return useContext(ModalContext);
}


export function ModalProvider({ children }) {
    const [modals, setModals] = useState([]);

    const openModal = (Component, componentProps) => {
        // const modal = {};
        // modal.Component = Component
        // modal.id = Date.now();
        // modal.props = componentProps;
        // console.log(modal.props)
        setModals(currentModals => [...currentModals, { Component, id: Date.now(), componentProps }]);
    };

    const closeModal = (id) => {
        setModals(currentModals => currentModals.filter(modal => modal.id !== id))
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal, modals }}>
            {children}
        </ModalContext.Provider>
    );
}

export function ModalContainer({ children, className, ...otherProps }) {
    const { modals, closeModal } = useModal();

    return (
        <AnimatePresence>
            {modals.map(({ id, Component, componentProps }, idx) => {
                return (
                    <Modal closeModal={() => { closeModal(id) }} key={idx}>
                        <Component {...componentProps} closeModal={() => { closeModal(id) }} />
                    </Modal>
                )
            })}
        </AnimatePresence >
    )
}

function Modal({ className, children, closeModal, ...otherProps }) {
    return (
        <motion.div
            key="modal"
            className='bg-black bg-opacity-30 fixed flex items-center justify-center w-screen h-screen z-10 top-0 left-0 '
            onClick={() => { closeModal() }}
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

    )
}
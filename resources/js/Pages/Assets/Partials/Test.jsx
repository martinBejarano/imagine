import { useForm } from '@inertiajs/react'
import React, { useEffect } from 'react'
import { useModal } from '@/Components/ModalTest';
import Test2 from './Test2';

const Test = ({ closeModal }) => {
    const { openModal } = useModal();

    return (
        <div className='flex flex-col gap-12 w-full'>
            <h1>TEST</h1>
            <button type='button' onClick={() => {
                openModal(Test2)
            }}>NEW MODAL</button>
        </div>
    )
}

export default Test
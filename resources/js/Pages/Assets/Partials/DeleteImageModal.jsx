import { useForm } from '@inertiajs/react'
import React, { useEffect } from 'react'


const DeleteImageModal = ({ image, closeModal }) => {
    const { data, setData, post, setDefaults, processing, errors } = useForm({
        id: image.id
    })

    const submit = (e) => {
        e.preventDefault()
        post('/assets/delete')
    }

    return (
        <div className='w-full flex flex-col items-center justify-between'>
            <img className='w-[400px] h400px]' src={`http://127.0.0.1:8000/images/${image.name}`} alt="" />
            <form className='flex flex-col gap-12 w-full' onSubmit={submit}>
                <button type='send'>DELETE</button>
                <button type='button' onClick={() => closeModal()}>CANCEL</button>
            </form>
        </div>
    )
}

export default DeleteImageModal
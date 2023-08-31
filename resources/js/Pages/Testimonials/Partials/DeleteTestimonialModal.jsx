import { useForm } from '@inertiajs/react'
import React, { useEffect } from 'react'


const DeleteTestimonialModal = ({ testimonial, closeModal }) => {
    const { data, setData, post, setDefaults, processing, errors } = useForm({
        id: 0
    })
    useEffect(() => {
        if (!testimonial) return
        setData('id', testimonial.id)
    }, [testimonial])

    const submit = (e) => {
        e.preventDefault()
        post('/testimonials/delete', {
            preserveScroll: true,
            onSuccess: () => closeModal(),
        })
    }

    return (
        <form className='flex flex-col gap-12 w-full' onSubmit={submit}>
            <h1>ARE YOU SURE YOU WANT TO DELETE {testimonial?.name}?</h1>

            <button type='button' onClick={() => closeModal()}>CANCEL</button>
            <button type='send'>DELETE</button>
        </form>
    )
}

export default DeleteTestimonialModal
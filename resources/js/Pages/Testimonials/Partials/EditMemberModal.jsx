import { useModal } from '@/Components/ModalTest'
import ImageLibraryModal from '@/Pages/Assets/Partials/ImageLibraryModal';
import { useForm } from '@inertiajs/react'
import { useRef, useEffect } from 'react';


const EditTestimonialModal = ({ closeModal, testimonial }) => {
    const { openModal } = useModal();
    const img = useRef()
    const { data, setData, post, setDefaults, processing, errors } = useForm({
        id: 0,
        image_id: 0,
        name: '',
        testimonial: ''
    })

    useEffect(() => {
        if (!testimonial) return
        setData(testimonial)
    }, [testimonial])

    const submit = (e) => {
        e.preventDefault()
        post('/testimonials/update')
    }

    const handleImageChage = () => {
        openModal(ImageLibraryModal, {
            cb: (image) => {
                img.current.src = `http://127.0.0.1:8000/images/${image.name}`;
                setData('image_id', image.id)
            }
        })
    }

    return (
        <form className='flex flex-col gap-12 w-full' onSubmit={submit}>
            <img className='w-[200px] h-[200px] mx-auto' src={`http://127.0.0.1:8000/images/${testimonial.image.name}`} ref={img} alt="" onClick={() => handleImageChage()} />
            <input className='hidden' defaultValue={8} name='image_id' type='number' />

            <span>
                <label htmlFor='name'>Name</label>
                <input defaultValue={data?.name} name='name' type='text' onChange={e => setData('name', e.target.value)} />
            </span>

            <span>
                <label htmlFor='testimonial'>Testimonial</label>
                <input defaultValue={data?.testimonial} name='testimonial' type='text' onChange={e => setData('testimonial', e.target.value)} />
            </span>

            <button type='send'>UPDATE</button>

        </form>
    )
}

export default EditTestimonialModal
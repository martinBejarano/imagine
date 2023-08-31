import { useModal } from '@/Components/ModalTest'
import ImageLibraryModal from '@/Pages/Assets/Partials/ImageLibraryModal';
import { useForm } from '@inertiajs/react'
import { useRef } from 'react';


const CreateTestimonialModal = ({ closeModal }) => {
    const { openModal } = useModal();
    const img = useRef()
    const { data, setData, post, setDefaults, processing, errors } = useForm({
        image_id: 0,
        name: '',
        testimonial: '',
    })

    const submit = (e) => {
        e.preventDefault()
        post('/testimonials/create')
    }

    const handleImageChage = () => {
        openModal(ImageLibraryModal, {
            cb: (image) => {
                img.current.src = `images/${image.name}`;
                setData('image_id', image.id)
            }
        })
    }

    return (
        <form className='flex flex-col gap-12 w-full' onSubmit={submit}>
            <img className='w-[200px] h-[200px] mx-auto' src={`http://127.0.0.1:8000/images/1692906418.jpg`} ref={img} alt="" onClick={() => handleImageChage()} />
            <input className='hidden' defaultValue={8} name='image_id' type='number' />

            <span>
                <label htmlFor='name'>Name</label>
                <input name='name' type='text' onChange={e => setData('name', e.target.value)} />
            </span>

            <span>
                <label htmlFor='testimonial'>Last Name</label>
                <input name='testimonial' type='text' onChange={e => setData('testimonial', e.target.value)} />
            </span>

            <button type='send'>CREATE</button>
        </form>
    )
}

export default CreateTestimonialModal
// import React from 'react'
import { useModal } from '@/Components/ModalTest'
import ImageLibraryModal from '@/Pages/Assets/Partials/ImageLibraryModal';
import { useForm } from '@inertiajs/react'
import { useRef } from 'react';


const CreateFeatureModal = ({ feature, closeModal }) => {
    const { openModal } = useModal();
    const img = useRef()
    const { data, setData, post, setDefaults, processing, errors } = useForm({
        image_id: 0,
        title: '',
        description: '',
        link_url: '',
    })

    const submit = (e) => {
        e.preventDefault()
        post('/features/create')
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
            {/* <input className='hidden' value={8} name='image_id' type='number' onChange={e => setData('image_id', e.target.value)} /> */}
            <img className='w-[200px] h-[200px] mx-auto' src={`http://127.0.0.1:8000/images/1692906418.jpg`} ref={img} alt="" onClick={() => handleImageChage()} />
            <input className='hidden' defaultValue={8} name='image_id' type='number' />

            <span>
                <label htmlFor='title'>Title</label>
                <input name='title' type='text' onChange={e => setData('title', e.target.value)} />
            </span>

            <span>
                <label htmlFor='description'>Description</label>
                <input name='description' type='text' onChange={e => setData('description', e.target.value)} />
            </span>

            <span>
                <label htmlFor='link_url'>Link URL</label>
                <input name='link_url' type='text' onChange={e => setData('link_url', e.target.value)} />
            </span>

            <button type='send'>CREATE</button>

        </form>
    )
}

export default CreateFeatureModal
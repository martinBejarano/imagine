import { useForm } from '@inertiajs/react'
import { useEffect, useRef } from 'react'
import { useModal } from '@/Components/ModalTest'
import ImageLibraryModal from '@/Pages/Assets/Partials/ImageLibraryModal'

const EditFeatureModal = ({ feature, closeModal }) => {
    const { openModal } = useModal();
    const img = useRef()
    const { data, setData, post, setDefaults, processing, errors } = useForm({
        id: 0,
        image_id: '',
        title: '',
        description: '',
        link_url: '',
    })

    useEffect(() => {
        if (!feature) return
        setData(feature)
    }, [feature])

    const submit = (e) => {
        e.preventDefault()
        post('/features/update')
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
            {/* <span>
                <label htmlFor='image_id'>Image URL</label>
                <input value={data?.img_url} name='image_id' type='text' onChange={e => setData('image_id', e.target.value)} />
            </span> */}
            <img className='w-[200px] h-[200px] mx-auto' src={`http://127.0.0.1:8000/images/${feature.image.name}`} ref={img} alt="" onClick={() => handleImageChage()} />
            <input className='hidden' defaultValue={8} name='image_id' type='number' />

            <span>
                <label htmlFor='title'>Title</label>
                <input defaultValue={data?.title} name='title' type='text' onChange={e => setData('title', e.target.value)} />
            </span>

            <span>
                <label htmlFor='description'>Description</label>
                <input defaultValue={data?.description} name='description' type='text' onChange={e => setData('description', e.target.value)} />
            </span>

            <span>
                <label htmlFor='link_url'>Link URL</label>
                <input defaultValue={data?.link_url} name='link_url' type='text' onChange={e => setData('link_url', e.target.value)} />
            </span>

            <button type='send'>UPDATE</button>
        </form>
    )
}

export default EditFeatureModal
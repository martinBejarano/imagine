import { useModal } from '@/Components/ModalTest'
import ImageLibraryModal from '@/Pages/Assets/Partials/ImageLibraryModal';
import { useForm } from '@inertiajs/react'
import { useRef } from 'react';


const CreateMemberModal = ({ closeModal }) => {
    const { openModal } = useModal();
    const img = useRef()
    const { data, setData, post, setDefaults, processing, errors } = useForm({
        image_id: 0,
        first_name: '',
        last_name: '',
        role: '',
        description: '',
        linkedin_url: '',
        twitter_url: '',
        facebook_url: ''
    })

    const submit = (e) => {
        e.preventDefault()
        post('/members/create')
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
                <label htmlFor='first_name'>First Name</label>
                <input name='first_name' type='text' onChange={e => setData('first_name', e.target.value)} />
            </span>

            <span>
                <label htmlFor='last_name'>Last Name</label>
                <input name='last_name' type='text' onChange={e => setData('last_name', e.target.value)} />
            </span>

            <span>
                <label htmlFor='role'>Role</label>
                <input name='role' type='text' onChange={e => setData('role', e.target.value)} />
            </span>

            <span>
                <label htmlFor='description'>Description</label>
                <input name='description' type='text' onChange={e => setData('description', e.target.value)} />
            </span>

            <div className='flex'>
                <span>
                    <label htmlFor='linkedin_url'>Linkedin URL</label>
                    <input name='linkedin_url' type='text' onChange={e => setData('linkedin_url', e.target.value)} />
                </span>
                <span>
                    <label htmlFor='twitter_url'>Twitter URL</label>
                    <input name='twitter_url' type='text' onChange={e => setData('twitter_url', e.target.value)} />
                </span>
                <span>
                    <label htmlFor='facebook_url'>Facebook URL</label>
                    <input name='facebook_url' type='text' onChange={e => setData('facebook_url', e.target.value)} />
                </span>
            </div>

            <button type='send'>CREATE</button>

        </form>
    )
}

export default CreateMemberModal
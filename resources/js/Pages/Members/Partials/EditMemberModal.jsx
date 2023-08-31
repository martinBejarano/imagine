import { useModal } from '@/Components/ModalTest'
import ImageLibraryModal from '@/Pages/Assets/Partials/ImageLibraryModal';
import { useForm } from '@inertiajs/react'
import { useRef, useEffect } from 'react';


const UpdateMemberModal = ({ closeModal, member }) => {
    const { openModal } = useModal();
    const img = useRef()
    const { data, setData, post, setDefaults, processing, errors } = useForm({
        id: 0,
        image_id: 0,
        first_name: '',
        last_name: '',
        role: '',
        description: '',
        linkedin_url: '',
        twitter_url: '',
        facebook_url: ''
    })

    useEffect(() => {
        if (!member) return
        setData(member)
    }, [member])

    const submit = (e) => {
        e.preventDefault()
        post('/members/update')
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
            <img className='w-[200px] h-[200px] mx-auto' src={`http://127.0.0.1:8000/images/${member.image.name}`} ref={img} alt="" onClick={() => handleImageChage()} />
            <input className='hidden' defaultValue={8} name='image_id' type='number' />

            <span>
                <label htmlFor='first_name'>First Name</label>
                <input defaultValue={data?.first_name} name='first_name' type='text' onChange={e => setData('first_name', e.target.value)} />
            </span>

            <span>
                <label htmlFor='last_name'>Last Name</label>
                <input defaultValue={data?.last_name} name='last_name' type='text' onChange={e => setData('last_name', e.target.value)} />
            </span>

            <span>
                <label htmlFor='role'>Role</label>
                <input defaultValue={data?.role} name='role' type='text' onChange={e => setData('role', e.target.value)} />
            </span>

            <span>
                <label htmlFor='description'>Description</label>
                <input defaultValue={data?.description} name='description' type='text' onChange={e => setData('description', e.target.value)} />
            </span>

            <div className='flex'>
                <span>
                    <label htmlFor='linkedin_url'>Linkedin URL</label>
                    <input defaultValue={data?.linkedin_url} name='linkedin_url' type='text' onChange={e => setData('linkedin_url', e.target.value)} />
                </span>
                <span>
                    <label htmlFor='twitter_url'>Twitter URL</label>
                    <input defaultValue={data?.twitter_url} name='twitter_url' type='text' onChange={e => setData('twitter_url', e.target.value)} />
                </span>
                <span>
                    <label htmlFor='facebook_url'>Facebook URL</label>
                    <input defaultValue={data?.facebook_url} name='facebook_url' type='text' onChange={e => setData('facebook_url', e.target.value)} />
                </span>
            </div>

            <button type='send'>UPDATE</button>

        </form>
    )
}

export default UpdateMemberModal
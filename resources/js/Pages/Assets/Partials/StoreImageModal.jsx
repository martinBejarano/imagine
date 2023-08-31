import { useForm } from '@inertiajs/react'
import React, { useEffect } from 'react'


const StoreImageModal = ({ closeModal }) => {
    const { data, setData, post, setDefaults, processing, errors } = useForm({
        title: '',
        image: null,
        alt: '',
    })

    const submit = (e) => {
        e.preventDefault()
        post('/assets/store')
    }

    return (
        <form className='flex flex-col gap-12 w-full' onSubmit={submit}>
            <h1>SELECT IMAGE</h1>

            <span>
                <label htmlFor="title">Image</label>
                <input type="file" name="image" onChange={(e) => { setData('image', e.target.files[0]); }} />
            </span>

            <span>
                <label htmlFor="title">Title</label>
                <input type="text" name='title' onChange={(e) => { setData('title', e.target.value) }} />
            </span>

            <span>
                <label htmlFor="alt">Alternative Text</label>
                <input type="text" name='alt' onChange={(e) => { setData('alt', e.target.value) }} />
            </span>
            <button type='send'>SAVE</button>
            <button type='button' onClick={() => closeModal()}>CANCEL</button>
        </form>
    )
}

export default StoreImageModal
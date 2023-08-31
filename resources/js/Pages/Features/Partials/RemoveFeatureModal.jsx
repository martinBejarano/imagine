import { useForm } from '@inertiajs/react'
import React, { useEffect } from 'react'


const RemoveFeatureModal = ({ feature, closeModal }) => {
    const { data, setData, post, setDefaults, processing, errors } = useForm({
        id: 0
    })
    useEffect(() => {
        if (!feature) return
        setData('id', feature.id)
    }, [feature])

    const submit = (e) => {
        e.preventDefault()
        post('/features/delete', {
            preserveScroll: true,
            onSuccess: () => closeModal(),
        })
    }

    return (
        <form className='flex flex-col gap-12 w-full' onSubmit={submit}>
            {/* <input name='id' type='number' value={data?.id} readOnly /> */}
            <h1>ARE YOU SURE YOU WANT TO DELETE THE {feature?.title} FEATURE?</h1>

            <button type='button' onClick={() => closeModal()}>CANCEL</button>
            <button type='send'>DELETE</button>
        </form>
    )
}

export default RemoveFeatureModal
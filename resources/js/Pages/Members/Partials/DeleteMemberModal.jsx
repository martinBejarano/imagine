import { useForm } from '@inertiajs/react'
import React, { useEffect } from 'react'


const DeleteMemberModal = ({ member, closeModal }) => {
    const { data, setData, post, setDefaults, processing, errors } = useForm({
        id: 0
    })
    useEffect(() => {
        if (!member) return
        setData('id', member.id)
    }, [member])

    const submit = (e) => {
        e.preventDefault()
        post('/members/delete', {
            preserveScroll: true,
            onSuccess: () => closeModal(),
        })
    }

    return (
        <form className='flex flex-col gap-12 w-full' onSubmit={submit}>
            {/* <input name='id' type='number' value={data?.id} readOnly /> */}
            <h1>ARE YOU SURE YOU WANT TO DELETE {member?.full_name}?</h1>

            <button type='button' onClick={() => closeModal()}>CANCEL</button>
            <button type='send'>DELETE</button>
        </form>
    )
}

export default DeleteMemberModal;
import React from 'react'
import { useModal } from '@/Components/ModalTest'
import { usePage } from '@inertiajs/react';


const ImageLibraryModal = ({ closeModal, cb }) => {
    const { images } = usePage().props
    console.log(images)
    const { openModal } = useModal();

    return (
        <div className='flex flex-col gap-12 w-full'>
            {images.map((image, idx) =>
                <img className='w-[100px] h-[100px] object-cover' key={idx} src={`http://127.0.0.1:8000/images/${image.name}`} alt="" onClick={() => { cb(image); closeModal() }} />
            )}
        </div>
    )
}

export default ImageLibraryModal
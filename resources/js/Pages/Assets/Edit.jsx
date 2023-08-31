import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useModal } from '@/Components/ModalTest';
import StoreImageModal from './Partials/StoreImageModal';
import DeleteImageModal from './Partials/DeleteImageModal';

export default function Images(props) {
    const { openModal } = useModal();

    const handleStore = (e) => {
        openModal(StoreImageModal)
    }

    const handleRemove = (image) => {
        openModal(DeleteImageModal, { image })
    }

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Assets</h2>}
        >
            <Head title="Assets" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-12">
                        <h1>Assets</h1>
                        <button type='button' onClick={(e) => { handleStore(e) }}>STORE IMAGE</button>
                        <ul className='flex flex-wrap'>
                            {props.images.map((image, idx) =>
                                <img onClick={() => { handleRemove(image) }} className='w-[100px] h-[100px] object-cover' key={idx} src={`http://127.0.0.1:8000/images/${image.name}`} />
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useModal } from '@/Components/ModalTest';
import EditFeatureModal from './Partials/EditFeatureModal';
import RemoveFeatureModal from './Partials/RemoveFeatureModal';
import CreateFeatureModal from './Partials/CreateFeatureModal';

export default function Features(props) {
    const { openModal } = useModal();

    const handleEdit = (feature) => {
        openModal(EditFeatureModal, { feature })
    }

    const handleDelete = (feature) => {
        openModal(RemoveFeatureModal, { feature })
    }

    const handleCreate = () => {
        openModal(CreateFeatureModal)
    }

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Features</h2>}
        >
            <Head title="Features" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-12">

                        <table className='w-full'>
                            <tbody className='text-left'>
                                <tr >
                                    <th className=''>Image</th>
                                    <th className=''>Title</th>
                                    <th className=''>Description</th>
                                    <th className=''>Link URL</th>
                                </tr>
                                {props.features.map((feature, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td className='py-6 pr-12'>
                                                <img className='w-[100px] h-[100px] object-cover' src={`http://127.0.0.1:8000/images/${feature.image.name}`} alt="" />
                                            </td>
                                            <td className='py-6 pr-12'>{feature.title}</td>
                                            <td className='py-6 pr-12'>{feature.description}</td>
                                            <td className='py-6 pr-12'>{feature.link_url}</td>
                                            <td className='py-6 pr-12' onClick={() => { handleEdit(feature) }}>EDIT</td>
                                            <td className='py-6 pr-12' onClick={() => { handleDelete(feature) }}>DELETE</td>
                                        </tr>
                                    )
                                }
                                )}
                            </tbody>
                        </table>

                        <button type='button' onClick={() => { handleCreate() }}>CREATE FEATURE</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

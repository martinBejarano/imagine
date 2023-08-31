import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useModal } from '@/Components/ModalTest';
import CreateMemberModal from './Partials/CreateMemberModal';
import EditMemberModal from './Partials/EditMemberModal';
import DeleteMemberModal from './Partials/DeleteMemberModal';

export default function Members(props) {
    const { openModal } = useModal();

    const handleEdit = (member) => {
        openModal(EditMemberModal, { member })
    }

    const handleDelete = (member) => {
        openModal(DeleteMemberModal, { member })
    }

    const handleCreate = () => {
        openModal(CreateMemberModal)
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
                                    <th className=''>First Name</th>
                                    <th className=''>Last Name</th>
                                    <th className=''>Role</th>
                                    <th className=''>Description</th>
                                    <th className=''>Linkedin</th>
                                    <th className=''>Twitter</th>
                                    <th className=''>Facebook</th>
                                </tr>
                                {props.members.map((member, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td className='py-6 pr-12'>
                                                <img className='w-[100px] h-[100px] object-cover' src={`http://127.0.0.1:8000/images/${member.image.name}`} alt="" />
                                            </td>
                                            <td className='py-6 pr-12'>{member.first_name}</td>
                                            <td className='py-6 pr-12'>{member.last_name}</td>
                                            <td className='py-6 pr-12'>{member.role}</td>
                                            <td className='py-6 pr-12'>{member.description}</td>
                                            {/* <td className='py-6 pr-12'>{member.linkedin_url}</td>
                                            <td className='py-6 pr-12'>{member.twitter_url}</td>
                                            <td className='py-6 pr-12'>{member.facebook_url}</td> */}
                                            <td className='py-6 pr-12' onClick={() => { handleEdit(member) }}>EDIT</td>
                                            <td className='py-6 pr-12' onClick={() => { handleDelete(member) }}>DELETE</td>
                                        </tr>
                                    )
                                }
                                )}
                            </tbody>
                        </table>

                        <button type='button' onClick={() => { handleCreate() }}>CREATE MEMBER</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

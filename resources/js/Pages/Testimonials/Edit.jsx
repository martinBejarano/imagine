import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useModal } from '@/Components/ModalTest';
import CreateTestimonialModal from './Partials/CreateTestimonialModal';
import DeleteTestimonialModal from './Partials/DeleteTestimonialModal';
import EditMemberModal from './Partials/EditMemberModal'

export default function Testimonials(props) {
    const { openModal } = useModal();

    const handleEdit = (testimonial) => {
        openModal(EditMemberModal, { testimonial })
    }

    const handleDelete = (testimonial) => {
        openModal(DeleteTestimonialModal, { testimonial })
    }

    const handleCreate = () => {
        openModal(CreateTestimonialModal)
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
                                    <th className=''>Name</th>
                                    <th className=''>Testimonial</th>
                                </tr>
                                {props.testimonials.map((testimonial, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td className='py-6 pr-12'>
                                                <img className='w-[100px] h-[100px] object-cover' src={`http://127.0.0.1:8000/images/${testimonial.image.name}`} alt="" />
                                            </td>
                                            <td className='py-6 pr-12'>{testimonial.name}</td>
                                            <td className='py-6 pr-12'>{testimonial.testimonial}</td>
                                            <td className='py-6 pr-12' onClick={() => { handleEdit(testimonial) }}>EDIT</td>
                                            <td className='py-6 pr-12' onClick={() => { handleDelete(testimonial) }}>DELETE</td>
                                        </tr >
                                    )
                                }
                                )}

                            </tbody>
                        </table>

                        <button type='button' onClick={() => { handleCreate() }}>CREATE TESTIMONIAL</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

/*
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
                                            <td className='py-6 pr-12'>{member.linkedin_url}</td>
                                            <td className='py-6 pr-12'>{member.twitter_url}</td>
                                            <td className='py-6 pr-12'>{member.facebook_url}</td>
                                            <td className='py-6 pr-12' onClick={() => { handleEdit(member) }}>EDIT</td>
                                            <td className='py-6 pr-12' onClick={() => { handleDelete(member) }}>DELETE</td>
                                        </tr >
                                    )
                                }
                                )}
*/
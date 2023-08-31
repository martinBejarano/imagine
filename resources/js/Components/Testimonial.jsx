
const Testimonial = (props) => {

    const { img, testimonial, name } = props;

    return (
        <div className='text-center flex flex-col items-center gap-2'>
            <div className='flex justify-center items-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/40 mb-2 overflow-hidden'>
                <img className="w-full h-full object-cover" src={`/images/${img.name}`} />
            </div>

            <p className='italic font-semibold'>
                "{testimonial}"
            </p>

            <h5>{name}</h5>
        </div>
    )
}

export default Testimonial
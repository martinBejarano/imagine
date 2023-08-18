
const Member = (props) => {

    const { img, name, role, description, className, ...otherProps } = props;

    return (
        <div
            className={`max-w-[350px] text-left ${className || ''}`}
            {...otherProps}
        >
            <div className='w-full h-80 bg-blue mb-6 flex justify-center items-center'>
                {img}
            </div>
            <h4>{name}</h4>
            <h6 className='text-blue uppercase mb-4'>{role}</h6>
            <p>{description}</p>
        </div>
    )
}

export default Member
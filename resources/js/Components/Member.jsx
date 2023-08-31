import { motion } from "framer-motion"

const Member = (props) => {

    const { img, name, role, description, className, ...otherProps } = props;
    return (
        <motion.div
            className={`max-w-[350px] text-left ${className || ''}`}
            {...otherProps}
        >
            <div className='w-full h-80 bg-blue mb-6 flex justify-center items-center'>
                <img className="w-full h-full object-cover" src={`images/${img.name}`} alt=""/>
            </div>
            <h4>{name}</h4>
            <h6 className='text-blue uppercase mb-4'>{role}</h6>
            <p>{description}</p>
        </motion.div>
    )
}

export default Member
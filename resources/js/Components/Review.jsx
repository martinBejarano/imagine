import { motion } from "framer-motion";

const Review = (props) => {

    const { img, name, role, review, className, ...otherProps } = props;

    return (
        <motion.div
            className={`relative border-left border-l-[12px] border-blue rounded-md p-4 ${className || ''}`}
            {...otherProps}
        >
            <div className='flex items-center gap-6 mb-4'>
                <div className='rounded-full bg-blue w-10 h-10 flex justify-center items-center'>{img}</div>
                <span>
                    <h4>{name}</h4>
                    <h5>{role}</h5>
                </span>
            </div>
            <p className='italic'>
                "{review}"
            </p>
        </motion.div>
    )
}

export default Review
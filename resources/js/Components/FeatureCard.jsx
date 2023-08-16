import { motion } from "framer-motion"

const FeatureCard = (props) => {

    const { img, title, body, url, className, ...otherProps } = props;

    return (
        <motion.div
            className={`flex flex-col items-center text-center bg-grey-300 rounded-sm drop-shadow-2xl ${className || ''}`}
            {...otherProps}
        >
            <div className='bg-blue w-20 h-20 p-5 rounded-full absolute top-[-20%] flex justify-center items-center'>
                <img src={img} alt="" />
            </div>
            <div className='p-6 pt-10'>
                <h4 className='mb-2'>{title}</h4>
                <p className='mb-6'>{body}</p>
                <a href={url}>Learn More</a>
            </div>
        </motion.div>
    )
}

export default FeatureCard;

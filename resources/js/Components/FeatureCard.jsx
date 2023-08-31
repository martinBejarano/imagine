import { motion } from "framer-motion"

const FeatureCard = (props) => {

    const { img, title, body, url, className, ...otherProps } = props;

    return (
        <motion.div
            className={`
            relative flex flex-col items-center text-center bg-white rounded-sm shadow-lg shadow-black/30 ${className || ''}`
            }
            {...otherProps}
        >
            <div className='bg-blue w-20 h-20 rounded-full absolute top-[-20%] flex justify-center items-center'>
                <img className='w-[40px] h-[40px] object-contain' src={`http://127.0.0.1:8000/images/${img.name}`} alt={img.alt} />
                {/* {img} */}
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

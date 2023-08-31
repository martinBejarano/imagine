import { motion } from "framer-motion"

const Button = (props) => {
    return (
        <motion.button
            whileHover={props.disabled || { scale: 1.05 }}
            whileTap={props.disabled || { scale: 0.95 }}
            {...props}
            className={`${props.disabled && 'opacity-50'} relative rounded-full py-3 px-8 text-white bg-blue shadow-xl shadow-black/20 ${props.className || ''}`}
        />
    )
}

export default Button;
import { motion } from "framer-motion"

const Button = (props) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
            className={`relative rounded-full py-3 px-8 text-white bg-blue shadow-xl shadow-black/20 ${props.className || ''}`}
        />
    )
}

export default Button;
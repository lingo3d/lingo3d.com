import { motion } from "framer-motion"

const MotionAnimation = ({ children }) => {
    return (
        <motion.div
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.2
            }}
        >
            {children}
        </motion.div>
    )
}

export default MotionAnimation

import { motion } from "framer-motion"

type MotionAnimProps = {
    // children: React.ReactNode - any type of children
    // children: React.ReactElement<MyComponentProps> | React.ReactElement<OtherComponentProps> | React.ReactElement[]; - specific type of children
    children: React.ReactElement | React.ReactElement[]
}

const MotionAnimation = ({ children }: MotionAnimProps) => {
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

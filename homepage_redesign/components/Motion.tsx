import { motion } from "framer-motion"

export const Motion = () => {
    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
                duration: 1.8,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <div className="w-screen flex flex-col justify-top items-center bg-slate-500 py-12">
                <div className="h-[250px] w-[70%] bg-yellow-400 my-2"></div>
                <div className="h-[250px] w-[70%] bg-yellow-400 my-2">
                    <h2>Hello, i am text inside the square</h2>
                </div>
            </div>
            <div></div>
        </motion.div>
    )
}

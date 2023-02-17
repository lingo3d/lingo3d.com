import { motion } from "framer-motion"
import Image from "next/image"

export const CarouselCard = () => {
    return (
        <motion.div
            whileHover={{
                scaleY: 1.1
            }}
            transition={{ duration: 0.4 }}
        >
            <div className="w-[170px] md:min-w-[240px] h-[750px] relative">
                <img
                    src="/monday.png"
                    className="absolute top-0, z-50 text-white px-4 mt-2"
                    alt="company-logo"
                />
                <Image
                    src="/bg-image.jpg"
                    alt="company background"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
        </motion.div>
    )
}

export default CarouselCard

{
    /* <motion.div
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
        </motion.div> */
}

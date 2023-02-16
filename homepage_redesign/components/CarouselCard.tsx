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

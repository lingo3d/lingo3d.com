import Navigation from "@/layouts/Navigation/index"
import VideoSection from "@/components/VideoSection"
import CarouselSection from "@/components/CarouselSection"
import { motion } from "framer-motion"

export default function Home() {
    return (
        <main className="relative h-[4000px] bg-black">
            <motion.div
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{
                    duration: 1.3,
                    delay: 0.2
                }}
            >
                <Navigation />
                <VideoSection />
                <CarouselSection />
            </motion.div>
        </main>
    )
}

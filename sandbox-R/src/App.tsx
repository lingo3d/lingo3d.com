import Sidebar from "./components/Sidebar"
import { useState, useEffect } from "react"
import { useWindowWidth } from "@react-hook/window-size"
import Navbar from "./components/Navbar"

function App() {
    const [windowWidth, setWindowWidth] = useState<number | null>(null)
    const width = useWindowWidth()

    useEffect(() => {
        setWindowWidth(width)
    }, [width])

    return (
        <div className="w-full h-full flex">
            {windowWidth! > 639 && <Sidebar />}
            <main className="flex-1 flex flex-col h-screen bg-red-800">
                <Navbar />
                <div className="flex-1 bg-black">I am the rest of the content</div>
            </main>
        </div>
    )
}

export default App

import Content from "./Content"

const Sidebar = () => {
    return (
        <aside className="w-[220px] h-screen overflow-y-scroll bg-[#292B32] relative">
            {/* <div className="absolute w-full h-full top-0 left-0 bg-white" style={{ opacity: 0.035 }} /> */}
            <Content />
        </aside>
    )
}

export default Sidebar

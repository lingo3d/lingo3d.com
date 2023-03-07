import { showDrawer } from "../../../signals/showDrawer"

const Nav = () => {
    return (
        <nav className="h-[70px] bg-[#121316] flex justify-between">
            <button
                onClick={() => {
                    showDrawer.value = true
                }}
            >
                Click me
            </button>
            <button>Logo</button>
        </nav>
    )
}

export default Nav

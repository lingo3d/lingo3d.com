import img from "/turtles.jpeg"

type SandboxProps = {
    title: string
}

export const Sandbox = ({ title }: SandboxProps) => {
    return (
        <div className="w-full lg:w-1/3 p-4">
            <div className="relative overflow-hidden rounded-lg bg-[#292B32] h-44">
                <div className="absolute inset-0 flex items-start justify-center">
                    <h2 className="text-[#c1c1c1] text-center text-xl font-bold mt-6">
                        {title}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Sandbox

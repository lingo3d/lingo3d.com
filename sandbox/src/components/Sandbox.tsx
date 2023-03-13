type SandboxProps = {
    title: string
    description: string
}

export const Sandbox = ({ title, description }: SandboxProps) => {
    return (
        <div className="w-full lg:w-1/3 p-4 cursor-pointer">
            <div className="relative h-44 overflow-hidden rounded-lg bg-[#292B32] hover:bg-[#292B32] hover:brightness-[1.35] hover:scale-105 transition duration-300 ease-in-out transform">
                <div className="absolute inset-0 flex flex-col items-center justify-between p-4">
                    <h2 className="text-[#c1c1c1] text-center text-xl font-bold ">
                        {title}
                    </h2>
                    <p className="leading-4 text-[14px] ">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Sandbox

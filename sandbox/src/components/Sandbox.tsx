type SandboxProps = {
    title: string
    description: string
}

export const Sandbox = ({ title, description }: SandboxProps) => {
    return (
        <div className="w-full lg:w-1/3 p-4">
            <div className="relative overflow-hidden rounded-lg bg-[#292B32] h-44">
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

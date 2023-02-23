const Partners = () => {
    return (
        <section className="w-full h-full flex justify-center items-center relative">
            <div className="upperColor absolute top-0 w-full h-[50%] bg-[#e5e5e5]" />
            <div className="bottomColor absolute bottom-0 w-full h-[50%] bg-[#434343]" />
            <div
                className="image-container w-full h-[470px] my-[115px] mx-[35px]
                    md:h-[387px] 
                    lg:mx-[90px] 
                    xl:mx-[160px] 
                    2xl:mx-[225px] bg-[#969696] 2xl:h-[591px] z-[100]"
            >
                <picture className="w-full h-full">
                    <source
                        media="(min-width: 768px)"
                        srcSet="/brands_horizontal.png"
                        className="w-full h-full"
                    />
                    <img
                        src="/brands_vertical.png"
                        alt="Logo"
                        className="w-full h-full"
                    />
                </picture>
            </div>
        </section>
    )
}

export default Partners

type DisplayTextProps = {
    displayText: "on" | "off"
}

export const TextOverlay = ({ displayText }: DisplayTextProps) => {
    return (
        <div
            className="transition-all duration-1000 w-[90%] md:w-[60%] lg:w-[50%]"
            style={{
                opacity: displayText === "on" ? 1 : 0,
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 898
            }}
        >
            <div
                className="leading-[48px] md:leading-[66px] lg:leading-[81px] font-[100] text-[40px] md:text-[54px] lg:text-[72px]"
                style={{
                    color: "white",
                    marginBottom: "20px"
                }}
            >
                <div className="flex flex-col flex-wrap lg:flex-nowrap">
                    <div className="lg:flex-grow">We scale ambition</div>
                    <div className="lg:flex-grow">at every stage</div>
                </div>
            </div>
            <div className="text-white text-[18px] font-[300] leading-[24px] lg:leading-[36px] lg:text-[24px]">
                <div className="mb-2">
                    For over <span className="font-[600]">25 years</span>,
                    Insight Partners has helped leaders turn their vision into
                    reality faster and more seamlessly than would be possible
                    alone.
                </div>
                <div className="lg:leading-[30px]">
                    As the trusted partner for more than 600 transformative
                    companies, our deeply experienced software operators, and
                    our flexible capital across every stage of growth, provides
                    everything leaders need to fly faster and further.
                </div>
            </div>
        </div>
    )
}

export default TextOverlay

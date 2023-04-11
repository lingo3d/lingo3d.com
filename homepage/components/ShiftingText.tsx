import React, { useState, useEffect } from "react"

interface ShiftingTextProps {
    text: string
    className?: string
    time: number
}

const random = (a: number, b: number) => {
    return Math.floor(Math.random() * (b - a) + a)
}

function generateRandomText(text: string): string {
    return text
        .split("")
        .map((char) =>
            char === " " ? " " : String.fromCharCode(random(32, 48))
        )
        .join("")
}

function shiftText(currentText: string, text: string): string {
    const nextChars = currentText.split("").map((char, index) => {
        const targetCharCode = text.charCodeAt(index)
        if (char.charCodeAt(0) < targetCharCode) {
            return String.fromCharCode(char.charCodeAt(0) + 1)
        }
        return char
    })
    return nextChars.join("")
}

const ShiftingText: React.FC<ShiftingTextProps> = ({
    text,
    className,
    time
}) => {
    const [currentText, setCurrentText] = useState<string>(
        generateRandomText(text)
    )
    const [isShifting, setIsShifting] = useState<boolean>(true)

    useEffect(() => {
        let interval: number
        if (isShifting) {
            interval = setInterval(() => {
                const nextText = shiftText(currentText, text)
                setCurrentText(nextText)
                if (nextText === text) {
                    setIsShifting(false)
                }
            }, time)
        }
        return () => clearInterval(interval)
    }, [currentText, isShifting, text])

    return <p className={className}>{currentText}</p>
}

export default ShiftingText

import { span } from 'framer-motion/client'
import React, { useEffect, useState } from 'react'

const AnimatedText = ({ text, className, delay }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => {
            clearTimeout(timer)
        }
    }, [])

    useEffect(() => {


        if (!isVisible) return

        const timer = setTimeout(() => {

            if (displayText.length < text.length) {
                setDisplayText((pre) => pre + text[currentIndex])
                setCurrentIndex((pre) => pre + 1)
            }

        }, 70);
        return () => {
            clearTimeout(timer)
        }
    }, [isVisible, displayText])



    return (
        <span className={className}>
            {displayText}
            <span className={`inline-block w-0.5 h-6 bg-[#00ffff] ml-1 animate-pulse ${currentIndex >= text.length ? 'opacity-0' : 'opacity-100'}`} />
        </span>
    )
}

export default AnimatedText
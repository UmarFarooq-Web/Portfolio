import React from 'react'

const FloatingOrb = ({
    size = 'medium',
    color = 'cyan',
    className = '',
    delay = 0
}) => {
    const sizeClasses = {
        small: 'w-8 h-8',
        medium: 'w-16 h-16',
        large: 'w-24 h-24'
    };

    const colorClasses = {
        cyan: 'bg-gradient-to-br from-[#00ffff]/30 to-[#00ffff]/10 shadow-[0_0_30px_rgba(0,255,255,0.3)]',
        purple: 'bg-gradient-to-br from-[#bf00ff]/30 to-[#bf00ff]/10 shadow-[0_0_30px_rgba(191,0,255,0.3)]',
        pink: 'bg-gradient-to-br from-[#ff0080]/30 to-[#ff0080]/10 shadow-[0_0_30px_rgba(255,0,128,0.3)]'
    };

    return (
        <div
            className={`
        ${sizeClasses[size]} 
        ${colorClasses[color]} 
        rounded-full 
        blur-sm 
        animate-float 
        absolute 
        pointer-events-none
        ${className}
      `}
            style={{ animationDelay: `${delay}s` }}
        />
    );
}

export default FloatingOrb
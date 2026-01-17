import React from 'react';

interface LogoProps {
    className?: string;
    showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
    return (
        <div className={`flex flex-col items-center gap-3 ${className}`}>
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center p-3 animate-float">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary">
                    <path d="M12 22C16.4183 22 20 18.2691 20 13.6667C20 10.3333 17.5 7.5 12 2C6.5 7.5 4 10.3333 4 13.6667C4 18.2691 7.58172 22 12 22Z" fill="currentColor" fillOpacity="0.2" />
                    <path d="M12 22C14.2091 22 16 20.2091 16 18C16 15.7909 14.2091 14 12 14C9.79086 14 8 15.7909 8 18C8 20.2091 9.79086 22 12 22Z" fill="currentColor" />
                    <path d="M16 8C16 8 18 9.5 18 12M8 8C8 8 6 9.5 6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>
            {showText && (
                <h1 className="text-white dark:text-white text-sm font-black tracking-[0.2em] uppercase drop-shadow-xl">
                    RiegoFlow
                </h1>
            )}
        </div>
    );
};

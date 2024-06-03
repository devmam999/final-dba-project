import React from 'react';

const ArrowButton = ({ onClick, isArrowRight }) => {
    return (
        <button onClick={onClick} className="text-white text-3xl font-bold relative">
            <div className="rounded-full bg-blue-500 flex items-center justify-center w-16 h-16">
                <div style={{ fontSize: '1.8em', lineHeight: '1', textAlign: 'center', marginBottom: isArrowRight ? '0.18em' : '-0.18em', transform: isArrowRight ? 'rotate(0deg)' : 'rotate(180deg)' }}>
                    &rarr;
                </div>
            </div>
        </button>
    );
}

export default ArrowButton;

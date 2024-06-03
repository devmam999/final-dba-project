import React, { useState } from 'react';
import Button from '../ui/Button'; 
import SaveWater from '../assets/SaveWater.png';

const Water = () => {
    const [infoIndex, setInfoIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [newInfoIndex, setNewInfoIndex] = useState(0);
    const [isArrowRight, setIsArrowRight] = useState(true); // State to manage arrow direction

    const infoContent = [ 
        { 
            title: "1. Save Water",
            subtitle: "Simple actions such as taking <span class='text-blue-600'>shorter</span> showers or turning off the faucet when not in use can cause a lot of that excess water not in use to be used for purposes such as <span class='text-red-500'>farming</span>.",
            image: SaveWater, 
        }, 
        { 
            title: "By allowing for more farming, you allow for more food to be produced, which can help in areas in drought",
            subtitle: "Additionally, it also makes the world a greener place",
            image: SaveWater, 
        } 
    ];

    const handleNext = () => {
        setIsSliding(true);
        setNewInfoIndex((infoIndex + 1) % infoContent.length);
        setIsArrowRight(!isArrowRight); // Toggle arrow direction
        setTimeout(() => {
            setInfoIndex((prevIndex) => (prevIndex + 1) % infoContent.length);
            setIsSliding(false);
        }, 500);
    };

    return (
        <div className="container pl-4 pt-8">
            <div className="flex mt-16 relative overflow-hidden">
                <div className={`flex-1 ${isSliding ? 'slide-enter' : ''}`}>
                    <p className="text-3xl font-bold text-left text-white" dangerouslySetInnerHTML={{ __html: infoContent[newInfoIndex].title }}>
                    </p>
                    <p className="text-3xl mt-16 font-bold text-left text-white" dangerouslySetInnerHTML={{ __html: infoContent[newInfoIndex].subtitle }}>
                    </p>
                </div>
                {infoContent[newInfoIndex].image && (
                    <img src={infoContent[newInfoIndex].image} className={`w-74 h-60 mr-20 ${isSliding ? 'slide-enter' : ''}`} alt="Information" />
                )}
            </div>
            <div className="absolute top-0 right-0 mt-80 mr-4">
                <Button onClick={handleNext} isArrowRight={isArrowRight} />
            </div>
        </div>
    );
}

export default Water;


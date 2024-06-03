import React, { useState } from 'react';
import Button from '../ui/Button'; 
import HurricaneKatrina from '../assets/HurricaneKatrina.png';
import KatrinaDamage from "../assets/KatrinaDamage.png";

const Katrina = () => {
    const [infoIndex, setInfoIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [newInfoIndex, setNewInfoIndex] = useState(0);
    const [isArrowRight, setIsArrowRight] = useState(true); // State to manage arrow direction

    const infoContent = [ 
        { 
            title: "Hurricane Katrina struck the southeastern US in 2005.",
            subtitle: "It was the costliest natural disaster in the US and claimed over <span class='text-red-600'>1,800</span> lives, doing <span class='text-red-500'>$160 billion</span> in damages",
            image: HurricaneKatrina, 
        }, 
        { 
            title: "By August 30, 2005, over <span class='text-red-600'>80%</span> of New Orleans was flooded",
            subtitle: "New Orleans lost <span class='text-red-500'>29%</span> of its population between 2005 and 2011",
            image: KatrinaDamage, 
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

export default Katrina;


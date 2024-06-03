import React, { useState } from 'react';
import Button from '../ui/Button'; 
import CampFire from '../assets/Campfire.png';
import CampDamage from "../assets/Campfiredamage.png";

const Camp = () => {
    const [infoIndex, setInfoIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [newInfoIndex, setNewInfoIndex] = useState(0);
    const [isArrowRight, setIsArrowRight] = useState(true); // State to manage arrow direction

    const infoContent = [
        {
            title: "The Camp Fire was a wildfire that struck Northern California (particulary Butte County) in 2018.",
            subtitle: "It was the world's costliest disaster of 2018, doing <span class='text-red-500'>$16.5 Billion</span> in damages and claiming over <span class='text-red-500'>80 lives</span>",
            image: CampFire,
        },
        {
            title: "It was the deadliest fire in California history, and it formed due to an increase of hot, dry Summers",
            subtitle: "Thousands of homes and other structures were destroyed, and the city of Paradise was completely burned",
            image: CampDamage,
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
        <div className="container pl-4 pt-12">
            <div className="flex mt-0 relative overflow-hidden">
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
            <div className="absolute bottom-0 right-0 -mb-116 mr-4">
                <Button onClick={handleNext} isArrowRight={isArrowRight} />
            </div>
        </div>
    );
}

export default Camp;


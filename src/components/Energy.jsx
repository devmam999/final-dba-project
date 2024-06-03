import React, { useState } from 'react';
import Button from '../ui/Button'; 
import Renewable from "../assets/RenewableE.png";

const Energy = () => {
    const [infoIndex, setInfoIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [newInfoIndex, setNewInfoIndex] = useState(0);
    const [isArrowRight, setIsArrowRight] = useState(true); // State to manage arrow direction

    const infoContent = [
        {
            title: "3. Switch to Renewable Energy",
            subtitle: "Instead of flicking a switch to turn your lights on, you can install solar panels. Additionally, you can also move to a place that utilizes wind energy.",
            image: Renewable,
        },
        {
            title: "Renewable Energy is not only unlimited but also emits almost no carbon dioxide",
            subtitle: "By switching from non-renewable to renewable energy, you help contribute to produce less greenhouse gases",
            image: Renewable,
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
            <div className="absolute bottom-0 right-0 -mb-144 mr-4">
                <Button onClick={handleNext} isArrowRight={isArrowRight} />
            </div>
        </div>
    );
}

export default Energy;


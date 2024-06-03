import React, { useState } from 'react';
import Button from '../ui/Button'; 
import ThreeR from "../assets/ThreeR's.png";

const ThethreeR = () => {
    const [infoIndex, setInfoIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [isArrowRight, setIsArrowRight] = useState(true); // State to manage arrow direction

    const infoContent = [
        {
            title: "2. Reduce Reuse Recycle",
            subtitle1: 'Before buying something, ask yourself "Do I really need this?" ',
            subtitle2: "For duties such as cleaning, you can switch to old clothes and such instead of paper towels",
            subtitle3: "If the item you want to trash is recyclable, recycle it ",
            image: ThreeR,
        },
        {
            subtitle1: "Reducing causes reduced waste, which in turn contributes to a reduced affect of air pollution and climate change",
            subtitle2: "The fashion industry is responsible for 8% of carbon emissions, so reusing would help stop that",
            subtitle3: "Recycling causes a decrease in landfill and contamination",
            image: ThreeR,
        }
    ];

    const handleNext = () => {
        setIsSliding(true);
        setIsArrowRight(!isArrowRight); // Set the arrow direction to false to rotate the button
        setTimeout(() => {
            setInfoIndex((prevIndex) => (prevIndex + 1) % infoContent.length);
        }, 0); // Change content halfway through the animation
        setTimeout(() => {
            setIsSliding(false);
        }, 500);
    };

    return (
        <div className="container pl-4 pt-12">
            <div className="flex mt-0 relative overflow-hidden">
                <div className={`flex-1 ${isSliding ? 'slide-enter' : ''}`}>
                    <p className="text-3xl font-bold text-left text-white" dangerouslySetInnerHTML={{ __html: infoContent[infoIndex].title }}></p>
                    {/* Render subtitles dynamically based on infoIndex */}
                    <div>
                        <p className="text-3xl mt-4 font-bold text-left">
                            <span className="text-red-500">{infoContent[infoIndex].subtitle1}</span>
                        </p>
                        <p className="text-3xl mt-8 font-bold text-left">
                            <span className="text-blue-500">{infoContent[infoIndex].subtitle2}</span>
                        </p>
                        <p className="text-3xl mt-8 font-bold text-left">
                            <span className="text-green-500">{infoContent[infoIndex].subtitle3}</span>
                        </p>
                    </div>
                </div>
                {infoContent[infoIndex].image && (
                    <img src={infoContent[infoIndex].image} className={`w-74 h-60 mr-20 ${isSliding ? 'slide-enter' : ''}`} alt="Information" />
                )}
            </div>
            <div className="absolute bottom-0 right-0 -mb-24 mr-4">
                <Button onClick={handleNext} isArrowRight={isArrowRight} />
            </div>
        </div>
    );
}

export default ThethreeR;

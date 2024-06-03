import React, { useState } from 'react';
import Button from '../ui/Button'; 
import JoplinTornado from '../assets/JoplinTornado.png';
import JoplinDamage from "../assets/JoplinDamage.png";

const Joplin = () => {
    const [infoIndex, setInfoIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [newInfoIndex, setNewInfoIndex] = useState(0);
    const [isArrowRight, setIsArrowRight] = useState(true); // State to manage arrow direction

    const infoContent = [
        {
            title: "The Joplin Tornado struck Joplin, MO in 2011.",
            subtitle: "It was the costliest tornado in US History, doing <span class='text-red-500'>$2.8 Billion</span> in damage and claiming <span class='text-red-500'>158 lives</span>",
            image: JoplinTornado,
        },
        {
            title: "<span class='text-red-500'>82%</span> of homes in Joplin lacked basements, one of the safest spots to hide in during a tornado",
            subtitle: "Nearly <span class='text-red-500'>8,000</span> buildings were destroyed due to the tornado",
            image: JoplinDamage,
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
            <div className="absolute bottom-0 right-0 -mb-24 mr-4">
                <Button onClick={handleNext} isArrowRight={isArrowRight} />
            </div>
        </div>
    );
}

export default Joplin;


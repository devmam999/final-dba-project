import GreenHouse from "../../assets/GreenhouseEffect.png";
import CCEffects from "../../assets/CCEffects.png"

const ClimateChange = () => {
    return (
        <div className="container pl-4 pt-12">
            <p className="text-6xl text-center font-bold text-white">Climate Change</p>
            <div className="flex mt-24">
                <div className="flex-1">
                    <p className="text-5xl font-bold text-left text-white">The Greenhouse Effect</p>
                    <p className="text-3xl mt-16 font-bold text-left text-white">Carbon Dioxide from burning fossil fuels trap excess heat and cause an <span className="text-red-600">increase</span> in the planets temperature.</p>
                </div>
                <img src={GreenHouse} className="w-74 h-60" />
            </div>
            <hr className="my-8 border-t-2 border-gray-300" />
            <div className="flex mt-24">
                <div className="flex-1">
                    <p className="text-5xl font-bold text-left text-white">Climate Change will affect human systems and ecosystems</p>
                    <p className="text-3xl mt-16 font-bold text-left text-white">Some examples of such are shown in the image to the right</p>
                </div>
                <img src={CCEffects} className="w-74 h-60" />
            </div>
        </div>
    )
}

export default ClimateChange;
import Katrina from "../Katrina";
import Joplin from "../Joplin";
import Camp from "../Camp";
import naturalGraph from "../../assets/naturalgraph.png";

const Information = () => {
    return (
        <div className="container pl-4 pt-12">
            <p className="text-6xl text-center font-bold text-white">Information</p>
            <Katrina />
            <hr className="my-8 border-t-2 border-gray-300" />
            <Joplin />
            <hr className="my-8 border-t-2 border-gray-300" />
            <Camp />
            <hr className="my-8 border-t-2 border-gray-300" />
            <div className="flex items-center">
                <div className="w-1/2 pr-4">
                    <p className="text-white text-4xl font-bold -mt-4">And events such as these are happening more often</p>
                    <p className="text-white text-2xl font-bold mt-28">The graph on the right shows the amount of natural disasters happening over the years</p>
                </div>
            <div className="w-1/2 pl-4">
                <img src={naturalGraph} alt="Natural disasters graph" />
            </div>
            </div>

        </div>
    );
}

export default Information;

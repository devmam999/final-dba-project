import Water from "../Water";
import ThethreeR from "../ThethreeR";
import Energy from "../Energy";
import Car from "../Car";

const Action = () => {
    return (
        <div className="container pl-4 pt-12">
            <p className="text-6xl text-center font-bold text-white">What you can do</p>
            <Water />
            <hr className="my-8 border-t-2 border-gray-300" />
            <ThethreeR />
            <hr className="my-8 border-t-2 border-gray-300" />
            <Energy />
            <hr className="my-8 border-t-2 border-gray-300" />
            <Car />
        </div>
    )
}

export default Action;
import { FaCheck } from "react-icons/fa6";
const Features = ({feature}) => {
    return (
        <div>
            <h2 className="flex justify-center gap-5"><FaCheck></FaCheck>{feature}</h2>
        </div>
    );
};

export default Features;
import Features from "../Features/Features";

const PriceOption = ({option}) => {
    const {name,price,features} = option;
    return (
        <div className="flex flex-col shadow-xl p-5 rounded-2xl text-white bg-blue-600 text-center">
            <h2>
                <span className="text-3xl font-bold">{price}</span>
            </h2>
            <h2 className="text-3xl  my-6">{name}</h2>
            <div className="flex-grow">
                {
                    features.map((feature,idx)=><Features key={(idx)} feature={feature}></Features>)
                }
            </div>
            <div>
                <button className="btn bg-green-900 text-xl font-semibold text-white my-4 w-full">Buy Now</button>
            </div>
        </div>
    );
};

export default PriceOption;
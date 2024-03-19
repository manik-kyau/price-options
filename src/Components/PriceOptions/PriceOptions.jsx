import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic",
          "price": "$29.99/month",
          "features": [
            "Access to cardio equipment",
            "Limited access to weight machines",
            "Group fitness classes",
            "Locker access"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": "$49.99/month",
          "features": [
            "Full access to cardio equipment",
            "Full access to weight machines",
            "Group fitness classes",
            "Access to sauna and steam room",
            "Towel service",
            "Personal locker"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": "$79.99/month",
          "features": [
            "All features of Standard plan",
            "Personal training sessions (2/month)",
            "Access to all gym amenities including pool",
            "Nutritional counseling",
            "Complimentary protein shakes",
            "Priority booking for classes"
          ]
        }
      ]
      
    return (
        <div>
            <h2 className="text-4xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6 m-6">
                {
                    priceOptions.map((option,idx)=><PriceOption key={idx} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;
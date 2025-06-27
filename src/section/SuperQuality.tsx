import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <div className="grid grid-cols-2 gap-4" id="about-us">
      <div className="w-full lg:col-span-1 col-span-2 flex flex-col justify-center">
        <div className="flex flex-col">
          <h1 className="text-5xl leading-normal font-semibold font-montserrat">
            We Provide You <span className="text-coral-red">Super Quality</span>{" "}
            Shoes
          </h1>
          <p className="mt-2 text-gray-700">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nihil
            deserunt dignissimos nesciunt magni ut accusantium repellendus!
            Porro atque, nemo enim maxime beatae dicta fuga cumque error quas
            accusamus itaque.
          </p>
          <p className="mt-2 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            tempore.
          </p>
          <Button iconURL="" label="View Details" ></Button>
        </div>
      </div>
      <div className="p-4 w-full lg:col-span-1 col-span-2 flex justify-center items-center">
        <img src={shoe8} alt="" className="object-contain" />
      </div>
    </div>
  );
};

export default SuperQuality;

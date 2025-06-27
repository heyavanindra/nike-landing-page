import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <div className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="Offer" className="object-contain w-full" />
      </div>
      <div className="flex-1">
        <h2 className="text-4xl font-bold font-montserrat ">
          <span className="text-coral-red ">Special</span> Offer
        </h2>
        <p className="text-md leading-normal text-neutral-700  mt-7">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          commodi fuga id aliquid quae ab alias inventore non hic sit, impedit
          delectus sequi nihil consectetur quas eos, autem aliquam nulla?
        </p>
        <div className="mt-11 flex flex-wrap gap-3 ">
          <Button label="Shop now" iconURL={arrowRight} ></Button>
          <Button iconURL="" label="Learn More" className="bg-white text-neutral-800 border-neutral-700"></Button>

        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;

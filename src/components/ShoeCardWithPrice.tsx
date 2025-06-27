import { star } from "../assets/icons/index";
type PopularProductCardProps = {
  imgURL: string;
  name: string;
  price: string;
};
const ShoeCardWithPrice = ({
  imgURL,
  name,
  price,
}: PopularProductCardProps) => {
  return (
    <div className="flex hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8  flex justify-start gap-2.5">
        {[...Array(5)].map((_, idx) => (
          <img key={idx} src={star} alt="rating" className="" width={24} height={24} />
        ))}
      </div>
      <p className="text-xl  leading-normal font-montserrat pt-1 text-slate-gray">
        4.5
      </p>
      <p className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</p>
      <p className="mt-2 font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
    </div>
  );
};

export default ShoeCardWithPrice;

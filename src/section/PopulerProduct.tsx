import ShoeCardWithPrice from "../components/ShoeCardWithPrice";
import { products } from "../constants/constants";

const PopulerProduct = () => {
  return (
    <section className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5 ">
        <div>
          <div className=" font-bold lg:text-6xl max-lg:text-4xl font-montserrat mb-5 ">
            Our <span className="text-coral-red">Popular</span> Products
          </div>
          <p className="mt-2 lg:max-w-lg font-montserrat text-slate-gray">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            officiis aut expedita possimus.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {products.map((product, idx) => (
            <ShoeCardWithPrice {...product} key={idx}></ShoeCardWithPrice>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopulerProduct;

import Button from "../components/Button";
import arrowRight from "../assets/icons/arrow-right.svg";
import { shoes, statistics } from "../constants/constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
const Hero = () => {
  const [bigShoeImg,setBigShoeImg] = useState(bigShoe1)

  return (
    <section
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container padding-1"
      id="home"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center text-start w-full max-xl:padding-x pt-28">
        <p className="text-2xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-16 gap-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          facere!{" "}
        </p>
        <Button label="Shop Now" iconURL={arrowRight}></Button>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((statics, idx) => (
            <div key={idx}>
              <p className="text-4xl font-palanquin font-bold">
                {statics.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {statics.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-10 bg-center  bg-cover bg-primary bg-hero">
        <img
          src={bigShoeImg}
          alt="Bigshow1"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[-3%] sm:left-[10%] max-sm:-bottom-[10%] max-sm:px-6 ">
          {shoes.map((shoe,idx)=>(
            <div key={idx}>
              <ShoeCard imgUrl={shoe} changeBigShoeImage={(shoe)=>{setBigShoeImg(shoe)}} bigShoeImg={bigShoeImg}></ShoeCard>
            </div>
          ))}
        </div>
      </div>
      

    </section>
  );
};

export default Hero;

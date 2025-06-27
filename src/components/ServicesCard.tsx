type ServicesCardProps = {
  icon: string;
  heading: string;
  para: string;
};
const ServicesCard = ({ icon, heading, para }: ServicesCardProps) => {
  return (
    <section className="flex flex-col rounded-2xl bg-neutral-100 p-5 gap-4 drop-shadow-2xl shadow-neutral-600 cursor-pointer hover:scale-105 transition-all duration-100 ease-in-out">
      <img src={icon} className="bg-coral-red rounded-full p-2" alt="Icon" width={50} height={50}/>
      <div className="flex flex-col gap-y-6 mt-5">
        <h1 className="text-4xl ">{heading}</h1>
        <p className="text-xl text-neutral-600 ">{para}</p>
      </div>
    </section>
  );
};

export default ServicesCard;

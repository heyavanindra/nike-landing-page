import ServicesCard from "../components/ServicesCard";
import { services } from "../constants/constants";

const Services = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 p-2 gap-6">
      {services.map((service, idx) => (
        <ServicesCard
          key={idx}
          heading={service.label}
          para={service.subtext}
          icon={service.imgURL}
        ></ServicesCard>
      ))}
    </section>
  );
};

export default Services;

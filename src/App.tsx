import Nav from "./components/Nav";
import {
  Hero,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  CustomerReviews,
  Footer,
  PopulerProduct,
} from "./section";

const App = () => {
  return (
    <main className="relative">
      {/* NavBar */}
      <Nav></Nav>
      <section className="xl:padding-l wide:padding-r padding-b  ">
        <Hero></Hero>
      </section>
      <section className="padding">
        <PopulerProduct></PopulerProduct>
      </section>
      <section className="padding">
        <SuperQuality></SuperQuality>
      </section>
      <section className="padding-x py-10">
        <Services></Services>
      </section>
      <section className="padding">
        <SpecialOffer></SpecialOffer>
      </section>
      <section className="bg-pale-blue padding">
        {" "}
        <CustomerReviews></CustomerReviews>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe></Subscribe>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer></Footer>
      </section>
    </main>
  );
};

export default App;

import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-center items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="sm:text-4xl text-2xl font-semibold  font-montserrat max-lg:text-center text-start">
        Sign Up For <span className="text-coral-red">Updated</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="Subscribe@nike.com" className="input" />
        <div className="flex max-sm:w-full max-sm:justify-end items-center">
          <Button label="Signup" className="w-full"></Button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

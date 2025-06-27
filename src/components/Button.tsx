import  { cn } from "../utils/cn";

type ButtonProps = {
  iconURL?: string;
  label: string;
  className?:string
};

const Button = ({ iconURL, label ,className }: ButtonProps) => {
  return (
    <button className={cn("bg-red-600 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  rounded-full text-white self-start",className)}>
      {label}
      {iconURL && (
        <img src={iconURL} alt="Arrow" className="ml-2 rounded-full w-5 h-5 " />
      )}
    </button>
  );
};

export default Button;

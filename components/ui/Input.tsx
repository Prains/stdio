import { Iui } from "@/utils/interfaces";

type Input = Iui & {
  type?: "text" | "email" | "password";
  placeholder?: string;
};

const Input = ({ type = "text", placeholder, className }: Input) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`h-[52px] w-[250px] truncate rounded-full bg-transparent pl-5 text-[16px] font-bold text-white text-opacity-70 outline transition-all focus:outline-[#CF1585] ${className}`}
    />
  );
};

export default Input;

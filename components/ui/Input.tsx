import { Iui } from "@/utils/interfaces";

type Input = Iui & {
  type?: "text" | "email" | "password" | "phone";
  placeholder?: string;
  value?: any;
  required?: boolean;
};

const Input = ({
  type = "text",
  placeholder,
  className,
  value,
  required,
  onChange,
}: Input) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      className={`h-[52px] w-[250px] truncate rounded-full bg-transparent pl-5 text-[16px] font-bold text-white text-opacity-70 outline transition-all focus:outline-[#CF1585] md:h-[52px] md:w-[500px] ${className}`}
    />
  );
};

export default Input;

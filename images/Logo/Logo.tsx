import Image from "next/image";
import triangle from "./Polygon5.svg";

const Logo = () => {
  return (
    <div className="relative">
      <p className="absolute z-10 top-3 text-[16px] font-normal uppercase tracking-widest text-zinc-100 md:text-[22px]">
       webcult
      </p>
      <Image
        src={triangle}
        priority
        alt="фиолетовый треугольник"
        className="md:h-[77px] md:w-[80px] relative left-3 -z-0"
      />
    </div>
  );
};

export default Logo;

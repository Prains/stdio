import Link from "next/link";
import { Iui } from "@/utils/interfaces";

type LinkButton = Iui & {
  href: string;
  type?: "primary" | "secondary" | "full" | "small" | "rounded";
};

const Primary = ({ href, className, children }: LinkButton) => {
  return (
    <Link
      href={href}
      className={`flex-center h-[40px] w-[280px] rounded-full bg-[#CF1585] text-[12px] font-medium uppercase text-zinc-100 transition-all hover:bg-[#F1F1F1] hover:text-neutral-800  md:h-[80px] md:w-[560px] md:text-[20px] md:font-bold ${className}`}
    >
      {children}
    </Link>
  );
};

const Secondary = ({ href, className, children }: LinkButton) => {
  return (
    <Link
      href={href}
      className={`flex-center h-[40px] w-[260] rounded-full bg-[#CF1585] text-[12px] font-medium uppercase text-zinc-100 transition-all hover:bg-[#F1F1F1] hover:text-neutral-800  md:h-[80px] md:w-[520px] md:text-[20px] md:font-bold ${className}`}
    >
      {children}
    </Link>
  );
};

const Full = ({ href, className, children }: LinkButton) => {
  return (
    <Link
      href={href}
      className={`flex-center h-[80px] w-full rounded-full bg-[#CF1585] text-[12px] font-medium uppercase text-zinc-100 transition-all hover:bg-[#F1F1F1] hover:text-neutral-800  md:text-[20px] md:font-bold ${className}`}
    >
      {children}
    </Link>
  );
};

const Small = ({ href, className, children }: LinkButton) => {
  return (
    <Link
      href={href}
      className={`flex-center h-[40px] w-[280px] rounded-full bg-[#CF1585] text-[12px] font-medium uppercase text-zinc-100 transition-all hover:bg-[#F1F1F1] hover:text-neutral-800  md:h-[80px] md:w-[500px] md:text-[20px] md:font-bold ${className}`}
    >
      {children}
    </Link>
  );
};

const Rounded = ({ href, className, children }: LinkButton) => {
  return (
    <Link
      href={href}
      className={`flex-center h-[125px] w-[125px] rounded-full bg-[#CF1585] text-[12px] font-medium uppercase text-zinc-100 transition-all hover:bg-[#F1F1F1] hover:text-neutral-800  md:h-[80px] md:font-bold ${className}`}
    >
      {children}
    </Link>
  );
};

const LinkButton = ({
  href,
  className,
  children,
  type = "primary",
}: LinkButton) => {
  switch (type) {
    case "secondary":
      return (
        <Secondary href={href} className={className}>
          {children}
        </Secondary>
      );
    case "full":
      return (
        <Full href={href} className={className}>
          {children}
        </Full>
      );
    case "small":
      return (
        <Small href={href} className={className}>
          {children}
        </Small>
      );
    case "rounded":
      return (
        <Rounded href={href} className={className}>
          {children}
        </Rounded>
      );
    default:
      return (
        <Primary href={href} className={className}>
          {children}
        </Primary>
      );
  }
};

export default LinkButton;

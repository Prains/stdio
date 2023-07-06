import { Iui } from "@/utils/interfaces";

type ContentZone = Iui & {
  style?: any;
};

const ContentZone = ({ children, className, style }: ContentZone) => {
  return (
    <div
      className={"mx-auto w-[90%] lg:max-w-[1160px]" + ` ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ContentZone;

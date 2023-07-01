import { Iui } from "@/utils/interfaces";

type ContentZone = Iui & {};

const ContentZone = ({ children, className }: ContentZone) => {
  return (
    <div className={"mx-auto w-[90%] lg:max-w-[1160px]" + ` ${className}`}>
      {children}
    </div>
  );
};

export default ContentZone;

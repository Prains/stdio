import { background } from "@/images/Mainpage/LeadImageBlock";

const LeadImageBlock = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    ></section>
  );
};

export default LeadImageBlock;

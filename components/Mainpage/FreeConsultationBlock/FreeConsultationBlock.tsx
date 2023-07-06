import SendForm from "@/components/SendForm/SendForm";
import { background } from "@/images/Mainpage/LeadImageBlock";

const FreeConsultationBlock = () => {
  return (
    <section
      style={{
        backgroundImage: `url('${background.src}')`,
      }}
      className="flex-center-col my-10 gap-7"
      id="why"
    >
      <h3 className="subtitle w-[194px] text-center font-title md:w-[499px]">
        бесплатная консультация
      </h3>
      <SendForm />
    </section>
  );
};

export default FreeConsultationBlock;

import SendForm from "@/components/SendForm/SendForm";
import ContentZone from "@/components/ui/ContentZone";
import Overlay from "@/components/ui/Overlay";

const PopupSend = () => {
  return (
    <Overlay>
      <ContentZone className="flex-center-col mt-10 gap-5">
        <p className="subtitle w-1/2 text-center font-title">
          заполните данные
        </p>
        <SendForm />
      </ContentZone>
    </Overlay>
  );
};

export default PopupSend;

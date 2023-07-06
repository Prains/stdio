import Overlay from "@/components/ui/Overlay";
import Logo from "@/images/Logo/Logo";
import ContentZone from "@/components/ui/ContentZone";
import backgroud from "./main1000_shapes_2560x1440_p2fks 1.png";

const SuccessPopup = () => {
  return (
    <Overlay
      style={{
        backgroundImage: `url('${backgroud.src}')`,
        backgroundSize: "contain",
      }}
    >
      <ContentZone
        style={{
          backgroundImage: `url('${backgroud.src}')`,
          backgroundSize: "contain",
        }}
      >
        <div className="relative my-20 flex w-full items-center justify-between">
          <Logo />
        </div>
        <p className="subtitle font-title">спасибо за вашу заявку!</p>
        <p className="text-bold mt-5">
          наш менеджер свяжется с вами в ближайшее время
        </p>
      </ContentZone>
    </Overlay>
  );
};

export default SuccessPopup;

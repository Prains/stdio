import Image from "next/image";
import {
  o,
  bulb,
  cursor,
  setting,
  bigO,
  machine,
  transfer,
} from "@/images/Mainpage/Mainblock";
import LinkButton from "@/components/ui/Button";
import { routes } from "@/utils/routes";

const MainBlock = () => {
  return (
    <section className="my-10 flex flex-col">
      <div className="flex-center-col title font-title">
        <p className="flex-center uppercase">
          К<Image src={o} alt="буква о" priority className="md:w-[70px]" />
          мплексная
          <Image src={bulb} alt="лампочка" priority className="md:w-[70px]" />
          <Image src={cursor} alt="курсок" priority className="md:w-[70px]" />
          <Image
            src={setting}
            alt="шестеренка"
            priority
            className="md:w-[70px]"
          />
        </p>
        <p className="flex-center gap-1 uppercase ">
          РАЗРАБ
          <Image
            src={bigO}
            alt="большая буква о"
            priority
            className="md:w-[395px]"
          />
          тка
        </p>
        <p className="flex-center gap-[5px] uppercase">
          веб-продукта
          <Image
            priority
            src={machine}
            alt="электронный аппарат"
            className="md:w-[70px]"
          />
          <Image
            priority
            src={transfer}
            alt="кружочки соединены стрелочками"
            className="md:w-[70px]"
          />
        </p>
      </div>
      <LinkButton
        href={routes.popUpSendMessage}
        className="mt-10 self-center md:mt-5 md:self-end"
      >
        получить консультацию
      </LinkButton>
    </section>
  );
};

export default MainBlock;

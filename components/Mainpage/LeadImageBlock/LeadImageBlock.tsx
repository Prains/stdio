import LinkButton from "@/components/ui/Button";
import {
  background,
  computerGuy,
  scienceGuy,
  bachelor,
} from "@/images/Mainpage/LeadImageBlock";
import { routes } from "@/utils/routes";
import Image from "next/image";

const LeadImageBlock = () => {
  const imageList = [computerGuy, scienceGuy, bachelor];

  return (
    <section
      style={{
        backgroundImage: `url('${background.src}')`,
      }}
      className="my-20 gap-5 py-7"
    >
      <div className="mx-auto flex w-[90%] flex-col gap-5 md:gap-14">
        <div className="flex-center-col gap-2">
          <h3 className="subtitle text-center font-title">
            ваши проекты в надежных руках наших экспертов
          </h3>
          <div className="flex-center gap-2">
            {imageList.map((image, index) => {
              return (
                <Image
                  src={image}
                  alt="изображение"
                  key={index}
                  className="md:h-[50px] md:w-[50px]"
                />
              );
            })}
          </div>
        </div>
        <p className="text-main text-center">
          Одним из наших преимуществ является индивидуальный подход к каждому
          клиенту. Мы стараемся понимать потребности и ожидания наших заказчиков
          и предлагаем решения, которые максимально соответствуют их запросам.
          Также мы всегда придерживаемся сроков и гарантируем качество наших
          услуг.
        </p>
        <LinkButton href={routes.popUpSendMessage} className="mx-auto">
          получить консультацию
        </LinkButton>
      </div>
    </section>
  );
};

export default LeadImageBlock;

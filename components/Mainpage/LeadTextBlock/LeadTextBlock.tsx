import Image from "next/image";
import { tags } from "@/images/Mainpage/LeadTextBlock";

const LeadTextBlock = () => {
  return (
    <section className="mb-10 mt-5 flex flex-col gap-5 md:flex-row md:items-start md:justify-center md:gap-[251px]" id="about">
      <h2 className="text-bold lg:min-w-max">ваша задача - наше решение</h2>
      <div className="flex flex-col gap-10">
        <p className="text-main">
          Покорите мир веб-технологий с нами! В нашей студии вы найдете опыт,
          креативность и гибкость для реализации любого проекта: от сайтов до
          интернет-магазинов, веб-сервисов, приложений под ключ. Мы тонко
          чувствуем ваши потребности и бюджет, предлагая оптимальное сочетание
          цены и качества. Доверьте нам свои амбиции - и мы превратим их в
          реальность
        </p>
        <Image
          src={tags}
          alt="два купона параллельно друг к другу"
          className="hidden self-end md:block"
        />
      </div>
    </section>
  );
};

export default LeadTextBlock;

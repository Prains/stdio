"use client";
import CaseItem from "./CaseItem/CaseItem";
import { friends, deep, thalia, sansearch } from "@/images/Mainpage/Cases";

const CasesBlock = () => {
  const cases = [
    {
      image: friends,
      title: "Сайт фонда Друзья",
      description: "Создан в команде Яндекс.Практикум",
      adress: "https://friendsfoundation.ru",
    },
    {
      image: deep,
      title: "Сайт cerebrus.ru",
      description:
        "Сайт психологического исследования. Содержит 15 психологических тестов, результаты интерпретируются после прохождения",
      adress: "https://cerebrus.ru",
    },
    {
      image: thalia,
      title: "Сайт thaliastudio.ru",
      description:
        "Сайт вязальной мастерицы. Онлайн магазин с виртуальным каталогом",
      adress: "https://thaliastudio.ru",
    },
    {
      image: sansearch,
      title: "Сайт sansearch.ru",
      description: "Сайт по поиску юридических документов",
      adress: "https://sansearch.ru",
    },
  ];

  return (
    <section className="mb-10 mt-5" id="projects">
      <p className="text-bold mb-7">свежие проекты студии</p>
      <article className="flex-center flex-wrap gap-10">
        {cases.map((item) => {
          return (
            <CaseItem
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
              adress={item.adress}
            />
          );
        })}
      </article>
    </section>
  );
};

export default CasesBlock;

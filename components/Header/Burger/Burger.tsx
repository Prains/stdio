"use client";
import ContentZone from "@/components/ui/ContentZone";
import Overlay from "@/components/ui/Overlay";
import { whiteCross } from "@/images/icons";
import Image from "next/image";
import BurgerLink from "./BurgerLink/BurgerLink";
import LinkButton from "@/components/ui/Button";
import { routes } from "@/utils/routes";

const Burger = ({
  burgerShown,
  setBurgerShown,
  menuList,
}: {
  burgerShown: boolean;
  setBurgerShown: Function;
  menuList: { name: string; link: string }[];
}) => {
  const contactsList = [
    {
      name: "bakhtin.work2021@gmail.com",
      link: "mailto:bakhtin.work2021@gmail.com",
    },
    {
      name: "@webcultstudio",
      link: "https://t.me/webcultstudio",
    },
  ];
  return (
    <Overlay>
      <ContentZone className="my-5 flex flex-col gap-5">
        <article className="flex items-center justify-between">
          <div></div>
          <Image
            src={whiteCross}
            alt="две палочки друг в друге"
            priority
            onClick={() => {
              setBurgerShown(false);
            }}
          />
        </article>
        <article className="flex items-start justify-between">
          <ul className="flex flex-col gap-5">
            <p className="text-bold !text-pink-600">Навигация</p>
            {menuList.map((item, index) => {
              return (
                <BurgerLink
                  href={item.link}
                  key={index}
                  setBurgerShown={setBurgerShown}
                >
                  {item.name}
                </BurgerLink>
              );
            })}
          </ul>
          <ul className="flex flex-col gap-5">
            <p className="text-bold !text-pink-600">Свяжитесь с нами</p>
            {contactsList.map((item, index) => {
              return (
                <BurgerLink
                  key={index}
                  href={item.link}
                  setBurgerShown={setBurgerShown}
                >
                  {item.name}
                </BurgerLink>
              );
            })}
          </ul>
        </article>
        <LinkButton
          href={routes.popUpSendMessage}
          className="mx-auto mt-10 h-10 md:h-20"
          type="full"
        >
          связаться
        </LinkButton>
      </ContentZone>
    </Overlay>
  );
};

export default Burger;

"use client";
import Logo from "@/images/Logo/Logo";
import ContentZone from "../ui/ContentZone";
import Image from "next/image";
import { burgerIcon } from "@/images/icons";
import { motion } from "framer-motion";
import { useState } from "react";
import Burger from "./Burger/Burger";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [burgerShown, setBurgerShown] = useState(false);
  const menuList = [
    {
      name: "Наши проекты",
      link: "/#projects",
    },
    {
      name: "Этапы работ",
      link: "/#stages",
    },
    {
      name: "О нас",
      link: "/#about",
    },
    {
      name: "Почему мы",
      link: "/#why",
    },
    {
      name: "Отзывы",
      link: "/#reviews",
    },
  ];

  return (
    <header>
      <ContentZone className="mt-8 flex items-center justify-between">
        <Logo />
        <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
          <Image
            src={burgerIcon}
            alt="три линии друг за другом"
            priority
            className="h-full w-full"
            onClick={() => {
              setBurgerShown(true);
            }}
          />
        </motion.div>
      </ContentZone>
      <AnimatePresence>
        {burgerShown && (
          <Burger
            burgerShown={burgerShown}
            setBurgerShown={setBurgerShown}
            menuList={menuList}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

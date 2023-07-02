"use client";
import Logo from "@/images/Logo/Logo";
import ContentZone from "../ui/ContentZone";
import Image from "next/image";
import { burgerIcon } from "@/images/icons";
import { motion } from "framer-motion";
import { useState } from "react";
import Burger from "./Burger/Burger";

const Header = () => {
  const [burgerShown, setBurgerShown] = useState(false);

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
      {burgerShown && <Burger burgerShown={burgerShown} setBurgerShown={setBurgerShown} />}
    </header>
  );
};

export default Header;

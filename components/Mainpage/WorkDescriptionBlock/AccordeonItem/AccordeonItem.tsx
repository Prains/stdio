"use client";
import { useState } from "react";
import Image from "next/image";
import { pinkCross } from "@/images/icons";
import { motion, AnimatePresence } from "framer-motion";

interface AccordeonItem {
  name: string;
  description: string;
}

const AccordeonItem = ({ name, description }: AccordeonItem) => {
  const [opened, setIsOpened] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        {name}
        <Image
          src={pinkCross}
          alt="розовый крестик крест накрест"
          onClick={() => {
            setIsOpened(!opened);
          }}
          className={`${opened ? "rotate-45" : ""} transition-all`}
        />
      </div>
      <AnimatePresence>
        {opened && (
          <motion.p
            className="text-main mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            exit={{ opacity: 0 }}
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordeonItem;

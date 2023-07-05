"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const CaseItem = ({
  image,
  title,
  description,
  adress,
}: {
  image: StaticImageData;
  title: string;
  description: string;
  adress: string;
}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="relative h-[280px] w-[280px] md:h-[560px] md:w-[560px]">
      <Image
        src={image}
        alt={`первый экран сайта ${title}`}
        className="h-full w-full cursor-pointer object-cover"
        onClick={() => {
          setClicked(true);
        }}
      />
      <AnimatePresence>
        {clicked && (
          <motion.div
            className="absolute top-0 h-full w-full bg-neutral-800/80"
            onClick={() => {
              setClicked(false);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex max-w-[260px] flex-col items-start gap-5 px-2 py-5 md:max-w-[456px] md:gap-10 md:px-10 md:py-10">
              <p className="text-bold">{title}</p>
              <p className="text-main">{description}</p>
              <Link href={adress} target="_blank" className="text-main">
                {adress}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaseItem;

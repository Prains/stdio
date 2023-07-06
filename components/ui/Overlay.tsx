"use client";
import { useEffect } from "react";
import { Iui } from "@/utils/interfaces";
import { motion } from "framer-motion";

type Overlay = Iui & {
  style?: any;
};

const Overlay = ({ children, style }: Overlay) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      className="absolute top-0 z-50 h-full w-full bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      exit={{ opacity: 0 }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default Overlay;

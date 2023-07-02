"use client";
import { useEffect } from "react";
import { Iui } from "@/utils/interfaces";

const Overlay = ({ children }: Iui) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="absolute top-0 h-full w-full bg-black z-50">{children}</div>
  );
};

export default Overlay;

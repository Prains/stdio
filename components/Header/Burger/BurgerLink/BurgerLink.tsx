"use client";

import Link from "next/link";

const BurgerLink = ({
  children,
  setBurgerShown,
  href,
}: {
  children: React.ReactNode;
  setBurgerShown: Function;
  href: string;
}) => {
  return (
    <li>
      <Link
        href={href}
        onClick={() => {
          setBurgerShown(false);
        }}
        className="text-hover text-sm text-zinc-100 md:text-2xl"
      >
        {children}
      </Link>
    </li>
  );
};

export default BurgerLink;

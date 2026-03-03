"use client";

import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
  homeButtonClassName?: string;
  mobileHomeButtonClassName?: string;
};

const navItems = [
  { label: "Как это работает", href: "#how" },
  { label: "Соцсети", href: "#social" },
  { label: "Программа лояльности", href: "#loyalty" },
  { label: "Помощь", href: "#help" },
];

export default function Header({
  homeButtonClassName = "bg-[#c9a227] hover:bg-[#8b6918]",
  mobileHomeButtonClassName = "bg-[#253757] hover:bg-[#1d2b43]",
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="flex h-20 items-center justify-between px-4 md:px-20 bg-[rgba(0,0,0,0.24)] backdrop-blur-[35px]">
        {/* Logo */}
        <div className="flex items-center text-sm font-semibold text-white md:text-2xl">
          ROYAL-BOX
        </div>


      <div className="flex items-center gap-8">
        <nav className="mx-auto hidden items-center gap-8 text-sm text-white md:flex">
          {navItems.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-1 transition-colors hover:text-gray-100"
            >
              <span>{item.label}</span>
              {idx < 2 && (
                <span className="text-[10px] leading-none">▾</span>
              )}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden md:block">
          <Link
            href="/"
            className={`rounded-full px-6 py-4 text-sm font-semibold text-white shadow-sm transition-colors duration-700 ease-out ${homeButtonClassName}`}

          >
            На главную
          </Link>
        </div>
        </div>
        <button
          type="button"
          className="ml-auto flex items-center justify-center rounded-full border border-white/40 p-1 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Открыть меню"
        >
          <span className="block h-0.5 w-5 bg-white" />
          <span className="mt-1 block h-0.5 w-5 bg-white" />
          <span className="mt-1 block h-0.5 w-5 bg-white" />
        </button>
      </div>


      {open && (
        <div className="absolute inset-x-0 top-20 bg-[#c9a227] pb-3 pt-2 text-sm text-white shadow-md md:hidden">
          <nav className="flex flex-col gap-2 px-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-1"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/"
              className={`mt-1 rounded-full px-4 py-2 text-center font-semibold transition-colors duration-500 ${mobileHomeButtonClassName}`}
              onClick={() => setOpen(false)}
            >
              На главную
            </Link>
          </nav>
        </div>
      )}
    </header>
  );


}
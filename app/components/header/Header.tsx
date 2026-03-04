"use client";

import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
  homeButtonClassName?: string;
  mobileHomeButtonClassName?: string;
};

const navItems = [
  { label: "Об условиях", href: "/condition" },
  // { label: "Программа лояльности", href: "#loyalty" },
  { label: "Помощь", href: "/return" },
];

const socialLinks = [
  { label: "Telegram", href: "https://t.me" },
  { label: "VK", href: "https://vk.com" },
];

export default function Header({
  homeButtonClassName = "bg-[#c9a227] hover:bg-[#8b6918]",
  mobileHomeButtonClassName = "bg-[#253757] hover:bg-[#1d2b43]",
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="flex h-20 items-center justify-between bg-[#354c62] px-4 md:px-20">
        {/* Logo */}
        <div className="flex items-center text-sm font-semibold text-white md:text-2xl">
          ROYAL-BOX
        </div>


      <div className="flex items-center gap-8">
        <nav className="mx-auto hidden items-center gap-8 text-sm text-white md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-1 transition-colors hover:text-gray-100"
            >
              <span>{item.label}</span>
            </Link>
          ))}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center text-white transition-opacity hover:opacity-80"
              >
                {social.label === "Telegram" ? (
                  <img
                    src="/img/free-icon-telegram-2111646.png"
                    alt="telegram icon"
                    className="h-8 w-8 object-contain"
                  />
                ) : social.label === "VK" ? (
                  <img
                    src="/img/free-icon-vk-5968835.png"
                    alt="vk icon"
                    className="h-8 w-8 object-contain"
                  />

                ) : (
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm10.25 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
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
            <div className="mt-2 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center text-white"
                >
                  {social.label === "Telegram" ? (
                    <img
                      src="/img/free-icon-telegram-2111646.png"
                      alt="telegram icon"
                      className="h-8 w-8 object-contain"
                    />
                  ) : (
                    <img
                      src="/img/free-icon-vk-5968835.png"
                      alt="vk icon"
                      className="h-8 w-8 object-contain"
                    />
                  )}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );


}
"use client";

import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
  homeButtonClassName?: string;
  mobileHomeButtonClassName?: string;
};

const helpItems = [{ label: "Помощь", href: "/return" }];

const conditionItems = [
  { label: "Доставки", href: "/condition" },
  { label: "Возвраты", href: "/return" },
  { label: "Пошлины", href: "/" },
  // { label: "Оформление заказа", href: "/condition" },
  // { label: "Чат", href: "/return" },
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
  const [mobileConditionsOpen, setMobileConditionsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="flex h-20 items-center justify-between bg-[#354c62] px-4 md:px-20">
        {/* Logo */}
        <div className="flex items-center text-sm font-semibold text-white md:text-2xl">
          ROYAL-BOX
        </div>


        <div className="flex items-center gap-8">
          <nav className="mx-auto hidden items-center gap-8 text-sm text-white md:flex">
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 transition-colors hover:text-gray-100"
              >
                <span>Об условиях</span>
                <span className="text-[10px] leading-none">▾</span>
              </button>

              <div className="invisible absolute left-0 top-full z-50 w-56 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-[#d8dde4] bg-white py-2 shadow-xl">
                  {conditionItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-[#edf1f5]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {helpItems.map((item) => (
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
          className="ml-auto flex h-8 w-11 shrink-0 flex-col items-center justify-center gap-1 rounded-full border border-white/40 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Открыть меню"
        >
          <span className="block h-0.5 w-5 rounded-full bg-white" />
          <span className="block h-0.5 w-5 rounded-full bg-white" />
          <span className="block h-0.5 w-5 rounded-full bg-white" />
        </button>
      </div>


      {open && (
        <div className="absolute inset-x-0 top-20 bg-[#466481] pb-3 pt-2 text-sm text-white shadow-md md:hidden">
          <nav className="flex flex-col gap-2 px-4">
            <button
              type="button"
              className="flex items-center justify-between py-1 text-left"
              onClick={() => setMobileConditionsOpen((prev) => !prev)}
            >
              <span>Об условиях</span>
              <span className={`text-[10px] transition-transform ${mobileConditionsOpen ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>

            {mobileConditionsOpen && (
              <div className="ml-2 rounded-xl bg-white/10 py-1">
                {conditionItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-1.5 text-white/95"
                    onClick={() => {
                      setOpen(false);
                      setMobileConditionsOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {helpItems.map((item) => (
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
              className={`rounded-full px-4 py-2 text-center font-semibold transition-colors duration-500 ${mobileHomeButtonClassName}`}
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
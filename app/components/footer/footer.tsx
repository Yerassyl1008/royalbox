const infoLinks = [
  "О нас",
  "Условия доставки",
  "Возвраты",
  "Таможенные покупки",
  "О службе поддержки",
];

const policyLinks = [
  "Политика обработки персональных данных",
  "Соглашение на обработку персональных данных",
  "Агентский договор",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a111a] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div className="space-y-4">
          <div className="text-3xl font-extrabold tracking-wide text-[#4f6fa4]">
            ROYAL-BOX
          </div>

          <div className="text-sm leading-6 text-white/70">
            <p>© Royal Box 2026</p>
            <p>Все права защищены</p>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-white/90">
              Принимаем оплаты картами
            </p>
            <div className="flex items-center gap-2">
              <span className="rounded bg-[#ed1c24] px-2 py-1 text-[10px] font-bold">
                MC
              </span>
              <span className="rounded bg-[#1a1f71] px-2 py-1 text-[10px] font-bold">
                VISA
              </span>
              <span className="rounded bg-[#2b9e47] px-2 py-1 text-[10px] font-bold">
                МИР
              </span>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-white/90">Наши соцсети</p>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3a8cd8] text-[11px] font-bold">
                VK
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2ca5e0] text-[11px] font-bold">
                TG
              </span>
            </div>
          </div>
        </div>

        <nav className="space-y-2 text-sm font-semibold text-white/90">
          {infoLinks.map((item) => (
            <a key={item} href="#" className="block transition-colors hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <nav className="space-y-2 text-sm font-semibold text-white/90">
          {policyLinks.map((item) => (
            <a key={item} href="#" className="block transition-colors hover:text-white">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

const blocks = [
  {
    id: 1,
    title: "ОФОРМЛЕНИЕ ЗАКАЗА",
    text: "Добавить выбранный товар в корзину,выбрать способ доставки,оплатить удобным вам способом",
    image: "/photo-1.jpg",
  },
  {
    id: 2,
    title: "ОЖИДАНИЕ ЗАКАЗА",
    text: "Купленный вами товар мы ожидаем на своем складе.Как правило брендовые склады укладываются в 2-3дня.",
    image: "/ojidanie.jpg",
  },
  {
    id: 3,
    title: "УПАКОВКА и ОТПРАВЛЕНИЕ ",
    text: "Ваш товар упаковывается в соответствии с требованиями международных отправлений, проверяется правильность данных получателя и отправляется адресату.",
    image: "/dostavka.png",
  },
  {
    id: 4,
    title: "ТАМОЖНЯ И ДОСТАВКА ",
    text: "По прибытию в Россию(Москва) ваш заказ проходит таможню и далее следует по вашему адресу.",
    image: "/tamojna.jpg",
  },
];

export default function Customer() {
  return (
    <section className="bg-[#466481] text-white ">
      <div className="mb-10 w-full border-t border-dashed border-[#7f93ad] py-4" />

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Заголовок секции */}
        <h2 className="mb-12 text-center text-1xl font-extrabold uppercase leading-tight md:text-2xl">
          ОТ ПОКУПКИ ДО ПОЛУЧЕНИЯ
        </h2>

        <div className="space-y-12">
          {blocks.map((block, index) => {
            const isEven = index % 2 === 0;
            const isCheckoutMock = block.id === 1;

            return (
              <div
                key={block.id}
                className="relative overflow-hidden rounded-[32px] bg-[#466481] px-6 py-6 md:px-10 md:py-8 "
              >
                {/* Большой номер на фоне */}
                <span className="pointer-events-none absolute left-4 top-0 text-[120px] font-extrabold leading-none text-white/5 md:left-6 md:text-[180px] ">
                  {block.id}
                </span>

                <div className="grid gap-8 md:grid-cols-2 md:items-center gap-[70px]">
                  {/* Блок с картинкой */}
                  <div
                    className={`relative overflow-hidden rounded-[24px] bg-black/10 ${
                      isEven ? "md:order-2" : ""
                    }`}
                  >
                    {isCheckoutMock ? (
                      <div className="h-full w-full rounded-[22px] border border-white/10 bg-[#252d3f] p-5 text-white box-border">
                        <div className="mb-5 flex items-center justify-between">
                          <h4 className="text-2xl font-bold">Оплата</h4>
                          <span className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold">
                            Онлайн-оплата
                          </span>
                        </div>

                        <div className="space-y-2 text-lg">
                          <div className="flex items-center justify-between text-white/85">
                            <span>Сумма заказа</span>
                            <span>17 609,01 ₽</span>
                          </div>
                          <div className="flex items-center justify-between text-white/85">
                            <span>Сумма скидки</span>
                            <span className="text-[#d3aa2a]">0 ₽</span>
                          </div>
                          <div className="flex items-center justify-between text-white/85">
                            <span>Доставка</span>
                            <span>Бесплатно!</span>
                          </div>
                        </div>

                        <div className="my-5 border-t border-white/10" />

                        <div className="mb-5 flex items-center justify-between">
                          <span className="text-3xl font-bold">Итого</span>
                          <span className="text-4xl font-extrabold">17 609,01 ₽</span>
                        </div>

                        <button
                          type="button"
                          className="w-full rounded-full bg-[#c9a227] px-6 py-4 text-lg font-bold text-white transition-colors duration-500 hover:bg-[#8b6918]"
                        >
                          Оформить заказ
                        </button>
                      </div>
                    ) : (
                      <img
                        src={block.image}
                        alt={block.title}
                        className="h-auto w-full object-contain"
                      />
                    )}
                  </div>

                  {/* Текстовый блок */}
                  <div className={isEven ? "md:order-1" : ""}>
                    <h3 className="mb-4 text-2xl font-extrabold uppercase md:text-3xl">
                      {block.title}
                    </h3>
                    <p className="max-w-md text-sm leading-relaxed md:text-base">
                      {block.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <div className="mt-12 w-full border-t border-dashed border-[#7f93ad]" />
    </section>
  );
}
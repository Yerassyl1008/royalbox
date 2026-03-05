const blocks = [
  {
    id: 1,
    title: "ОФОРМЛЕНИЕ ЗАКАЗА",
    text: "Добавить выбранный товар в корзину, выбрать способ доставки, оплатить удобным вам способом.",
    image: "/photo-1.jpg",
  },
  {
    id: 2,
    title: "ОЖИДАНИЕ ЗАКАЗА",
    text: "Купленный вами товар мы ожидаем на складе. Как правило брендовые магазины укладываются в 2-3 дня.",
    image: "/img/34994a52-3040-4c0a-aea5-0e2df73e62f2.jpg",
  },
  {
    id: 3,
    title: "УПАКОВКА и ОТПРАВЛЕНИЕ ",
    text: "Ваш товар упаковывается в соответствии с требованиями международных отправлений, проверяется правильность данных получателя и отправляется адресату.",
    image: "/img/e70c329c-6d9f-45a3-b379-3f740b941ece.jpg",
  },
  {
    id: 4,
    title: "ТАМОЖНЯ И ДОСТАВКА ",
    text: "По прибытию в Россию (Москва) ваш заказ проходит таможню и далее следует по вашему адресу.",
    image: "/img/1fddbd85-43ee-44ee-8240-359be2f34add.jpg",
  },
];

export default function Customer() {
  return (
    <section className="bg-[#466481] text-white pt-20">
    

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Заголовок секции */}
        <h2 className="mb-12 text-center text-2xl font-extrabold uppercase leading-tight md:text-3xl">
          ОТ ПОКУПКИ ДО ПОЛУЧЕНИЯ
        </h2>

        <div className="space-y-8 md:space-y-12">
          {blocks.map((block, index) => {
            const isEven = index % 2 === 0;
            const isCheckoutMock = block.id === 1;

            return (
              <div
                key={block.id}
                className="relative overflow-hidden rounded-[32px] bg-[#466481] px-6 py-6 md:px-10 md:py-8 "
              >
                {/* Большой номер на фоне */}
                {/* <span className="pointer-events-none absolute left-4 top-0 text-[120px] font-extrabold leading-none text-white/5 md:left-6 md:text-[180px] ">
                  {block.id}
                </span> */}

                <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-[70px]">
                  {/* Блок с картинкой */}
                  <div
                    className={`relative h-[280px] overflow-hidden rounded-[24px] bg-black/10 sm:h-[400px] lg:h-[clamp(260px,32vw,420px)] ${
                      isEven ? "lg:order-2" : ""
                    }`}
                  >
                    {isCheckoutMock ? (
                      <div className="h-full w-full rounded-[22px] border border-white/10 bg-[#252d3f] p-4 text-white box-border sm:p-5">
                        <div className="flex h-full flex-col justify-around">
                        <div className="mb-5 flex items-center justify-between">
                          <h4 className="text-xl font-bold sm:text-2xl">Оплата</h4>
                          <span className="rounded-xl bg-white/10 px-3 py-1 text-[10px] font-semibold sm:px-4 sm:py-2 sm:text-sm">
                            Онлайн-оплата
                          </span>
                        </div>

                        <div className="space-y-1 text-sm sm:space-y-2 sm:text-lg">
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


                        <div>
                          <div className="mt-auto flex items-center justify-between pb-3 sm:pb-4 max-[380px]:hidden">
                            <span className="text-2xl font-bold sm:text-2xl">Итого</span>
                            <span className="text-3xl font-extrabold sm:text-3xl">17 609,01 ₽</span>
                          </div>

                          <button
                            type="button"
                            className="w-full rounded-full bg-[#c9a227] px-4 py-3 text-base font-bold text-white transition-colors duration-500 hover:bg-[#8b6918] sm:px-6 sm:py-4 sm:text-lg"
                          >
                            Оформить заказ
                          </button> 
                        </div>
                       
                        </div>
                      </div>
                    ) : (
                      <img
                        src={block.image}
                        alt={block.title}
                        className="block h-full w-full object-cover"
                      />
                    )}
                  </div>

                  {/* Текстовый блок */}
                  <div className={isEven ? "lg:order-1" : ""}>
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
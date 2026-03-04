const blocks = [
  {
    id: 1,
    title: "ROYALBOX СОБРАЛ В СЕБЕ ЛУЧШЕЕ",
    text: "Платформа включает в себя лучшие и популярные бренды англиских, европейских и амереканских товаров. И продалжает развиватся.",
    image: "/img/7328ca2c-559d-4765-bc16-abd461b1aeb4.jpg",
  },
  {
    id: 2,
    title: "Удобный поиск товаров",
    text: "Мы продолжаем улучшать сайт и приложение,\nдля быстрого поиска нужной вещи.",
    image: "/img/774608b2-9857-4e64-9847-46d60503aa52.jpg",
  },
  {
    id: 3,
    title: "Плати в рублях",
    text: "Выбери свой удобный способ оплаты. \nЛюбая карта российского банка.",
    image: "/img/532ff57a-8e66-4e87-84e9-fddcffd8051b.jpg",
  },
  {
    id: 4,
    title: "Логистика ",
    text: "Сделай выбор товара, а мы позаботимся о скорой \nдоставке прямо из Англий. Отслеживай весь путь \n от Лондона до своей двери.",
    image: "/img/1533511f-7461-49b1-a316-b273fae859fb.jpg",
  },
  {
    id: 5,
    title: "Поддержка ",
    text: "При возникновении вопросов с выбором, доставкой, браком, готовы в максимально быстрый срок разрешить их.",
    image: "/img/b6dc1dfa-1248-449c-96eb-e2efed92e697.jpg",
  },
];

export default function Content() {
  return (
    <section className="bg-[#466481] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Заголовок секции */}
        {/* <h2 className="mb-12 text-center text-3xl font-extrabold uppercase leading-tight md:text-5xl">
          С НАМИ ВЫГОДНО <br className="hidden md:block" /> И УДОБНО
        </h2> */}

        <div className="space-y-12">
          {blocks.map((block, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={block.id}
                className="relative overflow-hidden rounded-[32px] bg-[#466481] px-6 py-6 md:px-10 md:py-8 "
              >
                {/* Большой номер на фоне */}
                {/* <span className="pointer-events-none absolute left-4 top-0 text-[120px] font-extrabold leading-none text-white/5 md:left-6 md:text-[180px] ">
                  {block.id}
                </span> */}

                <div className="grid gap-8 md:grid-cols-2 md:items-center gap-[70px]">
                  {/* Блок с картинкой */}
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-[24px] bg-black/10 ${
                      isEven ? "md:order-2" : ""
                    }`}
                  >
                    <img
                      src={block.image}
                      alt={block.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Текстовый блок */}
                  <div className={isEven ? "md:order-1" : ""}>
                    <h3 className="mb-2 text-2xl font-extrabold uppercase md:text-2xl">
                      {block.title}
                    </h3>
                    <p className="max-w-md whitespace-pre-line text-sm leading-relaxed md:text-base">
                      {block.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
     
    </section>
  );
}
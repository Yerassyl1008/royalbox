import Header from "../components/header/Header";

export default function Return() {
  return (
    <div className="bg-[#466481] text-white">
      <Header />
      <section className="bg-[#c9a227]  py-35 ">
        <h1 className="mx-auto max-w-6xl text-center text-4xl font-extrabold uppercase leading-none text-white  md:text-4xl pt-15">
          Условия возврата
        </h1>
      </section>
      <main className="mx-auto max-w-6xl px-6 pb-20 pt-18 md:px-10">
        <section className="mb-18">
          <h2 className="mb-6 text-5xl font-extrabold uppercase leading-none md:text-2xl">
            Отмена и изменение заказа
          </h2>
          <ul className="list-disc space-y-3 pl-8 text-xl leading-relaxed md:text-2xl">
            <li>
              Срок для отмены: Вы можете полностью отменить заказ в течение 1
              часа после оплаты.
            </li>
            <li>
              Как отменить: Самостоятельно в личном кабинете или через чат
              поддержки (в рабочее время). Если нас нет на связи — оставьте
              сообщение.
            </li>
            <li>
              Изменения: Редактирование состава (размер, цвет, позиции)
              невозможно. Оформите отмену и создайте новый заказ.
            </li>
            <li>
              Важно: По истечении часа отмена или возврат возможны только при
              обнаружении брака или ошибки склада.
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-5xl font-extrabold uppercase leading-none md:text-2xl">
            Что делать, если с товаром что то не так?
          </h2>
          <ul className="list-disc space-y-3 pl-8 text-xl leading-relaxed md:text-2xl">
            <li>
              Мы вернем деньги, если вещь пришла с повреждениями: пятнами,
              дырками или явными дефектами пошива.
            </li>
            <li>
              Для обуви браком считаются любые неровности подошвы или стельки,
              которые доставляют дискомфорт.
            </li>
            <li>
              Если мы ошиблись и прислали не тот цвет или размер — мы
              оперативно все исправим.
            </li>
            <li>
              Обратите внимание: небольшие следы клея или нитки допустимы
              технологией производства и браком не являются.
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-5xl font-extrabold uppercase leading-none md:text-2xl">
            Можно ли вернуть товар, если я передумал?
          </h2>
          <p className="text-xl leading-relaxed md:text-2xl">
            Товары выкупаются с магазинов (складов) Великобритании, и сроки
            международной пересылки превышают время, отведенное брендами на
            возврат. Пожалуйста, внимательно сверяйтесь с размерной сеткой
            перед покупкой.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-extrabold uppercase leading-none md:text-2xl">
            Отмена заказа магазином
          </h2>
          <h3 className="mb-4 text-3xl  md:text-2xl">
            Если товара не оказалось в наличии
          </h3>
          <p className="mb-5 text-xl leading-relaxed md:text-2xl">
            Платформа выкупает заказы напрямую со складов Великобритании и
            стран ЕС. Иногда склад - магазин сообщает об отсутствии позиции уже
            в процессе сборки. В этом случае происходит автоматическая отмена
            вашего заказа.
          </p>
          <ul className="mb-10 list-disc space-y-3 pl-8 text-xl leading-relaxed md:text-2xl">
            <li>
              Возврат средств: Как только склад - магазин вернет деньги, они
              моментально зачислятся на ваш банковский баланс. На практике это
              занимает от нескольких часов до 3-х дней.
            </li>
          </ul>

          <h3 className="mb-4 text-4xl font-extrabold uppercase md:text-2xl">
            Порядок действий при обнаружении брака:
          </h3>
          <p className="mb-5 text-xl leading-relaxed md:text-2xl">
            Если вы обнаружили дефект, пожалуйста, напишите нам в чат как можно
            скорее с момента получения. Приложите номер заказа, фото товара (с
            бирками) и упаковки.
          </p>

          <h4 className="mb-4 text-3xl font-bold md:text-2xl">Важные условия:</h4>
          <ul className="mb-10 list-disc space-y-3 pl-8 text-xl leading-relaxed md:text-2xl">
            <li>Принимаются только новые вещи без следов использования в оригинальной упаковке.</li>
            <li>Отправляйте возврат в коробке с нашим стикером.</li>
            <li>Обязательно согласуйте отправку с поддержкой, иначе сроки обработки увеличатся.</li>
          </ul>

          <h4 className="mb-4 text-3xl font-bold md:text-2xl">Возврат средств:</h4>
          <p className="text-xl leading-relaxed md:text-2xl">
          Мы сверим товар с вашими фото и отправим его бренду в Великобритании. Средства вернутся на ваш банковский счет после оформления возврата магазином. Весь цикл занимает от 30 до 45 дней.
          </p>
        </section>
      </main>
    </div>
  );
}
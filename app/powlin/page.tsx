import Header from "../components/header/Header"

export default function Powlin() {
  return (
    <div className="bg-[#466481] text-white">
      <Header />
      <section className="bg-[#c9a227]  pt-34 pb-30 flex flex-col items-center justify-center gap-2">
        <h1 className="mx-auto max-w-6xl text-center text-4xl font-extrabold uppercase leading-none text-white  md:text-4xl pt-15">
          ТАМОЖЕННОЕ ОФОРМЛЕНИЕ
        </h1>
        <p className="text-lg leading-tight md:text-xl text-center" >Посылки стоимостью до 200 евро проходят таможенное оформление бесплатно</p>
      </section>

      <section className="bg-[#466481] flex justify-center py-10 ">
        <div className="w-full max-w-6xl space-y-2 px-4 text-left md:px-10 space-y-6">
          <p className="text-lg leading-tight md:text-xl">При оформлении заказа вам необходимо ввести свои паспортные данные в личном кабинете в разделе “ТАМОЖНЯ”. Эти данные необходимы для того, чтобы мы могли сделать международную отправку вашего заказа. Введенные сведения сохраняются, при следующем заказе, нет необходимости повторно их вводить. <br />Если вы проигнорируете эту необходимость, к сожалению мы не можем отправить вашу покупку.</p>
          <p className="text-lg leading-tight md:text-xl">На товар, который превышает 200 евро, будет начислена пошлина. Для оплаты пошлины мы пришлем вам ссылку.</p>
          <p className="text-lg leading-tight md:text-xl">Пошлина — 15% и начисляется не на весь товар, а только на сумму, которая выходит за лимит.</p>
          <p className="text-lg leading-tight md:text-xl">НАПРИМЕР</p>
          <p className="text-lg leading-tight md:text-xl">Ваш заказ стоимостью 30 000 ₽, то есть €300. <br />
В данном случае таможенный бесплатный лимит превышает на €100. <br />
Пошлина за €100 составляет €15. <br /></p>
          <p className="text-lg leading-tight md:text-xl">Для удобства примера расчета мы взяли курс €1= 100</p>
        </div>
      </section>
    </div>
  )
}
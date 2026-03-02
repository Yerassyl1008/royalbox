export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#eb1c24] text-white">
      {/* Текстовый контейнер слева */}
      <div className="mx-auto max-w-6xl px-4 pt-28 pb-24 md:px-8 md:pt-32">
        <div className="flex flex-col items-center justify-center max-w-[400px] text-center md:text-left pt-[50px] pb-[10px]">
          <h1 className="text-3xl font-extrabold uppercase leading-tight mb-2">
            С НАМИ НАДЕЖНО И КОМФОРТНО
          </h1>
          <p className="text-lg leading-tight md:text-xl">
            Мы вдохновлены идеей сделать международную моду доступной каждому
          </p>
        </div>
      </div>

      {/* Картинка, выходящая за контейнер вправо */}
      <div className="pointer-events-none absolute right-[-220px] top-1/2 hidden -translate-y-1/2 md:block">
        <div className="relative z-10 aspect-[16/9] w-[780px] overflow-hidden rounded-[40px]">
          <img
            src="/photo-1.jpg"
            alt="Usmall"
            className="absolute inset-0 h-full w-full scale-125 object-cover"
          />
        </div>
      </div>

      {/* Мобильный вариант картинки внутри контейнера */}
      <div className="mx-auto mt-10 w-full max-w-md px-4 pb-16 md:hidden">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[32px]">
          <img
            src="/photo-1.jpg"
            alt="Usmall"
            className="absolute inset-0 h-full w-full scale-110 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
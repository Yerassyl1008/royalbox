import Link from "next/link";

export default function Catalog() {
  return (
    <section className="px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[22px]  px-6 py-10 text-center text-[#f0e4d0]  md:px-12 md:py-12">
        <h2 className="text-4xl font-semibold leading-tight tracking-wide md:text-3xl">
          Готовы обновить гардероб?
        </h2>

        <p className="mx-auto mt-2 max-w-3xl text-xl leading-light text-[#d5c8b3] md:mt-3 md:text-2xl">
          Откройте для себя лучшие коллекции одежды и обуви уже сейчас.
        </p>

       <Link href="/condition">
        <button
          // href="/condition"
          // onClick={() => {
          //   router.push("/condition");
          // }}
          type="button"
          className="mt-8 rounded-xl border border-[#a78554] bg-[linear-gradient(180deg,#e5c38f_0%,#cda168_100%)] px-8 py-4 text-2xl font-semibold uppercase tracking-[0.08em] text-[#2a1f13]  transition hover:brightness-105 md:mt-8 md:px-6 md:py-5 md:text-2xl"
        >
          Перейти в каталог
        </button>
        </Link>
        <div className="mt-8 flex items-center justify-center gap-4 text-[#d7b47b] md:mt-10">
          <span className="h-px w-14 bg-[#8d7350] md:w-20" />
          <span className="text-xl tracking-[0.35em] md:text-2xl">★★★★★</span>
          <span className="h-px w-14 bg-[#8d7350] md:w-20" />
        </div>
      </div>
    </section>
  );
}
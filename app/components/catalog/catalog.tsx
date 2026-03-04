import Link from "next/link";

export default function Catalog() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-8 text-white">
       {/* <div className="pb-16 w-full border-t border-dashed border-[#7f93ad] py-4" /> */}
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[22px]  px-6 py-10 text-center   md:px-12 md:py-12">
        <h2 className="text-4xl font-semibold leading-tight tracking-wide md:text-3xl">
          Готовы обновить гардероб?
        </h2>

        <p className="mx-auto mt-2 max-w-3xl text-xl leading-light  md:mt-3 md:text-2xl">
          Откройте для себя лучшие коллекции одежды и обуви уже сейчас.
        </p>

       <Link href="/condition">
        <button
          // href="/condition"
          // onClick={() => {
          //   router.push("/condition");
          // }}
          type="button"
          className="mt-8 rounded-4xl bg-[#c9a227] px-8 py-4 text-1xl font-semibold uppercase tracking-[0.08em] text-white shadow-sm transition-colors duration-700 ease-out hover:bg-[#8b6918] md:mt-8 md:px-8 md:py-5 md:text-1xl"
        >
          Перейти в каталог
        </button>
        </Link>
        {/* <div className="mt-8 flex items-center justify-center gap-4 text-[#d7b47b] md:mt-10">
          <span className="h-px w-14 bg-[#8d7350] md:w-20" />
          <span className="text-xl tracking-[0.35em] md:text-2xl">★★★★★</span>
          <span className="h-px w-14 bg-[#8d7350] md:w-20" />
        </div> */}
      </div>
    </section>
  );
}
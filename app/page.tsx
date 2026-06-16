import Image from "next/image";

const holyPlaces = [
  {
    title: "Храм Гроба Господњег",
    text: "Овде човек утиша корак и срце. Овде се поклања Живоносном Гробу, из кога је Господ васкрсао и смрћу смрт победио.",
    image: "/images/holy-sepulchre-entrance.JPG",
  },
  {
    title: "Голгота",
    text: "На Голготи се не говори много. Ту се стоји пред Крстом, пред љубављу Божјом која се распела за живот света.",
    image: "/images/holy-sepulchre-interior.JPG",
  },
  {
    title: "Плоча миропомазања",
    text: "Свето место суза, тишине и благодарности, где се поклоник сећа погребења Христовог и тајне Велике суботе.",
    image: "/images/golgotha-altar.JPG",
  },
  {
    title: "Поклоници у Светој Земљи",
    text: "Народ Божји на путу ка светињама. Не као путници радозналости, него као деца која долазе у дом Оца свога.",
    image: "/images/nativity-mural-bethlehem.jpg",
  },
  {
    title: "Пустињске светиње",
    text: "У пустињи се чује оно што се у светској буци не чује: молитва, покајање и сведочанство светих отаца.",
    image: "/images/desert-monastery.jpg",
  },
  {
    title: "Васкрс у Светој Земљи",
    text: "У Јерусалиму, у дане Страдања и Васкрсења, срце јасније разуме речи: Христос воскресе из мртвих.",
    image: "/images/holy-fire-jerusalem.JPG",
  },
];

const program = [
  "Полазак на пут са молитвом и благословом",
  "Поклоњење месту Рођења Христовог у Витлејему",
  "Јерусалим, Маслинова гора и Гетсимански врт",
  "Пут Страдања, Голгота и Живоносни Гроб Господњи",
  "Сионска гора, Соба Тајне вечере и светиње Старог града",
  "Назарет, Тавор и Галилеја",
  "Јордан, Јерихон и светиње Јудејске пустиње",
  "Повратак кући са благословом Свете Земље",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-stone-950/75 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <p className="text-lg font-semibold tracking-wide text-white">
              Света Земља
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
              Поклоничко путовање
            </p>
          </div>

          <nav className="hidden gap-7 text-sm text-stone-100 md:flex">
            <a href="#o-putovanju" className="hover:text-amber-200">
              О путу
            </a>
            <a href="#svetinja" className="hover:text-amber-200">
              Светиње
            </a>
            <a href="#program" className="hover:text-amber-200">
              Поредак пута
            </a>
            <a href="#kontakt" className="hover:text-amber-200">
              Контакт
            </a>
          </nav>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden">
        <Image
          src="/images/hero-jerusalem-panorama.jpg"
          alt="Панорама Свете Земље"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-stone-950/25" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-block rounded-full border border-amber-200/40 bg-white/10 px-4 py-2 text-sm text-amber-100 backdrop-blur">
              Јерусалим • Витлејем • Галилеја • Јордан
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
              Пут у земљу Христовог рођења, страдања и Васкрсења
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-stone-100 md:text-xl">
              Света Земља није место које се само гледа. Она је земља пред којом
              се човек крсти, ћути, моли и поклања. Ко у њу уђе са вером, не
              враћа се исти.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#program"
                className="rounded-full bg-amber-500 px-7 py-3 text-center font-semibold text-stone-950 transition hover:bg-amber-400"
              >
                Погледај пут поклоњења
              </a>
              <a
                href="#kontakt"
                className="rounded-full border border-white/60 px-7 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-stone-950"
              >
                Пријава и благослов
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="o-putovanju" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              О путу
            </p>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Не путовање ради разгледања, него ход ради поклоњења
            </h2>
            <p className="mb-5 text-lg leading-8 text-stone-700">
              У Свету Земљу се не иде као у непознату земљу, него као у
              завичај вере. Тамо су камен, пут, гора, река и гроб постали
              сведоци Јеванђеља.
            </p>
            <p className="text-lg leading-8 text-stone-700">
              Поклоник иде да целива места освећена Господом, да се сети свога
              крштења на Јордану, да заплаче у Гетсиманији, да стане под Крст
              на Голготи и да се обрадује пред празним Гробом Господњим.
            </p>
          </div>

          <div className="relative h-[460px] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/257.JPG"
              alt="Поклоници у Светој Земљи"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="svetinja" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              Светиње
            </p>
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">
              Места пред којима се душа поклања
            </h2>
            <p className="text-lg leading-8 text-stone-700">
              На овом путу човек не сабира утиске, него благослове. Не броји
              места, него памти тренутке у којима је срце било ближе Богу.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {holyPlaces.map((place) => (
              <article
                key={place.title}
                className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64">
                  <Image
                    src={place.image}
                    alt={place.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="mb-3 text-2xl font-bold">{place.title}</h3>
                  <p className="leading-7 text-stone-700">{place.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              Поредак пута
            </p>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Пут којим се иде са молитвом
            </h2>
            <p className="text-lg leading-8 text-stone-700">
              Поредак обиласка зависи од богослужења, празника, могућности
              уласка у светиње и прилика на самом месту. Најважније је да се
              сваки корак учини са миром, вером и страхопоштовањем.
            </p>
          </div>

          <div className="rounded-3xl bg-stone-900 p-6 text-white shadow-2xl md:p-8">
            <div className="space-y-4">
              {program.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl bg-white/10 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 font-bold text-stone-950">
                    {index + 1}
                  </div>
                  <p className="pt-2 leading-7 text-stone-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28">
        <Image
          src="/images/orthodox-service-holy-land.JPG"
          alt="Богослужење у Светој Земљи"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-stone-950/75" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            Духовни смисао
          </p>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Ко се поклони Гробу, нека понесе Васкрсење у срцу
          </h2>
          <p className="text-lg leading-8 text-stone-100">
            Света Земља опомиње човека да је живот дар, да је Крст пут, а да је
            Васкрсење последња реч Божја над светом. Зато се са овог пута не
            носе само фотографије, него молитва, мир и благослов.
          </p>
        </div>
      </section>

      <section id="kontakt" className="bg-stone-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
                Контакт
              </p>
              <h2 className="mb-5 text-4xl font-bold">
                Пријава за поклоничко путовање
              </h2>
              <p className="text-lg leading-8 text-stone-300">
                За датуме, услове путовања и детаљан програм можете послати
                упит. Сваки пут почиње договором, а најпре добром намером и
                молитвом.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-stone-900">
              <p className="mb-2 text-sm uppercase tracking-[0.25em] text-stone-500">
                Информације
              </p>
              <p className="mb-4 text-2xl font-bold">Поклоничка путовања</p>
              <p className="mb-2 text-stone-700">
                Телефон: <span className="font-semibold">+381 XX XXX XXXX</span>
              </p>
              <p className="mb-6 text-stone-700">
                Email: <span className="font-semibold">info@example.com</span>
              </p>
              <a
                href="mailto:info@example.com"
                className="inline-block rounded-full bg-amber-500 px-7 py-3 font-semibold text-stone-950 transition hover:bg-amber-400"
              >
                Пошаљи упит
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
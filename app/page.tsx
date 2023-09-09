import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-3xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
          NarediMaturo
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>Kdaj pridemo?</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 `}>20.02.2024</p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>Priprava na Maturo</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Si se pripravljen pripraviti na maturo na čisto drugačen način?
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>Umetna Inteligenca </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Z umetno inteligenco do boljšega znanja?
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>Spremljaj nas</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <a
              href="https://instagram.com/naredimaturo?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

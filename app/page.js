import { MainLogo } from '@/components/mainlogo/logo'


export default function Home() {
  return (
    <main className=" bg-teal-700">
      <header className='px-4 py-16 md:h-[60vh] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl  lg:px-8 lg:py-10'>
        <MainLogo />
        <section>
          <h1 className='font-bold text-6xl text-white'>Bridging Ideas with Design</h1>
        </section>
        <section className='socials'>
          <h2>social media accoutns</h2>
        </section>
      </header>
    </main>
  )
}

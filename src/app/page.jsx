import JokesGenerator from '@/components/advice/JokesGenerator'
import Image from 'next/image'

export default function Home() {
  return (
    <section className=' min-h-screen w-full bg-[#202632]'>
      <JokesGenerator/>
    </section>
  )
}

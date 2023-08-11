"use client";
import JokesGenerator from '@/components/advice/JokesGenerator'
import { ThemeButton } from '@/components/entities/Entity'
import { useAdviceContext } from '@/components/provider/Context'

export default function Home() {
  const {isToggled} = useAdviceContext()
  return (
    <section className={`min-h-screen px-5 flex flex-col justify-center items-center ${isToggled ? "bg-[rgb(214,219,220)]": "bg-[#202632]"} w-full `}>
      <ThemeButton/>
      <JokesGenerator/>
    </section>
  )
}

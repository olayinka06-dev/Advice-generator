"use client";
import JokesGenerator from "@/components/advice/JokesGenerator";
import { ThemeButton } from "@/components/entities/Entity";
import { useAdviceContext } from "@/components/provider/Context";

export default function Home() {
  const { allData } = useAdviceContext();
  return (
    <section
      className={`min-h-screen py-10 px-5 flex flex-col justify-center items-center ${
        allData.isToggled
          ? "light-mode bg-[var(--primary-color)]"
          : "dark-mode bg-[var(--primary-color)]"
      } w-full `}
    >
      <ThemeButton />
      <JokesGenerator />
    </section>
  );
}

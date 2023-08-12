"use client";
import JokesGenerator from "@/components/advice/JokesGenerator";
import { ThemeButton } from "@/components/entities/Entity";
import { useAdviceContext } from "@/components/provider/Context";

export default function Home() {
  const { isToggled } = useAdviceContext();
  return (
    <section
      className={`min-h-screen px-5 flex flex-col justify-center items-center ${
        isToggled
          ? "light-mode bg-[var(--primary-color)]"
          : "dark-mode bg-[var(--primary-color)]"
      } w-full `}
    >
      <ThemeButton />
      <JokesGenerator />
      <div className="text-[var(--text-color)] absolute text-center bottom-1">
        <span className="">
          Built with Love by <span className="text-[red]">Olayinka_Dev</span>
        </span> <br />
        <span>Follow and give it a star on </span><button>Github</button>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { useAdviceContext } from "../provider/Context";
import { CopyButton, GeneratedJoke, PreLoader, SearchById, SpeechButton } from "../entities/Entity";

const JokesGenerator = () => {
  const { allData } = useAdviceContext();
  return (
    <section>
      <h1 className="text-center text-[var(--text-color)] text-[20px] md:text-[30px]">The Advice Generator</h1>
      <div className="bg-[var(--secondary-color)] shadow flex flex-col gap-3 relative px-4 md:px-6 py-3 rounded-2xl h-80">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2 items-center">
            <SpeechButton />
            <SearchById />
            <CopyButton />
          </div>
          {allData.isLoading ? (
            <PreLoader />
          ) : (
            <div className="flex flex-col gap-1">
              <div className="text-center">
                {allData.jokeQoute && allData.jokeQoute.slip && (
                  <h3 className="text-[hsl(150,100%,66%)]">
                    Advice # {allData.jokeQoute.slip.id}
                  </h3>
                )}
                {allData.error && <p className="text-[red] bg-[rgba(0,0,0.5)] mt-5 text-sm md:text-[16px] rounded">{allData.error}</p>}
              </div>
              <div className="text-center">
                {allData.jokeQoute && allData.jokeQoute.slip && (
                  <span className="text-[hsl(193,38%,86%)] text-[15px] md:text-[20px]">
                    &quot;{allData.jokeQoute.slip.advice}&quot;
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="">
          <img className="w-full" src="/images/pattern-divider-mobile.svg" alt="border" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="absolute bottom-[-15px]">
            <GeneratedJoke/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JokesGenerator;

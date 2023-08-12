"use client";
import React from "react";
import { useAdviceContext } from "../provider/Context";
import { CopyButton, GeneratedJoke, PreLoader, SpeechButton } from "../entities/Entity";

const JokesGenerator = () => {
  const { jokeQoute, error, isLoading, } = useAdviceContext();
  return (
    <section>
      <h1 className="text-center text-[var(--text-color)] text-[30px]">The Advice Generator</h1>
      <div className="bg-[var(--secondary-color)] shadow flex flex-col gap-3 relative px-6 max-w-[500px] w-full py-3 rounded-2xl min-h-[48vh]">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <SpeechButton />
            <CopyButton />
          </div>
          {isLoading ? (
            <PreLoader />
          ) : (
            <div className="flex flex-col gap-1">
              <div className="text-center">
                {jokeQoute && (
                  <h3 className="text-[hsl(150,100%,66%)]">
                    Advice # {jokeQoute.slip.id}
                  </h3>
                )}
                {error && <p className="text-[red]">{error}</p>}
              </div>
              <div className="text-center">
                {jokeQoute && (
                  <span className="text-[hsl(193,38%,86%)] text-[20px]">
                    &quot;{jokeQoute.slip.advice}&quot;
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

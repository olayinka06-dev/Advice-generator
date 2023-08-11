"use client";
import React from "react";
import { useAdviceContext } from "../provider/Context";
import { PreLoader, SpeechButton } from "../entities/Entity";

const JokesGenerator = () => {
  const { handleGenerateJoke, jokeQoute, error, isLoading } =
    useAdviceContext();
  return (
    <div className="bg-[#313A49]">
      <div className="">
        {isLoading ? (
          <PreLoader />
        ) : (
          <div className="">
            <div className="">
              {jokeQoute && (
                <h3 className="text-[hsl(150,100%,66%)]">
                  Advice # {jokeQoute.slip.id}
                </h3>
              )}
              {error && <p>{error}</p>}
            </div>
            <div className="">
              {jokeQoute && <span className="text-[hsl(193,38%,86%)]">&quot; {jokeQoute.slip.advice} &quot;</span>}
            </div>
          </div>
        )}
      </div>
      <div className="">
        <SpeechButton/>
      </div>
      <div className="">
        <img onClick={handleGenerateJoke} src="/images/icon-dice.svg" alt="" />
      </div>
    </div>
  );
};

export default JokesGenerator;

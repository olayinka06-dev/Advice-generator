"use client";
import React from "react";
import { BsDice5Fill, BsFillPlayCircleFill } from "react-icons/bs";
import { FaPauseCircle } from "react-icons/fa";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { useAdviceContext } from "../provider/Context";

export const CopyButton = () => {
  const { isCopy, handleCopyJoke, validateButton } = useAdviceContext();

  return (
    <button
      className="py-[10px] rounded-2xl text-[var(--btn-color)] hover:bg-transparent px-5 bg-[hsl(150,100%,66%)] border transition duration-400 ease-linear border-transparent border-solid hover:text-[hsl(193,38%,86%)] hover:border hover:border-solid hover:border-[hsl(150,100%,66%)]"
      onClick={handleCopyJoke}
      disabled={validateButton ? false : true}
    >
      {isCopy ? "Copied!" : "Copy"}
    </button>
  );
};

export const SpeechButton = () => {
  const { isSpeaking, handleSpeakJoke, handleStopJoke, validateButton } =
    useAdviceContext();
  return (
    <button
      className="py-[10px] rounded-2xl hover:bg-transparent px-5 bg-[hsl(150,100%,66%)] border transition duration-400 ease-linear border-transparent text-[var(--btn-color)] border-solid hover:text-[hsl(193,38%,86%)] hover:border hover:border-solid hover:border-[hsl(150,100%,66%)] text-[19px]"
      onClick={isSpeaking ? handleStopJoke : handleSpeakJoke}
      disabled={validateButton ? false : true}
    >
      {isSpeaking ? <FaPauseCircle /> : <BsFillPlayCircleFill />}
    </button>
  );
};

export const GeneratedJoke = () => {
  const { handleGenerateJoke } = useAdviceContext();
  return (
    <button
      onClick={handleGenerateJoke}
      className="bg-[hsl(150,100%,66%)] blur-shadow p-4 rounded-full"
    >
      <BsDice5Fill />
    </button>
  );
};

export const ThemeButton = () => {
  const { handleSwitchTheme, isToggled } = useAdviceContext();
  return (
    <div className=" absolute top-0 right-5">
      <h2 className="text-white">Theme</h2>
      <div className="flex items-center flex-row gap-2">
        <span
          className={`text-[20px] ${
            isToggled ? "text-[hsl(193,23%,77%)]" : "text-white"
          }`}
        >
          <BsFillMoonStarsFill />
        </span>
        <label htmlFor="toggleButton" className="relative">
          <input
            type="checkbox"
            id="toggleButton"
            className="sr-only"
            checked={isToggled}
            onChange={handleSwitchTheme}
          />
          <div
            className={`w-12 h-6 ${
              isToggled ? "bg-[rgb(3,40,91)]" : "bg-[rgb(3,40,91)]"
            } rounded-full transition`}
          >
            <div
              className={`absolute w-4 h-4 bg-white rounded-full top-1 left-1 transition-transform transform ${
                isToggled ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
        </label>
        <span
          className={`text-[20px] ${
            isToggled ? "text-white" : "text-[hsl(193,23%,77%)]"
          }`}
        >
          <BsSun />
        </span>
      </div>
    </div>
  );
};

export const PreLoader = () => {
  return (
    <div className="w-[50px] h-[50px] rounded-full mx-auto border-solid border-t-[hsl(193,23%,77%)] border-[hsl(150,100%,66%)] border-[5px] animation"></div>
  );
};

"use client";
import React from "react";
import { BsDice5Fill, BsFillPlayCircleFill } from "react-icons/bs";
import { FaPauseCircle } from "react-icons/fa";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { useAdviceContext } from "../provider/Context";

export const CopyButton = () => {
  return( 
    <button></button>
  );
};
export const SpeechButton = () => {
  const { isSpeaking, handleSpeakJoke, handleStopJoke } = useAdviceContext();
  return (
    <button onClick={isSpeaking ? handleStopJoke : handleSpeakJoke}>
      {isSpeaking ? <FaPauseCircle /> : <BsFillPlayCircleFill />}
    </button>
  );
};

export const ThemeButton = () => {
  return (
    <label htmlFor="toggleButton" className="relative">
      <input
        type="checkbox"
        id="toggleButton"
        className="sr-only"
        checked={isToggled}
        onChange={handleToggle}
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
  );
};

export const PreLoader = () => {
  return (
    <div className="w-[50px] h-[50px] rounded-full border-solid border-t-[red] border-[5px] animation"></div>
  );
};

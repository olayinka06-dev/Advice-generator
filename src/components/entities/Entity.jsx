"use client";
import React from "react";
import { BsDice5Fill, BsFillPlayCircleFill } from "react-icons/bs";
import { FaPauseCircle } from "react-icons/fa";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { useAdviceContext } from "../provider/Context";

export const SpeechButton = () => {
    const { isSpeaking, handleSpeakJoke, handleStopJoke } = useAdviceContext();
    return (
      <button onClick={isSpeaking ? handleStopJoke : handleSpeakJoke}>
        {isSpeaking ? <FaPauseCircle /> : <BsFillPlayCircleFill />}
      </button>
    );
};
export const PreLoader = () => {
  return (
    <div className="w-[50px] h-[50px] rounded-full border-solid border-t-[red] border-[5px] animation"></div>
  );
};

"use client";
import React from "react";
import { BsDice5Fill, BsFillPlayCircleFill } from "react-icons/bs";
import {BiSearch} from 'react-icons/bi'
import { FaPauseCircle } from "react-icons/fa";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { useAdviceContext } from "../provider/Context";

export const CopyButton = () => {
  const { allData } = useAdviceContext();

  return (
    <button
      className={`py-[10px] ${allData.validateButton === false ? "cursor-not-allowed" : ""} rounded-2xl text-[var(--btn-color)] hover:bg-transparent px-5 bg-[hsl(150,100%,66%)] border transition duration-400 ease-linear border-transparent border-solid hover:text-[hsl(193,38%,86%)] hover:border hover:border-solid hover:border-[hsl(150,100%,66%)]`}
      onClick={allData.handleCopyJoke}
      disabled={allData.validateButton ? false : true}
    >
      {allData.isCopy ? "Copied!" : "Copy"}
    </button>
  );
};

export const SpeechButton = () => {
  const { allData } = useAdviceContext();
  return (
    <button
      className={`py-[10px] rounded-2xl hover:bg-transparent px-5 bg-[hsl(150,100%,66%)] border transition duration-400 ease-linear border-transparent text-[var(--btn-color)] border-solid hover:text-[hsl(193,38%,86%)] hover:border ${allData.validateButton === false ? "cursor-not-allowed" : ""} hover:border-solid hover:border-[hsl(150,100%,66%)] text-[19px]`}
      onClick={
        allData.isSpeaking ? allData.handleStopJoke : allData.handleSpeakJoke
      }
      disabled={allData.validateButton ? false : true}
    >
      {allData.isSpeaking ? <FaPauseCircle /> : <BsFillPlayCircleFill />}
    </button>
  );
};

export const GeneratedJoke = () => {
  const { allData } = useAdviceContext();
  return (
    <button
      onClick={allData.handleGenerateJoke}
      disabled={isNaN(allData.inputValue) || allData.inputValue < 0 || allData.inputValue > 224}
      className={`bg-[hsl(150,100%,66%)] blur-shadow p-4 rounded-full ${allData.isLoading ? ' cursor-not-allowed opacity-50' : ''}`}
    >
      <BsDice5Fill />
    </button>
  );
};

export const ThemeButton = () => {
  const { allData } = useAdviceContext();
  return (
    <div className=" absolute top-0 right-5">
      <h2 className="text-white">Theme</h2>
      <div className="flex items-center flex-row gap-2">
        <span
          className={`text-[20px] ${
            allData.isToggled ? "text-[hsl(193,23%,77%)]" : "text-white"
          }`}
        >
          <BsFillMoonStarsFill />
        </span>
        <label htmlFor="toggleButton" className="relative">
          <input
            type="checkbox"
            id="toggleButton"
            className="sr-only"
            checked={allData.isToggled}
            onChange={allData.handleSwitchTheme}
          />
          <div
            className={`w-12 h-6 ${
              allData.isToggled ? "bg-[rgb(3,40,91)]" : "bg-[rgb(3,40,91)]"
            } rounded-full transition`}
          >
            <div
              className={`absolute w-4 h-4 bg-white rounded-full top-1 left-1 transition-transform transform ${
                allData.isToggled ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
        </label>
        <span
          className={`text-[20px] ${
            allData.isToggled ? "text-white" : "text-[hsl(193,23%,77%)]"
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


export const SearchById = () => {
  const {allData} = useAdviceContext()
  return (
    <div className={`bg-[rgba(0,0,0.5)] text-[var(--text-color)] p-1 rounded flex items-center gap-1 ${allData.isValid ? 'border-green-500' : 'border-red-500'}`}>
      <BiSearch/>
      <input
        placeholder="search alternatively by ID number"
        disabled={allData.isLoading}
        max={3}
        className={`outline-none bg-transparent text-sm ${allData.isValid ? 'text-green-500' : 'text-red-500'}`}
        type="search"
        value={allData.inputValue}
        onChange={allData.handleInputChange}
      />
    </div>
  );
}


"use client";

import { createContext, useContext } from "react";

export const AdviceContext = createContext({
  allData: {
    handleGenerateJoke: () => {},
    handleCopyJoke: () => {},
    handleSpeakJoke: () => {},
    handleStopJoke: ()=>{},
    handleSwitchTheme: ()=>{},
    isSpeaking: false,
    validateButton: false,
    isToggled: false,
    isCopy: false,
    isLoading: false,
    jokeQoute: "",
    error: ""
  }
});

export const useAdviceContext = () => (
    useContext(AdviceContext)
)

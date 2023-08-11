"use client";

import { createContext, useContext } from "react";

export const AdviceContext = createContext({
  handleGenerateJoke: () => {},
  handleCopyJoke: () => {},
  handleSpeakJoke: () => {},
  handleSwitchTheme: ()=>{}
});

export const useAdviceContext = () => (
    useContext(AdviceContext)
)

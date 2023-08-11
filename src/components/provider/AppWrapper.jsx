"use client";
import React, { useState, useEffect } from "react";
import { AdviceContext } from "./Context";
import axios from "axios";

export const AppWrapper = ({ children }) => {
  const [jokeQoute, setJokeQoute] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isCopy, setIsCopy] = useState(false);
  const [isToggled, setToggled] = useState(false);


  useEffect(() => {
    setIsLoading(true)
    generateJoke()
  }, []);

  const generateJoke = async () => {
    try {
        const ADVICE_URL = "https://api.adviceslip.com/advice";
        const response = await axios.get(ADVICE_URL);
        setJokeQoute(response.data);
        setError("");
        setIsLoading(false)
  
      } catch (error) {
        if (error.response) {
          setError(`Unable to generate Joke Please try again.`);
          setIsLoading(false)
  
        } else if (error.request) {
          setError(`Poor Internet Connection, please try again later.`);
          setIsLoading(false)
  
        } else {
          setError("Something happened unexpectedly.");
          setIsLoading(false)
  
        }
        console.error(error);
      }
  }

  const handleSpeakJoke = () => {
    const generatedAdvice = jokeQoute.slip.advice;
    const utterance = new SpeechSynthesisUtterance(generatedAdvice);
    utterance.addEventListener('end', () => {
        setIsSpeaking(false);
    });

    speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  }

  const handleStopJoke = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const handleGenerateJoke = () => {
    setIsLoading(true)
    generateJoke()
  };

  const handleCopyJoke = () => {
    
  }

  const handleToggle = () => {
    setToggled((prevState) => !prevState);
  };

  return (
    <AdviceContext.Provider value={{ handleGenerateJoke, handleSpeakJoke, handleToggle, handleStopJoke, handleCopyJoke, isToggled, jokeQoute, error, isLoading, isSpeaking }}>
      {children}
    </AdviceContext.Provider>
  );
};

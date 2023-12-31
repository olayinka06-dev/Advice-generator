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
  const [validateButton, setValidateButton] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    generateJoke();
  }, []);

  const generateJoke = async () => {
    try {
      const ADVICE_URL = "https://api.adviceslip.com/advice";
      const response = await axios.get(ADVICE_URL);
      setJokeQoute(response.data);
      setError("");
      setIsLoading(false);
      setValidateButton(true);
    } catch (error) {
      if (error.response) {
        setError(`Unable to generate Joke Please try again.`);
        setIsLoading(false);
      } else if (error.request) {
        setError(`Poor Internet Connection, please try again later.`);
        setIsLoading(false);
      } else {
        setError("Something happened unexpectedly.");
        setIsLoading(false);
      }
      console.error(error);
    }
  };

  const generateJokeById = async () => {
    try {
      const ADVICE_URL = `https://api.adviceslip.com/advice/${inputValue}`;
      const response = !isNaN(inputValue) && inputValue.trim() !== "" && inputValue > 0 && inputValue <= 224 && await axios.get(ADVICE_URL);
      setJokeQoute(response.data);
      setError("");
      setIsLoading(false);
      setValidateButton(true);
      setInputValue("");
    } catch (error) {
      if (error.response) {
        setError(`Unable to generate Joke Please try again.`);
        setIsLoading(false);
      } else if (error.request) {
        setError(`Poor Internet Connection, please try again later.`);
        setIsLoading(false);
      } else if(inputValue > 0 && inputValue <= 224){
        setError("Too Big number")
      }
       else {
        setError("Something happened unexpectedly.");
        setIsLoading(false);
      }
      console.error(error);
    }
  };

  const handleSpeakJoke = () => {
    const generatedAdvice = jokeQoute.slip && jokeQoute && jokeQoute.slip.advice;
    const utterance = new SpeechSynthesisUtterance(generatedAdvice);
    utterance.addEventListener("end", () => {
      setIsSpeaking(false);
    });

    speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handleStopJoke = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const handleGenerateJoke = async () => {
    setIsLoading(true);

    inputValue ? generateJokeById() : generateJoke();
  };

  const handleCopyJoke = () => {
    setIsCopy(!isCopy);
    navigator.clipboard.writeText(jokeQoute.slip && jokeQoute && jokeQoute.slip.advice);
    setTimeout(() => {
      setIsCopy(false);
    }, 2000);
  };

  const handleSwitchTheme = () => {
    setToggled((prevState) => !prevState);
  };

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Check if the input value is a valid number
    const isValidNumber = !isNaN(value) && value.trim() !== "" && value > 0 && value <= 224;
    setIsValid(isValidNumber);
    !isValidNumber ? setError("Number is Too Big, Enter Between the Range of 1 - 224") : setError("")
  };

  const allData = {
    handleGenerateJoke, handleSpeakJoke,
    handleSwitchTheme, handleStopJoke,
    handleCopyJoke, handleInputChange,
    isCopy, isToggled,
    jokeQoute, error,
    isLoading, isSpeaking,
    validateButton, inputValue,
    isValid,
  };

  return (
    <AdviceContext.Provider value={{ allData }}>
      {children}
    </AdviceContext.Provider>
  );
};

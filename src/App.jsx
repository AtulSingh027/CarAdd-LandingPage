import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Background } from "./Components/Background/Background";
import { Hero } from "./Components/Hero/Hero";

export default function App() {
  let Containt = [
    { text1: "Dive Into", text2: "What you Love" },
    { text1: "Indulge", text2: "your Passions" },
    { text1: "Give In To", text2: "Your Passions" },
  ];

  let [HeroCount, SetHeroCount] = useState(1);
  let [PlayStatus, SetSetPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      SetHeroCount((e) => (e === 2 ? 0 : e + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Background HeroCount={HeroCount} PlayStatus={PlayStatus} />
      <Navbar />
      <Hero
        Containt={Containt[HeroCount]}
        HeroCount={HeroCount}
        SetHeroCount={SetHeroCount}
        PlayStatus={PlayStatus}
        SetSetPlayStatus={SetSetPlayStatus}
      />
    </div>
  );
}

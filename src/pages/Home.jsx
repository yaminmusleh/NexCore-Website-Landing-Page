import { useEffect, useState } from "react";

import Intro from "../components/animations/Intro.jsx";
import LandingPage from "./LandingPage.jsx";

export default function Home() {
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem("nexcore-intro");
  });

  useEffect(() => {
    if (!showIntro) return;

    const timer = setTimeout(() => {
      sessionStorage.setItem("nexcore-intro", "true");
      setShowIntro(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showIntro]);

  return (
    <>
      <LandingPage />

      {showIntro && <Intro />}
    </>
  );
}
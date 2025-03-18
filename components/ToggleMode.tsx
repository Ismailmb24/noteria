"use client";

import { detectMode, toggleMode } from "@/lib/mode";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ToggleMode() {
  useEffect(() => {
    if(!localStorage.theme) localStorage.setItem("theme", "");
  }, []);
  
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark");
  useEffect(() => {
    if(typeof window !== "undefined") {
      detectMode();
    }
  }, []);

  const handleToggleMode = () => {
      toggleMode();
      setIsDark(!isDark);
  }

  return (
      <button onClick={handleToggleMode} >{
          isDark ? <Sun className="size-6" />
          : <Moon className="size-6" />
      }</button>
  );
}
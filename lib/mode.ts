"use client";

export function toggleMode() {
    const general_doc = document.documentElement as HTMLElement;
    general_doc.classList.toggle("dark");
    localStorage.setItem("theme", general_doc.classList.contains("dark") ? "dark" : "light");
}

export function detectMode() {
    const general_doc = document.documentElement as HTMLElement;
    general_doc.classList.toggle("dark", 
        localStorage.theme === "dark" || 
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
}
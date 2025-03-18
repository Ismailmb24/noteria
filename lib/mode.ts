export function toggleMode() {
    "use client";
    const general_doc = document.documentElement as HTMLElement;
    general_doc.classList.toggle("dark");
    localStorage.setItem("theme", general_doc.classList.contains("dark") ? "dark" : "light");
}

export function detectMode() {
    "use client";
    const general_doc = document.documentElement as HTMLElement;
    general_doc.classList.toggle("dark", 
        localStorage.theme === "dark" || 
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
}
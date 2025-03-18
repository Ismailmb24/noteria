"use client"
import { X } from "lucide-react";
import Link from "next/link";

export default function SearchReset({
        setVal
    }: { 
        setVal: (searc_val: string) => void
    }) {
    const reset = () => {
        const form = document.querySelector(".search-form") as HTMLFormElement;
        if(form) {
            form.reset();
            setVal("");
        }
    }

    return (
        <button type="reset" className="reset-btn" onClick={reset}>
            <Link href="/"><X size={17} /></Link>
        </button>
    );
}
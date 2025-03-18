"use client";
import Form from "next/form"
import SearchReset from "./SearchReset"
import { useState } from "react"
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export default function  SearchForm() {
    const [search_val, setSearchVal] = useState("");
    const [isSearchMode, setSearchMode] = useState(false);

    return (
        <>
            <Search 
            className="md:hidden size-6"
            onClick={() => setSearchMode(!isSearchMode)}
             />
            <div className={`absolute ${isSearchMode ? "flex" : "hidden"} top-0 left-0  w-svw h-svh md:flex items-center justify-center md:static md:w-auto md:h-auto`}>
                <div 
                className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-50 z-10 md:hidden"
                onClick={() => setSearchMode(false)}
                ></div>
                <div className="relative z-20 bg-white dark:bg-slate-900 p-5 rounded-lg shadow-lg mx-2 md:static md:mx-0 md:shadow-none md:p-0">
                    <Form 
                    action="/" 
                    className="search-form" 
                    noValidate autoComplete="off"
                    onSubmit={() => {
                        if (isSearchMode) {
                            setSearchMode(false);
                        }
                    }}
                    >
                        <input 
                        name="query"
                        className="outline-0 border-0 w-[90%] dark:text-white"
                        placeholder="Search"
                        onChange={(e) => setSearchVal(e.target.value)}
                        />
                        {(!!search_val) && <SearchReset setVal={setSearchVal} />}
                        <Button 
                        className="bg-slate-700 rounded-full md:h-7 md:w-7 dark:text-white"
                        type="submit"
                        >
                            <Search size={17} />
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
}
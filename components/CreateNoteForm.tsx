"use client";

import { addNote } from "@/lib/local_starage";
import Form from "next/form";
import React from "react";
import { v4 } from "uuid";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function CreateNoteForm() {
    const handleNoteCreation = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault;
        const formData = new FormData(event.currentTarget);
        const newNote = {
            id: v4(),
            title: formData.get("title"),
            content: formData.get("content"),
            favorite: false,
            timestamp: new Date().toISOString(),
        }
        addNote(newNote);
    }

    return (
        <Form 
        action="/"
        className="px-5"
        onSubmit={handleNoteCreation}>
            <Input 
            name="title"
            placeholder="Title"
            className="text-2xl font-bold my-5 focus:border-1 text-black dark:text-white"
            />
            <Textarea
            name="content"
            placeholder="Enter a note content"
            className="my-5 h-56 dark:text-slate-300"
            />
            <Button role="submite">submite</Button>
        </Form>
    ); 
}
"use client";

import { useNotes } from "@/hook/useNote";
import { NoteProps } from "./Note";
import { editNote } from "@/lib/local_starage";
import Form from "next/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";


export default function EditNoteForm({ id }: {id: string}) {
    const {notes} = useNotes("");
    const targetNote = notes.find((note: NoteProps) => note.id === id) || {};
    const {title, content} = targetNote as NoteProps;

    const handleNoteEdit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault;
        const formData = new FormData(event.currentTarget);
        const newNote = {
            title: formData.get("title"),
            content: formData.get("content"),
        }
        editNote(id, newNote);
    }

    return (
        <Form
        action="/"
        className="px-5"
        onSubmit={handleNoteEdit}>
            <Input
            name="title"
            placeholder="Title"
            className="text-2xl font-bold my-5 focus:border-1 text-black dark:text-white"
            defaultValue={title}
            />
            <Textarea
            name="content"
            placeholder="Enter a note content"
            className="my-5 h-56 dark:text-slate-300"
            defaultValue={content}
            />
            <Button role="submite">edit</Button>
        </Form>
    ); 
}
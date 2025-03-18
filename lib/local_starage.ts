"use client"

import { NoteProps } from "@/components/Note";

export function inializeLocalStorage() {

    if (!localStorage.getItem("notes")) {
        localStorage.setItem("notes", JSON.stringify([]));
    }
}

export const getAllNotes = (): NoteProps[] => JSON.parse(localStorage.getItem("notes") as string);

export const addNote = (note: object) => {
    const notes = JSON.parse(localStorage.getItem("notes") as string);
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
}

export const removeNote = (id: string) => {
    const notes = JSON.parse(localStorage.getItem("notes") as string);
    const filteredNotes = notes.filter((note: { id: string }) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(filteredNotes));
}

export const favoriteNote = (id: string) => {
    const notes = JSON.parse(localStorage.getItem("notes") as string);
    const updatedNotes = notes.map((note: NoteProps) => {
        if (note.id === id) {
            return {
                ...note,
                favorite: !note.favorite
            };
        } else {
            return note;
        }
    });
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
}

export const editNote = (id: string, newNote: object) => {
    const notes = JSON.parse(localStorage.getItem("notes") as string);
    const updatedNotes = notes.map((note: NoteProps) => {
        if (note.id === id) {
            return {
               ...note,
               ...newNote,
            };
        } else {
            return note;
        }
    });
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
}
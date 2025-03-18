"use client";

import { useState, useEffect } from "react";
import { getAllNotes, favoriteNote, removeNote, inializeLocalStorage } from "../lib/local_starage";
import { NoteProps } from "@/components/Note";

export const useNotes = (query: string) => {
    inializeLocalStorage(); //this function initializes local storage with mock notes if it's empty

    const [notes, setNotes] = useState<NoteProps[]>([]);

    useEffect(() => {
        const allNotes = getAllNotes();
        setNotes(allNotes);
    }, [query]);
    
    const handleFavorite = (id: string) => {
        //this function toggles the favorite status of a note
        //both in the state for recent rendering and in local storage

        //favoriteNote is a function that takes an id and toggles the favorite status of note 
        // and saves it to local storage
        favoriteNote(id);
        const updatedNotes = getAllNotes(); //get all notes after the favorite status has been toggled
        setNotes(updatedNotes);
    }

    const handleDelete = (id: string) => {
        //this function removes a note from the state for recent rendering and local storage

        //removeNote is a function that takes an id and removes the note from local storage
        removeNote(id);
        const updatedNotes = getAllNotes(); //get all notes after the note has been removed
        setNotes(updatedNotes);
    }

    return {
        notes,
        handleDelete,
        handleFavorite
    }
};
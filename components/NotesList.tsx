"use client"

import Note, { NoteProps } from "./Note";

interface NotesListProps {
    notes: NoteProps[];
}

export default function NotesList({ 
    notes,
    onFavorite = (id: string) => id,
    onRemove = (id: string) => id,
 }: NotesListProps & {
    onFavorite?: (id: string) => void,
    onRemove?: (id: string) => void,
 }) {

    return (
        <div>{
            notes?.map((note: NoteProps) => (
                <Note key={note.id} {...note} onFavorite={onFavorite} onRemove={onRemove} />
            ))
        }</div>
    );
}
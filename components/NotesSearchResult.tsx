"use client"

import { useNotes } from "@/hook/useNote";
import NotesList from "./NotesList";
import { NoteProps } from "./Note";
import DisplayBlank from "./DisplayBlank";
import { SearchX, NotebookIcon } from "lucide-react";

export default function NotesSearchResult({ query = "" }: { query: string}) {
    const {notes, handleDelete, handleFavorite} = useNotes(query);
    const filteredNotes: NoteProps[] = notes.filter(
        (note: NoteProps) => note.title.toLowerCase().includes(query.toLowerCase())
    );
    return(
         <section className="max-w-6xl mx-auto px-3">
            <h1 className="text-2xl font-bold mb-5">{
                query ? `Result for "${query}"`
                : "All Notes"
            }</h1> 
            <section>
                {
                    query ? (
                        filteredNotes.length === 0 ? (
                            <DisplayBlank message="Not Found">
                                <SearchX size={150} />
                            </DisplayBlank>
                        ) : (
                            <NotesList 
                            notes={filteredNotes} 
                            onFavorite={handleFavorite} 
                            onRemove={handleDelete} 
                            />
                        )
                    ) 
                    : (
                        notes.length === 0 ? (
                            <DisplayBlank message="No Notes found">
                                <NotebookIcon size={150} />
                            </DisplayBlank>
                        ) : (
                            <NotesList 
                            notes={notes} 
                            onFavorite={handleFavorite} 
                            onRemove={handleDelete} 
                            />
                        )
                    )
                }
            </section>
        </section>
    );
}
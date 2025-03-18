"use client";

import { useNotes } from "@/hook/useNote";
import NotesList from "./NotesList";
import DisplayBlank from "./DisplayBlank";
import { Heart } from "lucide-react";

export default function FavoriteNotes() {
    const { notes, handleDelete, handleFavorite } = useNotes("");
    const favoriteNotes = notes.filter(note => note.favorite);
    
    return (
        <section className="max-w-6xl mx-auto px-3">
            <h1 className="text-2xl font-bold mb-5">Favorite Notes</h1>
            <section>
                {
                    favoriteNotes.length === 0 ? (
                        <DisplayBlank message="Not Favorite Note Found">
                            <Heart size={150} />
                        </DisplayBlank>
                    ) : (
                        <NotesList
                        notes={favoriteNotes} 
                        onFavorite={handleFavorite} 
                        onRemove={handleDelete} 
                        />
                    )
                }
            </section>
        </section>
    );
}
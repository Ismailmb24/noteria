"use client";

import { useNotes } from "@/hook/useNote";
import { formatDate } from "@/lib/utils";
import { Edit2 } from "lucide-react";
import { NoteProps } from "./Note";
import FavoriteBtn from "./FavoriteBtn";
import Link from "next/link";

export default function NoteDetail({ id }: { id: string }) {
    const {notes, handleFavorite} = useNotes("");
    const targetNote = notes.find((note: NoteProps) => note.id === id) || {};
    const {title, content, favorite, timestamp} = targetNote as NoteProps;

    return (
        <div className="max-w-5xl mx-auto px-3 ">
            <h1 className="text-2xl font-bold my-5 mb-10">{title}</h1>
            <p className="text-slate-900 dark:text-slate-300 mb-5">{content}</p>
            <div className="flex justify-between items-center">
                <div className="flex gap-5 text-zinc-500">
                    <FavoriteBtn id={id} favorite={favorite} onFavorite={handleFavorite} />
                    <button>
                        <Link href={`/notes/edit/${id}`}>
                            <Edit2 className="size-5 cursor-pointer" />
                        </Link>
                    </button>
                </div>
                <p className="text-sm text-gray-500 mb-10">Created at {formatDate(timestamp)}</p>
            </div>
        </div>
    );
}
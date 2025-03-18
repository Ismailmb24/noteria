import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { formatDate } from "@/lib/utils";
import { Edit2, Trash2 } from "lucide-react";
import Link from "next/link";
import FavoriteBtn from "./FavoriteBtn";

export interface NoteProps {
    id: string;
    title: string;
    content: string;
    timestamp: string;
    favorite: boolean;
}

export default function Note({
    id,
    title,
    content,
    timestamp,
    favorite,
    onFavorite = (id: string) => id,
    onRemove = (id: string) => id,
}: NoteProps & {
    onFavorite?: (id: string) => void,
    onRemove?: (id: string) => void,
}
) {
    console.log(`Note ${id} favorite: ${favorite}`);
    return (
        <Link href={`/notes/${id}`}>
            <Card className="my-5">
                <CardHeader>
                    <CardTitle>{ title }</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{ 
                        content.length > 150 ? (
                            content.slice(0, 150) + " ..."
                        ): (
                            content
                        )
                    }</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <div className="flex gap-5 text-zinc-500">
                        <FavoriteBtn id={id} favorite={favorite} onFavorite={onFavorite} />
                        <button>
                            <Link href={`/notes/edit/${id}`}>
                                <Edit2 className="size-5" />
                            </Link>
                        </button>
                        <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onRemove(id);
                        }}>
                            <Trash2 className="size-5" />
                        </button>
                    </div>
                    <p className="text-zinc-500">{ formatDate(timestamp) }</p>
                </CardFooter>
            </Card>
        </Link>
    )
}
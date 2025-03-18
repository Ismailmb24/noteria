import { HeartIcon } from "lucide-react";
import { NoteProps } from "./Note";

export default function FavoriteBtn({
    id,
    favorite,
    onFavorite = (id: string) => {}
}: {
    id: string,
    favorite: boolean,
    onFavorite?: (id: string) => void,
}) {
    
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onFavorite(id);
            }}>
                <HeartIcon
                className={`size-5 ${favorite ? "text-red-700 fill-red-700" : ""}`}
                    />
        </button>
    )
}
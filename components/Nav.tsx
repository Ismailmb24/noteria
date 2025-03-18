import Image from "next/image"
import Link from "next/link"
import SearchForm from "./SearchForm"
import { Heart, Plus} from "lucide-react"
import ToggleMode from "./ToggleMode"

export default function Nav() {
    
    return (
        <header className="header">
            <Link href="/">
                <Image src="/logo-light.png" alt="logo" width={90} height={50} className="dark:hidden" />
                <Image src="/logo-dark.png" alt="logo" width={90} height={50}  className="hidden dark:block" />
            </Link> 
            <nav className="nav">
                <SearchForm />
                <Link href="/create" className="flex items-center gap-2 rounded-full bg-white dark:bg-inherit md:bg-gray-200 dark:md:bg-gray-800 dark:text-white  text-slate-900  py-1.5 px-5 md:hover:bg-gray-700  hover:text-white">
                    <Plus className="size-6" /> <span className="hidden md:inline">Create</span>
                </Link>
                <Link href={"/notes/favorites"} className="">
                    <Heart className="size-6" />
                </Link>
               <ToggleMode />
            </nav>
        </header>
    )
}
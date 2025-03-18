import { ReactElement } from "react";

export default function DisplayBlank({children, message} : {children: ReactElement, message: string}) {
    
    return (
        <div className="h-[70vh] flex flex-col justify-center items-center">
            {children}
            {message}
        </div>
    )
}
"use client"

import { NoteProps } from "@/components/Note";
import { v4 } from "uuid";

export function inializeLocalStorage() {
    // const mockNotes = [
    //     {
    //         id: v4(),
    //         title: "Understanding the Basics of JavaScript",
    //         content: "JavaScript is a versatile programming language that is widely used for web development. It allows developers to create interactive and dynamic web pages. In this note, we will explore the fundamental concepts of JavaScript, including variables, functions, and events. JavaScript is a versatile programming language that is widely used for web development. It allows developers to create interactive and dynamic web pages. In this note, we will explore the fundamental concepts of JavaScript, including variables, functions, and events.",
    //         favorite: false,
    //         timestamp: new Date().toISOString(),
    //     },
    //     {
    //         id: v4(),
    //         title: "Advanced CSS Techniques for Modern Web Design",
    //         content: "CSS (Cascading Style Sheets) is a powerful tool for designing visually appealing web pages. This note covers advanced CSS techniques such as flexbox, grid layout, animations, and transitions. By mastering these techniques, you can create responsive and engaging web designs. CSS (Cascading Style Sheets) is a powerful tool for designing visually appealing web pages. This note covers advanced CSS techniques such as flexbox, grid layout, animations, and transitions. By mastering these techniques, you can create responsive and engaging web designs.",
    //         favorite: true,
    //         timestamp: new Date().toISOString(),
    //     },
    //     {
    //         id: v4(),
    //         title: "Getting Started with React: A Beginner's Guide",
    //         content: "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently. In this note, we will cover the basics of React, including components, props, and state management. React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently. In this note, we will cover the basics of React, including components, props, and state management.",
    //         favorite: false,
    //         timestamp: new Date().toISOString(),
    //     },
    // ];

    if (!localStorage.getItem("notes")) {
        localStorage.setItem("notes", JSON.stringify([]));
    }
}

export const getAllNotes = (): NoteProps[] => JSON.parse(localStorage.getItem("notes") as string);

// export const getNote = (id: string) : NoteProps => {
//     const notes= JSON.parse(localStorage.getItem("notes") as string);
//     return notes.find((note: NoteProps) => note.id === id);
// }

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

// export const searchNotes = (query: string = "") => {
//     const Notes = JSON.parse(localStorage.getItem("notes") as string);
//     const filteredNotes = Notes.filter((note: NoteProps) => note?.title.toLowerCase().includes(query.toLowerCase()));
//     if (filteredNotes.length === 0) return "No notes found";
//     return filteredNotes;
// }

// export const getFavoriteNotes = () => {
//     const notes = JSON.parse(localStorage.getItem("notes") as string);
//     const favoriteNotes = notes.filter((note: NoteProps) => note.favorite);
//     return favoriteNotes;
// }
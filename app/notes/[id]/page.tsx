import NoteDetail from "@/components/NoteDetail";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = (await params);
    console.log(id);

    return (
        <NoteDetail id={id} />
    );
}
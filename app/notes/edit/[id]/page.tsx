import EditNoteForm from "@/components/EditNoteForm"

export default async function Page({ params }: {params: Promise<{id: string}>}) {
    const {id} = (await params);
    return(
        <EditNoteForm id={id} />
    )
}
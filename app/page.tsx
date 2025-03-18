import NotesSearchResult from "@/components/NotesSearchResult";

export default async function Home({ searchParams }: { searchParams: Promise<{ query: string }>}) {
  const { query } = (await searchParams);

  return (
   <>
    <NotesSearchResult query={ query } />
   </>
  );
}

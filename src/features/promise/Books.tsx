import { supabase } from "@/libs/supabase";
import { Suspense } from "react";
import { BookTable } from "./BookTable";

export const Books = () => {
  const booksPromise = async () => {
    const { data: books } = await supabase.from("books").select("id, name, description");

    return books!;
  };

  return (
    <Suspense fallback={<div>Loading books</div>}>
      <BookTable bookPromise={booksPromise()} />
    </Suspense>
  );
};

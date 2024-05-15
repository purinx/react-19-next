"use server";

import { supabase } from "@/libs/supabase";
import { Suspense } from "react";
import { BookTable } from "./BookTable";
import { Box, Heading } from "@radix-ui/themes";

export const ReactUse = () => {
  const booksPromise = async () => {
    const { data: books } = await supabase.from("books").select("id, name, description");

    return books!;
  };

  return (
    <Box my="4">
      <Heading as="h2" mb="2">
        React.use API(Suspense)
      </Heading>
      <Suspense fallback={<div>Loading books</div>}>
        <BookTable bookPromise={booksPromise()} />
      </Suspense>
    </Box>
  );
};

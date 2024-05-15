import { use } from "react";
import { DataList } from "@radix-ui/themes";

type Book = {
  id: string;
  name: string;
  description: string;
};

type Props = {
  bookPromise: Promise<Book[]>;
};

export const BookTable = ({ bookPromise }: Props) => {
  const books = use(bookPromise);

  return (
    <DataList.Root>
      {books.map((book) => (
        <DataList.Item key={book.id}>
          <DataList.Label>{book.name}</DataList.Label>
          <DataList.Value>{book.description}</DataList.Value>
        </DataList.Item>
      ))}
    </DataList.Root>
  );
};

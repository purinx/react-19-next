import { use } from "react";

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
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <div>{book.name}</div>
          <div>{book.description}</div>
        </div>
      ))}
    </div>
  );
};

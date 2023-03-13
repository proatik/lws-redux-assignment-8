import { Fragment } from "react";
import { useSelector } from "react-redux";

// RTK query hooks.
import { useGetBooksQuery } from "../../redux/features/books/booksSlice";

// react components.
import Book from "./Book";
import Error from "../ui/Error";
import Empty from "../ui/Empty";
import BooksSkeleton from "../skeletons/books/BooksSkeleton";

const BooksGrid = () => {
  const { status, search } = useSelector((state) => state.filters);
  const { data: books, isLoading, isSuccess, isError } = useGetBooksQuery();

  const filterByStatus = (book) => {
    return status === "all" ? true : book.featured;
  };

  const filterBySearch = (book) => {
    return book.name.toLowerCase().includes(search.toLowerCase());
  };

  const filteredBooks = books?.filter(filterByStatus)?.filter(filterBySearch);

  return (
    <Fragment>
      {isLoading && <BooksSkeleton />}

      {!isLoading && isError && <Error message="Failed to fetch 🙂" />}

      {!isLoading && !isError && !filteredBooks.length && (
        <Empty message="No book found 👻" />
      )}

      {isSuccess && (
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredBooks?.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default BooksGrid;

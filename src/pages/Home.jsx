// react components.
import BooksGrid from "../components/books/BooksGrid";
import GridHeader from "../components/books/GridHeader";

const Home = () => {
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <GridHeader />
        <BooksGrid />
      </div>
    </main>
  );
};

export default Home;

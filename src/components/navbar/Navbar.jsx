import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

// RTK actions.
import { changeSearch } from "../../redux/features/filters/filtersSlice";

// images.
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  const dispatch = useDispatch();
  const { pathname: path } = useLocation();

  const changeHandler = (event) => {
    const text = event.target.value.trim();
    dispatch(changeSearch(text));
  };

  const searchSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <img src={logo} width="150px" className="object-contain" />

        <ul className="hidden md:flex items-center space-x-6">
          <li
            className={`cursor-pointer ${
              path === "/books" && "font-semibold "
            }`}
          >
            <Link to="/books"> Book Store</Link>
          </li>
          <li
            className={`cursor-pointer ${
              path === "/books/add" && "font-semibold "
            }`}
          >
            <Link to="books/add"> Add Book</Link>
          </li>
        </ul>

        <form className="flex items-center" onSubmit={searchSubmitHandler}>
          <div className="group relative rounded-md bg-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
            <input
              type="text"
              className="search"
              id="lws-searchBook"
              onChange={changeHandler}
              disabled={path !== "/books"}
              placeholder="Filter books..."
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

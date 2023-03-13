import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";

// RTK query hooks.
import { useAddBookMutation } from "../redux//features/books/booksSlice";

// react components.
import Error from "../components/ui/Error";

// initial form values.
const formValues = {
  name: "",
  author: "",
  thumbnail: "",
  price: "",
  rating: "",
  featured: false,
};

const AddBook = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(formValues);
  const [addBook, { isSuccess, isError }] = useAddBookMutation();

  const changeHandler = (event) => {
    let { name, type, value, checked } = event.target;

    if (type === "checkbox") value = checked;
    else if (type === "number") value = Number(value);

    const updatedValues = { ...values, [name]: value };

    setValues(updatedValues);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    addBook(values);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/books");
      setValues(formValues);
    }
  }, [isSuccess]);

  return (
    <Fragment>
      {isError && <Error message="Failed to add 🙂" />}

      {!isError && (
        <main className="py-6 2xl:px-6">
          <div className="container">
            <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
              <h4 className="mb-8 text-xl font-bold text-center">
                Add New Book
              </h4>
              <form className="book-form" onSubmit={formSubmitHandler}>
                <div className="space-y-2">
                  <label htmlFor="lws-bookName">Book Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    id="lws-bookName"
                    value={values.name}
                    className="text-input"
                    onChange={changeHandler}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lws-author">Author</label>
                  <input
                    required
                    type="text"
                    name="author"
                    id="lws-author"
                    value={values.author}
                    className="text-input"
                    onChange={changeHandler}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lws-thumbnail">Image Url</label>
                  <input
                    required
                    type="text"
                    name="thumbnail"
                    id="lws-thumbnail"
                    className="text-input"
                    value={values.thumbnail}
                    onChange={changeHandler}
                  />
                </div>
                <div className="grid grid-cols-2 gap-8 pb-4">
                  <div className="space-y-2">
                    <label htmlFor="lws-price">Price</label>
                    <input
                      required
                      name="price"
                      type="number"
                      id="lws-price"
                      value={values.price}
                      className="text-input"
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lws-rating">Rating</label>
                    <input
                      min={1}
                      max={5}
                      required
                      type="number"
                      name="rating"
                      id="lws-rating"
                      value={values.rating}
                      className="text-input"
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    name="featured"
                    type="checkbox"
                    id="lws-featured"
                    className="w-4 h-4"
                    onChange={changeHandler}
                    checked={values.featured}
                  />
                  <label htmlFor="lws-featured" className="ml-2 text-sm">
                    This is a featured book
                  </label>
                </div>
                <button type="submit" className="submit" id="lws-submit">
                  Add Book
                </button>
              </form>
            </div>
          </div>
        </main>
      )}
    </Fragment>
  );
};

export default AddBook;

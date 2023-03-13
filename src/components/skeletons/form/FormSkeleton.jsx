import "./FormSkeleton.css";

const FormSkeletons = () => {
  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center sk-heading">
            Update This Book
          </h4>
          <form className="book-form">
            <div className="space-y-2">
              <label htmlFor="lws-bookName" className="sk-label">
                Book Name
              </label>
              <input disabled className="text-input sk-input" />
            </div>
            <div className="space-y-2">
              <label htmlFor="lws-author" className="sk-label">
                Author
              </label>
              <input disabled className="text-input sk-input" />
            </div>
            <div className="space-y-2">
              <label htmlFor="lws-thumbnail" className="sk-label">
                Image Url
              </label>
              <input disabled className="text-input sk-input" />
            </div>
            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label htmlFor="lws-price" className="sk-label">
                  Price
                </label>
                <input
                  disabled
                  id="lws-price"
                  className="text-input sk-input"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lws-rating" className="sk-label">
                  Rating
                </label>
                <input
                  disabled
                  id="lws-rating"
                  className="text-input sk-input"
                />
              </div>
            </div>
            <div className="flex items-center sk-label">
              <input className="w-4 h-4 sk-checkbox" />
              <label htmlFor="lws-featured" className="ml-2 text-sm">
                This is a featured book
              </label>
            </div>
            <button disabled className="submit sk-submit" id="lws-submit">
              Update Book
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default FormSkeletons;

import { useNavigate } from "react-router";

const Error = ({ message }) => {
  const navigate = useNavigate();

  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">{message}</h4>
          <div className="retry-container">
            <button onClick={() => navigate(0)} className="retry">
              Try again
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Error;

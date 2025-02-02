import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center my-5">
      <img
        src="https://img.freepik.com/free-vector/error-colored-isometric-composition-signs-tools-materials-solving-problems-errors-computer-vector-illustration_1284-67437.jpg"
        alt="Error Page"
        className="w-[750px]"
      />
      <h2 className="text-xl font-semibold text-red-600">Page Not Found</h2>
      <Link to="/">
        <button className="p-2 mt-4 rounded-lg bg-[#08B3AB] text-white w-40">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;

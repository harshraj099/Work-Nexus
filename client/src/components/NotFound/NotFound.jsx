import { Link } from 'react-router-dom';

const NotFound = () => {
//   const imageUrl = 'https://img.freepik.com/free-vector/404-error-with-people-holding-numbers-concept-illustration_114360-7903.jpg?w=1060&t=st=1720956608~exp=1720957208~hmac=1a096025f89ca72b18b4a9f634a7ebfdaf41b856dfb722e5242304492648cc04';

return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <img
      src="/notfound.png"
      alt="Not Found"
      className="max-w-full max-h-[80vh] object-contain mb-4"
    />
    <Link
        to="/"
        className="mt-4 px-6 py-3 bg-blue-500 text-lg font-semi-bold text-white rounded-full hover:bg-blue-600 transition-colors">
        RETURN TO HOME
      </Link>
  </div>
);
};

export default NotFound;

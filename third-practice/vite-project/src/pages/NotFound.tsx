import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-7xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-gray-800">
        صفحه‌ای که دنبالش هستید پیدا نشد
      </h2>
      <p className="text-gray-600 mt-2 text-center max-w-md">
        ممکن است آدرس صفحه را اشتباه وارد کرده باشید یا این صفحه دیگر وجود نداشته باشد.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}

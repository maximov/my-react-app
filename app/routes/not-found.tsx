export default function NotFound() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-lg text-gray-600">
            The page you're looking for doesn't exist.
          </p>
          <a href="/" className="mt-4 inline-block text-blue-500 hover:underline">
            Go back to Home
          </a>
        </div>
      </div>
    );
  }
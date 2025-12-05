import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f1e8] to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-[#c8302e] text-9xl mb-4">404</div>
        <h1 className="text-[#3a2e28] mb-4">Page Not Found</h1>
        <p className="text-lg text-[#5a4a40] mb-8">
          Oops! The page you're looking for doesn't exist. Maybe it got grilled a little too long?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#c8302e] text-white px-8 py-3 rounded-lg hover:bg-[#a52622] transition-colors"
          >
            <Home className="h-5 w-5" />
            Go Home
          </a>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-white text-[#c8302e] border-2 border-[#c8302e] px-8 py-3 rounded-lg hover:bg-[#f5f1e8] transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}


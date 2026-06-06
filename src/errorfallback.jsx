export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 text-center">
      <h1 className="text-4xl font-bold text-red-600">Something went wrong!</h1>
      <p className="text-slate-600">We've been notified and are looking into it.</p>
      {/* This prints the actual developer error for debugging */}
      <pre className="bg-slate-200 p-4 rounded text-sm text-red-500">{error.message}</pre>
      
      <button 
        onClick={resetErrorBoundary} 
        className="bg-slate-900 text-white p-3 rounded-xl mt-4"
      >
        Try Again
      </button>
    </div>
  );
}
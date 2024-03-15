export default function FallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  return (
    <div class="bg-gray-100 px-2 text-center">
      <div class="h-screen flex flex-col justify-center items-center">
        <h1 class="text-8xl font-extrabold text-red-500">Error!</h1>
        <p class="text-4xl font-medium text-gray-800">{error.message}</p>
        <p class="text-xl text-gray-800 mt-4">
          We apologize for the inconvenience. Please try again later.
        </p>
      </div>
    </div>
  );
}

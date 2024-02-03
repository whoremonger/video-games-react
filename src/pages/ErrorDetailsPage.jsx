import { useRouteError } from "react-router-dom"

function ErrorDetailsPage () {
  const error = useRouteError()

  return (
    <div className="flex justify-center text-2xl mx-auto p-4 m-10 text-red-300">
      <h1><span className="text-6xl">{error.message}</span></h1>
    </div>
  )
}

export default ErrorDetailsPage
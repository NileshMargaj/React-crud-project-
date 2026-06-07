import React from 'react'

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-xl mt-4">Page Not Found</p>
        <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
      </div>
    </div>
  )
}

export default PageNotFound

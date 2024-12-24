import React from 'react'

const Collections = ({ files }) => {
  return (
    <ul className="rounded-md">
      {files.length > 0 ? (
        files.map((file, index) => (
          <li key={index} className="border-l-4 border-yellow-500 py-4 px-4  bg-white my-2 shadow-md last:shadow-none">
            <div className="flex justify-between">
              <div className="">
                <h1 className="text-black"><span className='font-semibold text-yellow-500'>Collection Name:</span> {file}</h1>

                <div className="my-4">
                    Data Count: 
                </div>
              </div>

              <div className="mt-2 mr-4">
              </div>
            </div>
          </li>
        ))
      ) : (
        <li className="text-gray-500">No JSON files found</li>
      )}
    </ul>
  )
}

export default Collections
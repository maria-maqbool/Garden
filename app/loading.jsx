import React from 'react'

const Loading = () => {
  return (
    <div className="flex fixed top-0 left-0 z-50 justify-center items-center w-full h-full bg-brGreen">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full border-4 border-green-200 border-opacity-20 animate-spin"></div>
        <h2 className="mt-4 text-lg font-semibold text-gray-700">Loading...</h2>
      </div>
    </div>
  );
}

export default Loading

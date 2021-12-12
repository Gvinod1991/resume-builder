import React from 'react';
export default function Profile() {
  return (
    <React.Fragment>
      <div className="hidden sm:block sm:ml-6">
        <div className="flex border-b m-0 border-indigo-300 cursor-pointer">
          <div className="text-indigo-800 border-b-2 border-indigo-500 px-4 py-2 text-sm font-medium ">OverView</div>
          <div className="text-gray-500 hover:text-indigo-800 hover:border-b-2 hover:border-indigo-500 px-4 py-2 text-sm font-medium">About</div>
          <div className="text-gray-500 hover:text-indigo-800 hover:border-b-2 hover:border-indigo-500 px-3 py-2 text-sm font-medium">Work Experience</div>
          <div className="text-gray-500 hover:text-indigo-800 hover:border-b-2 hover:border-indigo-500 px-3 py-2 text-sm font-medium">Side Projects</div>
          <div className="text-gray-500 hover:text-indigo-800 hover:border-b-2 hover:border-indigo-500 px-3 py-2 text-sm font-medium">Skills</div>
          <div className="text-gray-500 hover:text-indigo-800 hover:border-b-2 hover:border-indigo-500 px-3 py-2 text-sm font-medium">Achievements</div>
          <div className="text-gray-500 hover:text-indigo-800 hover:border-b-2 hover:border-indigo-500 px-3 py-2 text-sm font-medium">Education</div>
        </div>
      </div >
    </React.Fragment >
  )
}
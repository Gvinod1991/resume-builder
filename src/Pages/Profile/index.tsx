import React from 'react';
export default function Profile() {
  return (
    <React.Fragment>
      <div className="hidden sm:block sm:ml-6">
        <div className="flex border-b m-0">
          <a href="#" className="text-indigo-800 border-b-2 border-indigo-500 px-4 py-2 text-sm font-medium">OverView</a>
          <a href="#" className="text-gray-500 hover:text-indigo-800  hover:border-b-2 hover:border-indigo-500 px-4 py-2 text-sm font-medium">About</a>
          <a href="#" className="text-gray-500 hover:text-indigo-800 hover:border-b-2 hover:border-indigo-500 px-3 py-2 text-sm font-medium">Work Experience</a>
          <a href="#" className="text-gray-500 hover:text-indigo-800 hover:border-b-2 hover:border-indigo-500 px-3 py-2 text-sm font-medium">Side Projects</a>
          <a href="#" className="text-gray-500 hover:text-indigo-800 hover:border-b-2 hover:border-indigo-500 px-3 py-2 text-sm font-medium">Skills</a>
          <a href="#" className="text-gray-500 hover:text-indigo-800 hover:border-b-2 hover:border-indigo-500 px-3 py-2 text-sm font-medium">Achievements</a>
          <a href="#" className="text-gray-500 hover:text-indigo-800 hover:border-b-2 hover:border-indigo-500 px-3 py-2 text-sm font-medium">Education</a>
        </div>
      </div >
    </React.Fragment >
  )
}
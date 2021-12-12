import { Link } from 'react-router-dom';

export const SideNav = () => {
  return (
    <aside className="h-screen sticky top-0 flex">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-8">
          <div className="flex-shrink-0 flex items-center p-4">
            <h1 className="text-gray-50 rounded-md text-lg font-medium font-mono hidden lg:block">Resume Builder</h1>
            <h1 className="text-gray-50 rounded-md text-lg font-medium font-mono block lg:hidden">R</h1>
          </div>
          <div className="hidden sm:block sm:ml-6 m-2">
            <div className="flex flex-col">
              <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Profile</Link>
              <Link to="/resume" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Resume</Link>
              <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Interviews</Link>
              <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Notes</Link>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  )
}
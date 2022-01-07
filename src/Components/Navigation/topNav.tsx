import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/solid'

export const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);

  return (
    <nav className="bg-slate-100 flex-1 flex-row px-4">
      <div className="relative flex items-center justify-end h-16">
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="ml-3 relative">
            <button onClick={() => setMenuOpen(!menuOpen)} type="button" className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <UserCircleIcon className="h-8 w-8 rounded-full" />
            </button>
            {menuOpen ?
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">Settings</Link>
                <Link to="/sign-out" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">Sign out</Link>
              </div>
              : null
            }
          </div>
        </div>
      </div>
    </nav>
  )
}
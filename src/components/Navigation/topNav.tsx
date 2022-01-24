import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserCircleIcon, MenuAlt1Icon } from '@heroicons/react/solid';
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export const TopNav = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);
  const [openLeftMenu, setOpenLeftMenu] = useState<Boolean>(false);
  const [user] = useAuthState(auth);
  const location = useLocation();
  const pathName = location.pathname;
  const navList = [
    { key: 1, path: '/', navName: 'Profile' },
    { key: 2, path: '/resume', navName: 'Resume' },
    { key: 3, path: '/interviews', navName: 'Interviews' },
    { key: 4, path: '/notes', navName: 'Notes' },
  ];
  return (
    <nav className='bg-slate-100'>
      <div className='relative flex justify-between sm:justify-end h-16'>
        <MenuAlt1Icon
          onClick={(): void => setOpenLeftMenu(!openLeftMenu)}
          className='h-5 mt-5 sm:hidden'
        />
        {openLeftMenu ? (
          <div
            className='origin-top-left absolute z-10 left-0 mt-12 w-25 rounded-sm shadow-lg p-2 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none sm:hidden'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='user-menu-button'
          >
            {navList.map(({ key, path, navName }) => (
              <Link
                to={path}
                key={key}
                className={
                  pathName === path
                    ? 'block px-4 py-2 text-sm text-white bg-gray-900 rounded-md'
                    : 'block px-4 py-2 text-sm text-gray-700'
                }
                role='menuitem'
                id='user - menu - item - 1'
              >
                {navName}
              </Link>
            ))}
          </div>
        ) : null}
        <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
          <div className='ml-3'>
            <button
              onClick={(): void => setMenuOpen(!menuOpen)}
              type='button'
              className='flex text-sm rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white'
              id='user-menu-button'
              aria-expanded='false'
              aria-haspopup='true'
            >
              <span className='sr-only'>Open user menu</span>
              {user?.displayName && (
                <span className='mt-1 mr-1 text-lg text-gray-500'>
                  {user?.displayName}
                </span>
              )}
              {user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  className='h-8 w-8 rounded-full'
                  alt=''
                />
              ) : (
                <UserCircleIcon className='h-8 w-8 rounded-full' />
              )}
            </button>
            {menuOpen ? (
              <div
                className='origin-top-right absolute z-10 right-2 mt-2 w-22 sm:w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='user-menu-button'
              >
                <Link
                  to='/settings'
                  className='block px-4 py-2 text-sm text-gray-700'
                  role='menuitem'
                  id='user-menu-item-1'
                >
                  Settings
                </Link>
                <button
                  onClick={(): Promise<void> => signOut(auth)}
                  className='block px-4 py-2 text-sm text-gray-700 focus:outline-none'
                  role='menuitem'
                  id='user-menu-item-2'
                >
                  Sign out
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

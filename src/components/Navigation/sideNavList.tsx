import { Link, useLocation } from 'react-router-dom';

export const SideNavList = (): JSX.Element => {
  const navList = [
    { key: 1, path: '/', navName: 'Profile' },
    { key: 2, path: '/resume', navName: 'Resume' },
    { key: 3, path: '/interviews', navName: 'Interviews' },
    { key: 4, path: '/notes', navName: 'Notes' },
  ];
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div className='hidden sm:block mt-2'>
      <div className='flex flex-col'>
        {navList.map(({ key, path, navName }) => (
          <Link
            key={key}
            to={path}
            className={
              pathName === path
                ? 'bg-gray-900 rounded-md text-white px-3 py-2 text-sm font-medium m-1'
                : 'text-white px-3 py-2 text-sm font-medium m-1'
            }
            aria-current='page'
          >
            {navName}
          </Link>
        ))}
      </div>
    </div>
  );
};

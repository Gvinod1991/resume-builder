import { Logo } from '..';
import { SideNavList } from './sideNavList';
export const SideNav = (): JSX.Element => {
  return (
    <aside className='hidden sm:flex h-screen sticky top-0'>
      <nav className='bg-gray-800'>
        <Logo />
        <SideNavList />
      </nav>
    </aside>
  );
};

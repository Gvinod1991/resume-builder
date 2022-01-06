import { Logo } from '../../Components';
import { SideNavList } from './sideNavList';
export const SideNav = () => {
  return (
    <aside className="h-screen sticky top-0 flex">
      <nav className="bg-gray-800">
        <Logo />
        <SideNavList />
      </nav>
    </aside>
  )
}
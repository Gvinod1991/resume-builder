import React, { ReactChild, ReactChildren } from 'react';
import { SideNav, TopNav } from '../components/Navigation';

export interface SideBarProps {
  children: ReactChild | ReactChildren
}

export const Layout: React.VFC<SideBarProps> = ({ children }: SideBarProps) => {
  return (
    <div className="flex">
      <SideNav />
      <main className='flex-1'>
        <TopNav />
        <div className='p-2'>
          {children}
        </div>
      </main>
    </div>
  )
}
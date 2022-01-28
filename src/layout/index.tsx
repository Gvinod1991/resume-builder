import React, { ReactChild, ReactChildren } from 'react';
import { SideNav, TopNav } from '../components';

export interface ISideBar {
  children: ReactChild | ReactChildren;
}

export const Layout: React.VFC<ISideBar> = ({
  children,
}: ISideBar): JSX.Element => {
  return (
    <div className='flex'>
      <SideNav />
      <main className='flex-1'>
        <TopNav />
        <div className='p-2'>{children}</div>
      </main>
    </div>
  );
};

import { useState, ReactChild, ReactChildren } from 'react';
import { DotsCircleHorizontalIcon } from '@heroicons/react/solid';
import RcTabs, { TabPane } from 'rc-tabs';
import './tabs.css';

interface ITabs {
  children: ReactChild | ReactChildren;
  className: string;
}

export { TabPane };

export const Tabs = ({ children, className }: ITabs): JSX.Element => {
  const [activeKey, setActiveKey] = useState<string>('1');
  return (
    <RcTabs
      className={`custom-tab-bar ${className}`}
      direction={'ltr'}
      moreIcon={<DotsCircleHorizontalIcon className='h-5 hidden' />}
      activeKey={activeKey}
      onChange={(key): void => {
        if (activeKey !== undefined) {
          setActiveKey(key);
        }
      }}
    >
      {children}
    </RcTabs>
  );
};

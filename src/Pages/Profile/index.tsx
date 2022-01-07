import React from 'react';
import { Button } from '../../Components';
import { Tabs, TabPane } from '../../Components';


export default function Profile() {
  return (
    <Tabs className="sm:block sm:ml-6">
      <>
        <TabPane tab={"OverView"} key={1}>
          OverView
        </TabPane>
        <TabPane tab={"About"} key={2}>
          About
        </TabPane>
        <TabPane tab={"Side Projects"} key={3}>
          Side Projects
        </TabPane>
        <TabPane tab={"Skills"} key={4}>
          Skills
        </TabPane>
        <TabPane tab={"Achievements"} key={5}>
          Achievements
        </TabPane>
        <TabPane tab={"Education"} key={6}>
          Education
        </TabPane>
      </>
    </Tabs>
  )
}
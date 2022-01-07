import React from 'react';
import { Tabs, TabPane } from '../../Components';
import { About } from './About';
import { Card } from '../../Components';

export default function Profile() {
  return (
    <Tabs className="sm:block sm:ml-6">
      <>
        <TabPane tab={"OverView"} key={1}>
          <Card>
            Overview
          </Card>
        </TabPane>
        <TabPane tab={"About"} key={2}>
          <Card>
            <About />
          </Card>
        </TabPane>
        <TabPane tab={"Side Projects"} key={3}>
          <Card>
            Side Projects
          </Card>
        </TabPane>
        <TabPane tab={"Skills"} key={4}>
          <Card>
            Skills
          </Card>
        </TabPane>
        <TabPane tab={"Achievements"} key={5}>
          <Card>
            Achievements
          </Card>
        </TabPane>
        <TabPane tab={"Education"} key={6}>
          <Card>
            Education
          </Card>
        </TabPane>
      </>
    </Tabs>
  )
}
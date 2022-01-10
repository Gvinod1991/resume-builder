import React from 'react';
import { Tabs, TabPane } from '../../Components';
import { About } from './About';
import { Skills } from './Skills';
import { WorkExperience } from './WorkExperience';
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
        <TabPane tab={"Skills"} key={3}>
          <Card>
            <Skills />
          </Card>
        </TabPane>
        <TabPane tab={"Work Experience"} key={4}>
          <Card>
            <WorkExperience />
          </Card>
        </TabPane>
        <TabPane tab={"Side Projects"} key={5}>
          <Card>
            Side Projects
          </Card>
        </TabPane>
        <TabPane tab={"Achievements"} key={6}>
          <Card>
            Achievements
          </Card>
        </TabPane>
        <TabPane tab={"Education"} key={7}>
          <Card>
            Education
          </Card>
        </TabPane>
      </>
    </Tabs>
  )
}
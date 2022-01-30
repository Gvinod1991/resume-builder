import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Tabs, TabPane } from '../../components';
import { Preview } from './Preview';
import { About } from './About';
import { Skills } from './Skills';
import { WorkExperience } from './WorkExperience';
import { Education } from './Education';
import { Projects } from './Projects';
import { Achievements } from './Achievements';
import { Card } from '../../components';
import { getResumeData } from '../../store/actions';
import { auth } from '../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Profile(): JSX.Element {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user?.uid) {
      dispatch(getResumeData(user?.uid));
    }
  }, [dispatch, user]);
  return (
    <Tabs className='sm:block sm:ml-6'>
      <TabPane tab={'Overview'} key={1}>
        <Preview />
      </TabPane>
      <TabPane tab={'About'} key={2}>
        <Card>
          <About />
        </Card>
      </TabPane>
      <TabPane tab={'Skills'} key={3}>
        <Card>
          <Skills />
        </Card>
      </TabPane>
      <TabPane tab={'Work Experience'} key={4}>
        <Card>
          <WorkExperience />
        </Card>
      </TabPane>
      <TabPane tab={'Side Projects'} key={5}>
        <Card>
          <Projects />
        </Card>
      </TabPane>
      <TabPane tab={'Achievements'} key={6}>
        <Card>
          <Achievements />
        </Card>
      </TabPane>
      <TabPane tab={'Education'} key={7}>
        <Card>
          <Education />
        </Card>
      </TabPane>
    </Tabs>
  );
}

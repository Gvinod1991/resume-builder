import {
  Card,
  Wrapper,
  Typography,
  Button,
  Pill,
  Divider,
} from '../../../components';
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
  PrinterIcon,
  RefreshIcon,
} from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import { IResumeState } from '../../../store/reducer';
import { RootState } from '../../../store/rootReducer';
import { printResume } from '../../../utils/print';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../utils/firebase';

type socialProfileType = {
  [key: string]: string;
};

const socialProfiles: socialProfileType = {
  website: '/globe.jpg',
  linkedin: '/linkedIcon.png',
  twitter: '/twitter.png',
  github: '/gitHub.png',
};

export const Preview = (): JSX.Element => {
  const [user] = useAuthState(auth);
  const { resumeDetails }: IResumeState = useSelector(
    (state: RootState) => state.resume
  );
  const {
    location,
    phone,
    resumeHighlights,
    jobRole,
    profileImage,
    totalExperience,
    profiles,
  } = resumeDetails;
  const { displayName, email } = user ? user : { displayName: '', email: '' };
  return (
    <>
      <Wrapper className='flex justify-end gap-6'>
        <Button
          leftIcon={<PrinterIcon className='h-5 mr-1' />}
          title='Print'
          onClick={(): void => printResume()}
        ></Button>
        <Button
          leftIcon={<RefreshIcon className='h-5 mr-1' />}
          title='Change Template'
          onClick={(): void => printResume()}
        ></Button>
      </Wrapper>
      <div id='print-section'>
        <Card className='rounded-sm border'>
          <Wrapper className='flex flex-row justify-between flex-wrap sm:flex-nowrap print:flex-nowrap'>
            <Wrapper className='flex flex-col'>
              <Wrapper className='flex flex-row'>
                <img
                  className='object-cover h-20 rounded-full mt-3'
                  src={profileImage}
                  alt=''
                />
                <Wrapper className='flex-column'>
                  <Typography variant='h2' className='text-2xl text-indigo-500'>
                    {displayName}
                  </Typography>
                  <Typography variant='h2' className='text-xl text-gray-500'>
                    {jobRole}
                  </Typography>
                  <Typography variant='p' className='text-xl text-gray-500'>
                    {totalExperience} Years of experience
                  </Typography>
                </Wrapper>
              </Wrapper>
              <Typography variant='h1' className='text-gray-600'>
                {resumeHighlights}
              </Typography>
            </Wrapper>
            <Wrapper className='flex flex-col'>
              <Wrapper className='flex flex-col'>
                <span className='flex'>
                  <MailIcon className='h-5 mt-1 text-indigo-500' />
                  <Typography variant='p' className='text-gray-500'>
                    {email}
                  </Typography>
                </span>
                <span className='flex'>
                  <PhoneIcon className='h-5 text-indigo-500' />
                  <Typography variant='p' className='text-gray-500'>
                    {phone}
                  </Typography>
                </span>
                <span className='flex'>
                  <LocationMarkerIcon className='h-5 text-indigo-500' />
                  <Typography variant='p' className='text-gray-500'>
                    {location}
                  </Typography>
                </span>
              </Wrapper>
              <Wrapper className='flex flex-row mt-2'>
                {profiles &&
                  profiles.map(({ url, network }, index) => (
                    <a key={`${url}${index}`} href={url}>
                      <img
                        className='object-cover h-7 rounded-full opacity-60 m-1 cursor-pointer'
                        src={socialProfiles[network]}
                        alt=''
                      />
                    </a>
                  ))}
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Card>
        <Wrapper className='flex flex-wrap sm:flex-nowrap justify-between gap-3 p-0 print:flex-nowrap'>
          <div className='w-12/12 lg:w-9/12'>
            <Card
              className='mt-2 border rounded-sm'
              title='Experience'
              titleClassName='text-indigo-500'
            >
              <Wrapper>
                <Typography variant='h5' className='text-gray-600 text-xl'>
                  Lead Frontend Developer
                </Typography>
                <Typography variant='h1' className='text-gray-800 text-lg'>
                  ACE Online, Bengaluru, India
                </Typography>
                <Typography variant='h5' className='text-gray-800 text-md'>
                  2021 - present (about 1 year)
                </Typography>
                <Typography variant='p' className='text-gray-500 text-sm'>
                  ACE Online is an ed-tech startup that provides recorded as
                  well as live classes to engineering students who want to
                  appear GATE exam and other engineering-related entrance tests
                  for Engineering jobs in india.
                </Typography>
                <ul className='p-2 ml-5'>
                  <li className='list-disc text-sm p-1'>
                    CMS to manage the subjects,units,chapters and attach videos
                    for the course
                  </li>
                  <li className='list-disc text-sm p-1'>
                    Student portal to browse the courses and subscribe it.
                  </li>
                  <li className='list-disc text-sm p-1'>
                    Tech stack: ReactJs, Redux, Material UI
                  </li>
                </ul>
              </Wrapper>
              <Divider className='border-indigo-400 h mt-2 mb-2' />
              <Wrapper>
                <Typography variant='h5' className='text-gray-600 text-xl'>
                  Sr.Frontend Developer
                </Typography>
                <Typography variant='h1' className='text-gray-800 text-lg'>
                  Apnaklub, Bengaluru, India
                </Typography>
                <Typography variant='h5' className='text-gray-800 text-md'>
                  2019 - 2021 (about 2 years)
                </Typography>
                <Typography variant='p' className='text-gray-500 text-sm'>
                  Apnaklub provides a platform for resellers and traders to
                  resell inventory of fashion, Kitchen, and daily essential
                  goods.
                </Typography>
                <ul className='p-2 ml-5'>
                  <li className='list-disc text-sm p-1'>
                    Designed and developed the dashboard for the operations team
                    to manage products, inventories, and order details.
                    Operations team time saved by 40% when this application is
                    used as compared to manually maintaining the excel sheets
                    for inventory and purchase orders of products from vendors.
                  </li>
                  <li className='list-disc text-sm p-1'>
                    Created CI/CD process for effective deployment using
                    Bitbucket and AWS.
                  </li>
                  <li className='list-disc text-sm p-1'>
                    Led a team of 2 engineers to build the Progressive Web App
                    for the reseller to share and sell products to their
                    customers. Responsible for the whole app architecture,
                    planning, development, and deployment in AWS EC2
                  </li>
                  <li className='list-disc text-sm p-1'>
                    Tech stack: ReactJs, Redux, AntD library, NodeJs, ExpressJs,
                    and MongoDB
                  </li>
                </ul>
              </Wrapper>
              <Divider className='border-indigo-400 h mt-2 mb-2' />
              <Wrapper>
                <Typography variant='h5' className='text-gray-600 text-xl'>
                  Full Stack Developer
                </Typography>
                <Typography variant='h1' className='text-gray-800 text-lg'>
                  Bookingjini Labs, Bhubaneswar, India
                </Typography>
                <Typography variant='h5' className='text-gray-800 text-md'>
                  2017 - 2019 (about 2 years)
                </Typography>
                <Typography variant='p' className='text-gray-500 text-sm'>
                  Bookingjini Labs provides the dashboard, booking engine, and
                  chatbot service tools to hoteliers to manage their properties
                  which operate in India, Nepal, and Bhutan.
                </Typography>
                <ul className='p-2 ml-5'>
                  <li className='list-disc text-sm p-1'>
                    Built a portal to manage inventory of rooms and distribution
                    to various online travel agents(OTA) like Booking.com and 7
                    other OTA's which helped reduce overbooking by 5%.
                  </li>
                  <li className='list-disc text-sm p-1'>
                    Built the Booking Engine Web application using ReactJs,
                    Redux, NodeJs & ExpressJs with a team of 2 engineers.
                    Revenue increased by 25% within the 1 month of the launch of
                    this application.
                  </li>
                  <li className='list-disc text-sm p-1'>
                    Built the mobile app (Android) to manage the inventory and
                    pricing of the hotel rooms by hoteliers using React Native
                    and Redux. Uploaded this application to the google play
                    store. Clients for the company increased by 20%. Google Play
                    Store Link.
                  </li>
                  <li className='list-disc text-sm p-1'>
                    Tech stack- ReactJs, React Native, Redux, NodeJs, ExpressJs,
                    and Mysql.
                  </li>
                </ul>
              </Wrapper>
              <Divider className='border-indigo-400 h mt-2 mb-2' />
              <Wrapper>
                <Typography variant='h5' className='text-gray-600 text-xl'>
                  Technical Analyst
                </Typography>
                <Typography variant='h1' className='text-gray-800 text-lg'>
                  Siddha Development and Research Consultancy, Bhubaneswar,
                  India
                </Typography>
                <Typography variant='h5' className='text-gray-800 text-md'>
                  2015 - 2017 (2 years)
                </Typography>
                <Typography variant='p' className='text-gray-500 text-sm'>
                  SDRC provides web-based software applications to agencies like
                  UNICEF and various other social welfare organizations as well
                  as state governments in India.
                </Typography>
                <ul className='p-2 ml-5'>
                  <li className='list-disc text-sm p-1'>
                    Worked on the project called child labor tracking system
                    (CLTS), which is an innovative web-based system to register
                    child laborers and track their re-integration to the
                    mainstream.
                  </li>
                  <li className='list-disc text-sm p-1'>
                    Tech stack- PHP, Laravel , Jquery, HTML5, and CSS3
                  </li>
                </ul>
              </Wrapper>
            </Card>
            <Card
              className='mt-2 border rounded-sm'
              title='Projects'
              titleClassName='text-indigo-500'
            >
              <Wrapper>
                <a
                  className='text-indigo-400 active:text-indigo-800 text-2xl'
                  href='https://vigorous-fermat-03ebb2.netlify.app/'
                >
                  Fast Fingers
                </a>
                <Typography variant='h5' className='text-gray-600 text-lg'>
                  Sr.Frontend Developer
                </Typography>
                <Typography variant='p' className='text-gray-500 text-sm'>
                  Speed typing game in which the user can play the game by
                  typing the word displayed within the time frame. By playing
                  this game typing speed of the user will be enhanced and also
                  new words can be learned.
                </Typography>
                <Wrapper className='text-gray-500 text-sm flex flex-wrap gap-3'>
                  <Typography
                    variant='h5'
                    className='text-gray-600 text-lg m-1'
                  >
                    Tech Stack
                  </Typography>
                  <Pill title='React JS' />
                  <Pill title='SCSS' />
                  <Pill title='Javascript' />
                </Wrapper>
              </Wrapper>
              <Divider className='border-indigo-400 mt-2' />
              <Wrapper>
                <a
                  className='text-indigo-400 active:text-indigo-800 text-2xl'
                  href='https://keen-roentgen-c0e229.netlify.app/'
                >
                  Resume Builder{' '}
                </a>
                <Typography variant='h5' className='text-gray-600 text-lg'>
                  Sr.Frontend Developer
                </Typography>
                <Typography variant='p' className='text-gray-500 text-sm'>
                  Speed typing game in which the user can play the game by
                  typing the word displayed within the time frame. By playing
                  this game typing speed of the user will be enhanced and also
                  new words can be learned.
                </Typography>
                <Wrapper className='text-gray-500 text-sm flex flex-wrap gap-3'>
                  <Typography
                    variant='h5'
                    className='text-gray-600 text-lg m-1'
                  >
                    Tech Stack
                  </Typography>
                  <Pill title='React JS' />
                  <Pill title='Tailwind CSS' />
                  <Pill title='Javascript' />
                </Wrapper>
              </Wrapper>
            </Card>
          </div>
          <div className='w-12/12 sm:w-3/12'>
            <Card
              className='mt-2 border rounded-sm'
              title='Skills'
              titleClassName='text-indigo-500'
            >
              <div className='flex gap-2 flex-wrap'>
                <Pill title='React Js' />
                <Pill title='Javascript' />
                <Pill title='HTML' />
                <Pill title='CSS' />
                <Pill title='React Native' />
                <Pill title='Node Js' />
              </div>
            </Card>
            <Card
              className='mt-2 border rounded-sm'
              title='Education'
              titleClassName='text-indigo-500'
            >
              <Wrapper>
                <Typography variant='h1' className='text-gray-800'>
                  Pesto Tech
                </Typography>
                <Typography variant='h2' className='text-gray-600'>
                  Engineering Fellow
                </Typography>
                <Typography variant='h2' className='text-gray-600'>
                  Oct 2020 - Feb 2021
                </Typography>
              </Wrapper>
              <Divider className='border-indigo-400' />
              <Wrapper>
                <Typography variant='h1' className='text-gray-800'>
                  VSSUT
                </Typography>
                <Typography variant='h2' className='text-gray-600'>
                  Information Technology
                </Typography>
                <Typography variant='h3' className='text-gray-600'>
                  Aug 2010 - May 2014
                </Typography>
              </Wrapper>
            </Card>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

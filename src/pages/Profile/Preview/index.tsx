import {
  Card,
  Wrapper,
  Typography,
  Button,
  Pill,
  Divider,
  Loader,
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
  const { resumeDetails, resumeLoading }: IResumeState = useSelector(
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
    work,
    projects,
    skills,
    education,
    achievements,
  } = resumeDetails;
  const { displayName, email } = user ? user : { displayName: '', email: '' };
  return (
    <>
      {resumeLoading && <Loader />}
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
      <Wrapper id='print-section'>
        <Card className='rounded-sm border'>
          <Wrapper className='flex flex-row justify-between flex-wrap sm:flex-nowrap print:flex-nowrap'>
            <Wrapper className='flex flex-col'>
              <Wrapper className='flex flex-row'>
                <img
                  className='object-cover h-20 w-20 rounded-full mt-3'
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
                {profiles?.map(({ url, network }, index) =>
                  url ? (
                    <a key={`${url}${index}`} href={url}>
                      <img
                        className='object-cover h-7 rounded-full opacity-60 m-1 cursor-pointer'
                        src={socialProfiles[network]}
                        alt=''
                      />
                    </a>
                  ) : null
                )}
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Card>
        <Wrapper className='flex flex-wrap sm:flex-nowrap justify-between gap-3 p-0 print:flex-nowrap'>
          <Wrapper className='w-12/12 lg:w-9/12'>
            {work && work.length > 0 && (
              <Card
                className='mt-2 border rounded-sm'
                title='Experience'
                titleClassName='text-indigo-500'
              >
                {work?.map(
                  (
                    {
                      position,
                      companyName,
                      location,
                      startDate,
                      endDate,
                      summary,
                    },
                    index
                  ) => (
                    <Wrapper key={`${companyName}${index}`}>
                      <Wrapper>
                        <Typography
                          variant='h5'
                          className='text-gray-600 text-xl'
                        >
                          {position}
                        </Typography>
                        <Typography
                          variant='h1'
                          className='text-gray-800 text-lg'
                        >
                          {companyName}, {location}
                        </Typography>
                        <Typography
                          variant='h5'
                          className='text-gray-800 text-md'
                        >
                          {startDate} - {endDate}
                        </Typography>
                        <Wrapper
                          className='text-gray-500 text-sm custom-list'
                          dangerouslySetInnerHTML={{ __html: summary }}
                        ></Wrapper>
                      </Wrapper>
                      <Divider className='border-indigo-400 h mt-2 mb-2' />
                    </Wrapper>
                  )
                )}
              </Card>
            )}
            {projects && projects.length > 0 && (
              <Card
                className='mt-2 border rounded-sm'
                title='Projects'
                titleClassName='text-indigo-500'
              >
                {projects?.map(
                  ({ title, role, techStack, description }, index) => (
                    <Wrapper key={`${title}${index}`}>
                      <Wrapper>
                        <a
                          className='text-indigo-400 active:text-indigo-800 text-2xl'
                          href='https://vigorous-fermat-03ebb2.netlify.app/'
                        >
                          {title}
                        </a>
                        <Typography
                          variant='h5'
                          className='text-gray-600 text-lg'
                        >
                          {role}
                        </Typography>
                        <Wrapper
                          className='text-gray-500 text-sm custom-list'
                          dangerouslySetInnerHTML={{ __html: description }}
                        ></Wrapper>
                        <Wrapper className='text-gray-500 text-sm flex flex-wrap gap-3'>
                          <Typography
                            variant='h5'
                            className='text-gray-600 text-lg m-1'
                          >
                            Tech Stack
                          </Typography>
                          {techStack?.map((stack, index) => (
                            <Pill key={`${stack}${index}`} title={stack} />
                          ))}
                        </Wrapper>
                      </Wrapper>
                      <Divider className='border-indigo-400 mt-2' />
                    </Wrapper>
                  )
                )}
              </Card>
            )}
          </Wrapper>

          <Wrapper className='w-12/12 sm:w-3/12'>
            {skills && skills.genericSkills && skills.genericSkills.length > 0 && (
              <Card
                className='mt-2 border rounded-sm'
                title='Skills'
                titleClassName='text-indigo-500'
              >
                <Wrapper className='flex gap-2 flex-wrap'>
                  {skills?.genericSkills?.map((skill, index) => (
                    <Pill key={`${skill}${index}`} title={skill} />
                  ))}
                </Wrapper>
              </Card>
            )}
            {education && education.length > 0 && (
              <Card
                className='mt-2 border rounded-sm'
                title='Education'
                titleClassName='text-indigo-500'
              >
                {education?.map(
                  (
                    {
                      institution,
                      fieldOfStudy,
                      studyType,
                      startDate,
                      endDate,
                    },
                    index
                  ) => (
                    <Wrapper key={`${institution}${index}`}>
                      <Wrapper>
                        <Typography variant='h1' className='text-gray-800'>
                          {institution}
                        </Typography>
                        <Typography variant='h2' className='text-gray-600'>
                          {fieldOfStudy},{studyType}
                        </Typography>
                        <Typography variant='h2' className='text-gray-600'>
                          {startDate} - {endDate}
                        </Typography>
                      </Wrapper>
                      <Divider className='border-indigo-400' />
                    </Wrapper>
                  )
                )}
              </Card>
            )}
            {achievements && (
              <Card
                className='mt-2 border rounded-sm'
                title='Achievements'
                titleClassName='text-indigo-500'
              >
                <Wrapper
                  className='text-gray-500 text-sm custom-list'
                  dangerouslySetInnerHTML={{ __html: achievements }}
                ></Wrapper>
              </Card>
            )}
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
};

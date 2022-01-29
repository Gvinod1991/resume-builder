import {
  Input,
  Button,
  TextArea,
  Select,
  Wrapper,
  Typography,
  Divider,
  Loader,
} from '../../../components';
import { RootState } from '../../../store/rootReducer';
import { auth } from '../../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import { IResumeState } from '../../../store/reducer/resume.reducer';

export const About = (): JSX.Element => {
  const [user] = useAuthState(auth);
  const { resumeDetails, resumeLoading }: IResumeState = useSelector(
    (state: RootState) => state.resume
  );
  const yearOptions = [
    {
      optionKey: '1',
      optionValue: '<1 Year',
    },
    {
      optionKey: '2',
      optionValue: '1 Year',
    },
    {
      optionKey: '3',
      optionValue: '2 Years',
    },
    {
      optionKey: '4',
      optionValue: '3 Years',
    },
  ];
  const {
    location,
    jobRole,
    totalExperience,
    resumeHighlights,
    phone,
    profiles,
  } = resumeDetails;
  return (
    <Wrapper className='flex flex-col w-full'>
      <>
        {resumeLoading && <Loader />}
        <Wrapper className='flex flex-row flex-wrap sm:flex-nowrap'>
          <>
            <Typography
              variant='h1'
              className='w-12/12 sm:w-3/12 text-lg text-gray-500'
            >
              About your self
            </Typography>
            <Wrapper className='flex flex-col ml-2 px-4 w-12/12 sm:w-10/12'>
              <>
                <Wrapper className='p-2'>
                  <>
                    <Typography variant='h2' className='text-2xl'>
                      {user && user.displayName ? user?.displayName : ''}
                    </Typography>
                    <Wrapper className='flex flex-row flex-auto'>
                      <>
                        <img
                          className='object-cover h-20 rounded-full'
                          src={user && user.photoURL ? user?.photoURL : ''}
                          alt=''
                        />
                        <Button
                          title='Change'
                          className='m-5 h-10 align-middle'
                        ></Button>
                      </>
                    </Wrapper>
                  </>
                </Wrapper>
                <Wrapper className='p-2'>
                  <Input
                    inputLabel='Your Location'
                    onChange={(): void => {}}
                    value={location ? location : ''}
                  />
                </Wrapper>
                <Wrapper className='p-2'>
                  <Input
                    inputLabel='Designation/Role'
                    onChange={(): void => {}}
                    value={jobRole ? jobRole : ''}
                  />
                </Wrapper>
                <Wrapper className='p-2'>
                  <Select
                    label='Years of Experience'
                    optionValue={totalExperience}
                    optionKey={'optionKey'}
                    handleChange={(): void => {}}
                    options={yearOptions}
                  />
                </Wrapper>
                <Wrapper className='p-2'>
                  <TextArea
                    textAreaValue={resumeHighlights ? resumeHighlights : ''}
                    textAreLabel='Professional Intro'
                    handleChange={(): void => {}}
                  />
                </Wrapper>
                <Wrapper className='flex justify-end'>
                  <Button title='Save' className='w-fit'></Button>
                </Wrapper>
              </>
            </Wrapper>
            <Wrapper className='w-12/12 sm:w-2/12 '></Wrapper>
          </>
        </Wrapper>
        <Divider />
        <Wrapper className='flex flex-row flex-wrap sm:flex-nowrap'>
          <>
            <Typography
              variant='h1'
              className='w-12/12 sm:w-3/12 text-lg text-gray-500'
            >
              Contact Details
            </Typography>
            <Wrapper className='flex flex-col ml-2 px-4 w-12/12 sm:w-10/12'>
              <>
                <Wrapper className='p-2'>
                  <Input
                    inputLabel='Email Id'
                    value={user && user.email ? user.email : ''}
                    disabled={true}
                    onChange={(): void => {}}
                    className='cursor-not-allowed'
                  />
                </Wrapper>
                <Wrapper className='p-2'>
                  <Input
                    value={phone ? phone : ''}
                    inputLabel='Contact Number'
                    placeholder='Contact Number(With country code)'
                    onChange={(): void => {}}
                  />
                </Wrapper>
                {profiles &&
                  profiles.length > 0 &&
                  profiles.map((profile) => (
                    <Wrapper className='p-2' key={profile.network}>
                      <Input
                        value={profile.url}
                        inputLabel={profile.network.toUpperCase()}
                        placeholder={profile.network}
                        onChange={(): void => {}}
                      />
                    </Wrapper>
                  ))}
                <Wrapper className='flex justify-end'>
                  <Button title='Save' className='w-fit'></Button>
                </Wrapper>
              </>
            </Wrapper>
            <Wrapper className='w-12/12 sm:w-2/12'></Wrapper>
          </>
        </Wrapper>
      </>
    </Wrapper>
  );
};

import { useState } from 'react';
import {
  Input,
  Button,
  TextArea,
  Select,
  Wrapper,
  Typography,
  Divider,
  Loader,
  Upload,
} from '../../../components';
import { useDispatch } from 'react-redux';
import { UserCircleIcon } from '@heroicons/react/solid';
import { RootState } from '../../../store/rootReducer';
import { auth } from '../../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import { validate } from '../../../utils/validate';
import {
  IResumeState,
  ProfileType,
} from '../../../store/reducer/resume.reducer';
import { updateResumeData } from '../../../store/actions';

const yearOptions = [
  {
    optionKey: '0',
    optionValue: '<1 Year',
  },
  {
    optionKey: '1',
    optionValue: '1 Year',
  },
  {
    optionKey: '2',
    optionValue: '2 Years',
  },
  {
    optionKey: '3',
    optionValue: '3 Years',
  },
  {
    optionKey: '4',
    optionValue: '4 Years',
  },
  {
    optionKey: '5',
    optionValue: '5 Years',
  },
  {
    optionKey: '6',
    optionValue: '6 Years',
  },
];
type AboutDetailsType = {
  candidateName?: string;
  location?: string;
  jobRole?: string;
  totalExperience?: string;
  resumeHighlights?: string;
  phone?: string;
  profiles: Array<ProfileType>;
  profileImage?: string;
};
export const About = (): JSX.Element => {
  const [user] = useAuthState(auth);
  const [errorData, setErrorData] = useState<any>(null);
  const { resumeDetails, resumeLoading }: IResumeState = useSelector(
    (state: RootState) => state.resume
  );
  const [aboutDetails, setAboutDetails] = useState<AboutDetailsType>({
    candidateName: resumeDetails.candidateName,
    location: resumeDetails.location,
    jobRole: resumeDetails.jobRole,
    totalExperience: resumeDetails.totalExperience,
    resumeHighlights: resumeDetails.resumeHighlights,
    phone: resumeDetails.phone,
    profiles: resumeDetails.profiles ? resumeDetails.profiles : [],
    profileImage: resumeDetails.profileImage,
  });
  const dispatch = useDispatch();

  const updateResumeDetails = (): void => {
    const rules = {
      candidateName: {
        presence: true,
        message: 'Your name required!',
      },
      location: {
        presence: true,
        message: 'Your current location required!',
      },
      jobRole: {
        presence: true,
        message: 'Your current current job role required!',
      },
      totalExperience: {
        presence: true,
        message: 'Your total years of experience required!',
      },
      resumeHighlights: {
        presence: true,
        message: 'Your professional introduction required!',
      },
      phone: {
        presence: true,
        message: 'Your contact number required!',
      },
      profiles: {
        presence: true,
        message: 'Social profiles required!',
      },
    };
    const { isValid, errors } = validate({ data: aboutDetails, rules });
    setErrorData(errors);
    const updatedData = {
      ...resumeDetails,
      candidateName: aboutDetails.candidateName,
      location: aboutDetails.location,
      jobRole: aboutDetails.jobRole,
      totalExperience: aboutDetails.totalExperience,
      resumeHighlights: aboutDetails.resumeHighlights,
      profiles: aboutDetails.profiles,
      phone: aboutDetails.phone,
      profileImage: aboutDetails.profileImage,
    };
    if (isValid) {
      dispatch(updateResumeData(updatedData, resumeDetails?.userId));
    }
  };

  const handleInputChange = ({ name, value }: any): void => {
    setAboutDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleProfileChange = (
    eventTarget: any,
    profileIndex: number
  ): void => {
    const { name, value } = eventTarget;
    const oldProfileData = [...profiles];
    oldProfileData[profileIndex] = { network: name, url: value };
    setAboutDetails((prevState) => ({
      ...prevState,
      profiles: oldProfileData,
    }));
  };
  const {
    candidateName,
    location,
    jobRole,
    totalExperience,
    resumeHighlights,
    phone,
    profiles,
    profileImage,
  } = aboutDetails;
  return (
    <Wrapper className='flex flex-col w-full'>
      {resumeLoading && <Loader />}
      <Wrapper className='flex flex-row flex-wrap sm:flex-nowrap'>
        <Typography
          variant='h1'
          className='w-12/12 sm:w-3/12 text-lg text-gray-500'
        >
          About your self
        </Typography>
        <Wrapper className='flex flex-col ml-2 px-4 w-12/12 sm:w-10/12'>
          <Wrapper className='p-2'>
            <Typography variant='h2' className='text-2xl'>
              {candidateName}
            </Typography>
            <Wrapper className='flex flex-row flex-auto'>
              {profileImage !== '' ? (
                <img
                  className='object-cover h-20 w-20 rounded-full'
                  src={profileImage}
                  alt=''
                />
              ) : (
                <UserCircleIcon className='h-8 w-8 rounded-full' />
              )}
              <Wrapper className='m-3'>
                <Upload
                  onFileUploadSuccess={(url: string): void =>
                    handleInputChange({ name: 'profileImage', value: url })
                  }
                  onFileUploadError={(): void =>
                    handleInputChange({ name: 'profileImage', value: '' })
                  }
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Wrapper className='p-2'>
            <Input
              inputLabel='Your Name'
              name='candidateName'
              onChange={(e): void => handleInputChange(e.target)}
              value={candidateName}
            />
            {errorData?.candidateName && (
              <Typography variant='p' className='text-red-500'>
                {errorData?.candidateName}
              </Typography>
            )}
          </Wrapper>
          <Wrapper className='p-2'>
            <Input
              name='location'
              inputLabel='Current Location'
              onChange={(e): void => handleInputChange(e.target)}
              value={location}
            />
            {errorData?.location && (
              <Typography variant='p' className='text-red-500'>
                {errorData?.location}
              </Typography>
            )}
          </Wrapper>
          <Wrapper className='p-2'>
            <Input
              inputLabel='Designation/Role'
              name='jobRole'
              onChange={(e): void => handleInputChange(e.target)}
              value={jobRole}
            />
            {errorData?.jobRole && (
              <Typography variant='p' className='text-red-500'>
                {errorData?.jobRole}
              </Typography>
            )}
          </Wrapper>
          <Wrapper className='p-2'>
            <Select
              label='Years of Experience'
              selectedValue={totalExperience}
              name='totalExperience'
              handleChange={(e): void => handleInputChange(e.target)}
              options={yearOptions}
            />
            {errorData?.totalExperience && (
              <Typography variant='p' className='text-red-500'>
                {errorData?.totalExperience}
              </Typography>
            )}
          </Wrapper>
          <Wrapper className='p-2'>
            <TextArea
              textAreaValue={resumeHighlights}
              textAreLabel='Professional Intro'
              name='resumeHighlights'
              handleChange={(e): void => handleInputChange(e.target)}
            />
            {errorData?.resumeHighlights && (
              <Typography variant='p' className='text-red-500'>
                {errorData?.resumeHighlights}
              </Typography>
            )}
          </Wrapper>
        </Wrapper>
        <Wrapper className='w-12/12 sm:w-2/12 '></Wrapper>
      </Wrapper>
      <Divider />
      <Wrapper className='flex flex-row flex-wrap sm:flex-nowrap'>
        <Typography
          variant='h1'
          className='w-12/12 sm:w-3/12 text-lg text-gray-500'
        >
          Contact Details
        </Typography>
        <Wrapper className='flex flex-col ml-2 px-4 w-12/12 sm:w-10/12'>
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
              value={phone}
              inputLabel='Contact Number'
              placeholder='Contact Number(With country code)'
              name='phone'
              onChange={(e): void => handleInputChange(e.target)}
            />
            {errorData?.phone && (
              <Typography variant='p' className='text-red-500'>
                {errorData?.phone}
              </Typography>
            )}
          </Wrapper>
          {profiles &&
            profiles.length > 0 &&
            profiles.map(({ url, network }, index) => (
              <Wrapper className='p-2' key={index + network}>
                <Input
                  value={url}
                  inputLabel={`${network
                    .charAt(0)
                    .toUpperCase()}${network.substring(1)}`}
                  placeholder={`${network
                    .charAt(0)
                    .toUpperCase()}${network.substring(1)}`}
                  name={network}
                  onChange={(e): void => handleProfileChange(e.target, index)}
                />
              </Wrapper>
            ))}
          {errorData?.profiles && (
            <Typography variant='p' className='text-red-500'>
              {errorData?.profiles}
            </Typography>
          )}
          <Wrapper className='flex justify-end'>
            <Button
              title='Save'
              className='w-fit'
              onClick={(): void => updateResumeDetails()}
            ></Button>
          </Wrapper>
        </Wrapper>
        <Wrapper className='w-12/12 sm:w-2/12'></Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Card,
  Wrapper,
  Typography,
  Divider,
  Button,
  Input,
  Modal,
  CustomDatePicker,
} from '../../../components';
import { PlusIcon } from '@heroicons/react/solid';
import { PencilAltIcon } from '@heroicons/react/outline';
import { RootState } from '../../../store/rootReducer';
import { IResumeState } from '../../../store/reducer';

export const Education = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    resumeDetails: { education },
  }: IResumeState = useSelector((state: RootState) => state.resume);
  return (
    <Wrapper className='flex flex-row flex-wrap sm:flex-nowrap'>
      <Typography
        variant='h2'
        className='w-12/12 sm:w-3/12 text-lg text-gray-600'
      >
        Education
      </Typography>
      <Wrapper className='flex flex-col ml-2 px-4 w-12/12 sm:w-8/12'>
        <Wrapper className='flex flex-row justify-end z-0'>
          <Button
            onClick={(): void => setIsOpen(true)}
            leftIcon={<PlusIcon className='h-5' />}
            className='w-fit'
            title='Add Education'
          />
        </Wrapper>
        {education &&
          education.map(
            (
              { institution, fieldOfStudy, endDate, startDate, studyType },
              index
            ) => (
              <>
                <Card key={index} className='w-full border'>
                  <Wrapper className='flex flex-col w-full'>
                    <Wrapper className='flex flex-row justify-between'>
                      <Typography variant='h1' className='text-xl'>
                        {institution}
                      </Typography>
                      <PencilAltIcon className='h-5 cursor-pointer text-gray-500' />
                    </Wrapper>
                    <Typography variant='h4' className='text-md text-gray-300'>
                      {`${fieldOfStudy}, ${studyType}`}
                    </Typography>
                    <Typography variant='h5' className='text-md text-gray-300'>
                      {`${startDate} to ${endDate}`}
                    </Typography>
                  </Wrapper>
                </Card>
                <Divider className='border-8 border-white' />
              </>
            )
          )}
      </Wrapper>
      <Modal
        title='Education'
        className='w-10/12 sm:w-6/12'
        open={isOpen}
        onClose={(): void => setIsOpen(false)}
      >
        <Wrapper className='p-2'>
          <Input
            inputLabel='College/University'
            placeholder='Ex: VSSUT,Burla,Sambalpur,Odisha,India'
          />
        </Wrapper>
        <Wrapper className='p-2'>
          <Input inputLabel='Degree' placeholder='Ex:Bachelor in Engineering' />
        </Wrapper>
        <Wrapper className='p-2'>
          <Input
            inputLabel='Field of study'
            placeholder='Ex:Information Technology'
          />
        </Wrapper>
        <Wrapper className='p-2'>
          <CustomDatePicker pickerLabel='Stat Date' />
        </Wrapper>
        <Wrapper className='p-2'>
          <CustomDatePicker pickerLabel='End Date' />
        </Wrapper>
      </Modal>
    </Wrapper>
  );
};

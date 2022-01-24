import {
  Card,
  Wrapper,
  Typography,
  Divider,
  Button,
  Input,
  Modal,
  CustomDatePicker,
  TextArea,
  CheckBox,
} from '../../../components';
import { PlusIcon } from '@heroicons/react/solid';
import { PencilAltIcon } from '@heroicons/react/outline';
import { useState } from 'react';

export const WorkExperience = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const workExperiences = [1, 2, 3];
  return (
    <Wrapper className='flex flex-row flex-wrap sm:flex-nowrap'>
      <>
        <Typography
          variant='h2'
          className='w-12/12 sm:w-3/12 text-lg text-gray-600'
        >
          Your work experience
        </Typography>
        <Wrapper className='flex flex-col ml-2 px-4 w-12/12 sm:w-8/12'>
          <>
            <Wrapper className='flex flex-row justify-end z-0'>
              <Button
                onClick={() => setIsOpen(true)}
                leftIcon={<PlusIcon className='h-5' />}
                className='w-fit'
                title='Add work experience'
              />
            </Wrapper>
            {workExperiences.map((exp) => (
              <Wrapper key={exp}>
                <>
                  <Card key={exp} className='w-full border'>
                    <Wrapper className='flex flex-col'>
                      <>
                        <Wrapper className='flex flex-row justify-between'>
                          <>
                            <Typography variant='h1' className='text-xl'>
                              Lead FrontEnd Developer
                            </Typography>
                            <PencilAltIcon className='h-5 cursor-pointer text-gray-500' />
                          </>
                        </Wrapper>
                        <Typography
                          variant='h4'
                          className='text-md text-gray-300'
                        >
                          FROST
                        </Typography>
                        <Typography
                          variant='h5'
                          className='text-md text-gray-300'
                        >
                          Apr 2021 to Present
                        </Typography>
                        <Typography variant='p'>
                          FROST is an ed-tech startup that provides recorded as
                          well as live classes to engineering students who want
                          to appear GATE exam and other engineering-related
                          entrance tests for Engineering jobs.
                        </Typography>
                      </>
                    </Wrapper>
                  </Card>
                  <Divider className='border-8 border-white' />
                </>
              </Wrapper>
            ))}
          </>
        </Wrapper>
        <Modal
          title='Add Work Experience'
          className='w-10/12 sm:w-6/12'
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <>
            <Wrapper className='p-2'>
              <Input inputLabel='Title' placeholder='Ex: FrontEnd Engineer' />
            </Wrapper>
            <Wrapper className='p-2'>
              <Input inputLabel='Company Name' placeholder='Ex: Infosys' />
            </Wrapper>
            <Wrapper className='p-2'>
              <Input inputLabel='Location' placeholder='Ex: Bengaluru,India' />
            </Wrapper>
            <Wrapper className='p-2'>
              <>
                <CustomDatePicker pickerLabel='Stat Date' />
                <CheckBox
                  onChange={() => setIsChecked(!isChecked)}
                  inputLabel='Currently works here'
                />
              </>
            </Wrapper>
            {!isChecked && (
              <Wrapper className='p-2'>
                <CustomDatePicker pickerLabel='End Date' />
              </Wrapper>
            )}
            <Wrapper className='p-2'>
              <TextArea
                textAreaValue=''
                textAreLabel='Description'
                handleChange={() => {}}
              />
            </Wrapper>
          </>
        </Modal>
      </>
    </Wrapper>
  );
};

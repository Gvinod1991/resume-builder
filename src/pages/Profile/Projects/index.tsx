import {
  Card,
  Wrapper,
  Typography,
  Divider,
  Button,
  Input,
  Modal,
  TagsInput,
  TextArea,
} from '../../../components';
import { PlusIcon } from '@heroicons/react/solid';
import { PencilAltIcon } from '@heroicons/react/outline';
import { useState } from 'react';

export const Projects = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const workExperiences = [1, 2, 3];
  const selectedSkills = () => {};
  return (
    <Wrapper className='flex flex-row flex-wrap sm:flex-nowrap '>
      <>
        <Typography
          variant='h2'
          className='w-12/12 sm:w-3/12 text-lg text-gray-600'
        >
          Side Projects
        </Typography>
        <Wrapper className='flex flex-col ml-2 px-4 w-12/12 sm:w-8/12'>
          <>
            <Wrapper className='flex flex-row justify-end z-0'>
              <Button
                onClick={() => setIsOpen(true)}
                leftIcon={<PlusIcon className='h-5' />}
                className='w-fit'
                title='Add Projects'
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
                              Resume Builder
                            </Typography>
                            <PencilAltIcon className='h-5 cursor-pointer text-gray-500' />
                          </>
                        </Wrapper>
                        <Typography
                          variant='h4'
                          className='text-md text-gray-300'
                        >
                          Frontend Developer
                        </Typography>
                        <Typography
                          variant='h5'
                          className='text-md text-gray-300'
                        >
                          Tech Stack ReactJs React Native
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
          title='Project Details'
          className='w-10/12 sm:w-6/12'
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <>
            <Wrapper className='p-2'>
              <Input inputLabel='Title' placeholder='' />
            </Wrapper>
            <Wrapper className='p-2'>
              <Input
                inputLabel='Role in the project'
                placeholder='Ex:Frontend Developer'
              />
            </Wrapper>
            <Wrapper className='p-2'>
              <TextArea
                textAreaValue=''
                textAreLabel='Description'
                handleChange={() => {}}
              />
            </Wrapper>
            <Wrapper className='flex flex-col w-full'>
              <TagsInput
                tagLabel='Type and hit enter key to add Technology used'
                selectedTags={selectedSkills}
              />
            </Wrapper>
          </>
        </Modal>
      </>
    </Wrapper>
  );
};

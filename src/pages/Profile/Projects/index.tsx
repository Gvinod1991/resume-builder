import {
  Card,
  Wrapper,
  Typography,
  Divider,
  Button,
  Input,
  Modal,
  TagsInput,
  TextEditor,
  Loader,
} from '../../../components';
import { PlusIcon } from '@heroicons/react/solid';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { Pill } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import {
  IResumeState,
  ProjectType,
} from '../../../store/reducer/resume.reducer';
import { updateResumeData } from '../../../store/actions';

const initialProjectDetails = {
  title: '',
  role: '',
  techStack: [],
  description: '',
};

export const Projects = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [projectData, setProjectData] = useState<ProjectType>(
    initialProjectDetails
  );
  const [projectIndex, setProjectIndex] = useState<number | null>(null);
  const dispatch = useDispatch();
  const { resumeDetails, resumeLoading }: IResumeState = useSelector(
    (state: RootState) => state.resume
  );

  const handleInputChange = ({ name, value }: any): void => {
    setProjectData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (): void => {
    let updatedData;
    if (projectIndex !== null) {
      const oldProjectData = [...resumeDetails.projects];
      oldProjectData[projectIndex] = projectData;
      updatedData = {
        ...resumeDetails,
        projects: oldProjectData,
      };
    } else {
      updatedData = {
        ...resumeDetails,
        projects: [...resumeDetails.projects, projectData],
      };
    }
    dispatch(updateResumeData(updatedData, resumeDetails?.userId));
    setIsOpen(false);
    setProjectIndex(null);
    setProjectData(initialProjectDetails);
  };

  const handleEdit = (projectData: ProjectType, index: number): void => {
    setProjectData(projectData);
    setIsOpen(true);
    setProjectIndex(index);
  };

  const handleRemove = (projectIndex: number): void => {
    const updatedResumeDate = {
      ...resumeDetails,
      projects: [
        ...resumeDetails.projects.filter((_, i) => i !== projectIndex),
      ],
    };
    dispatch(updateResumeData(updatedResumeDate, resumeDetails?.userId));
  };
  const { title, description, role, techStack } = projectData;
  return (
    <Wrapper className='flex flex-row flex-wrap sm:flex-nowrap '>
      {resumeLoading && <Loader />}
      <Typography
        variant='h2'
        className='w-12/12 sm:w-3/12 text-lg text-gray-600'
      >
        Side Projects
      </Typography>
      <Wrapper className='flex flex-col ml-2 px-4 w-12/12 sm:w-8/12'>
        <Wrapper className='flex flex-row justify-end z-0'>
          <Button
            onClick={(): void => setIsOpen(true)}
            leftIcon={<PlusIcon className='h-5' />}
            className='w-fit'
            title='Add Projects'
          />
        </Wrapper>
        {resumeDetails?.projects?.map(
          ({ title, role, techStack, description }, index) => (
            <Wrapper key={`${title}${index}`}>
              <>
                <Card className='w-full border'>
                  <Wrapper className='flex flex-col'>
                    <>
                      <Wrapper className='flex flex-row justify-between'>
                        <Typography variant='h1' className='text-xl'>
                          {title}
                        </Typography>
                        <Wrapper className='flex'>
                          <PencilAltIcon
                            onClick={(): void =>
                              handleEdit(
                                { title, role, techStack, description },
                                index
                              )
                            }
                            className='h-5 cursor-pointer text-gray-500'
                          />
                          <TrashIcon
                            onClick={(): void => handleRemove(index)}
                            className='h-5 cursor-pointer text-gray-500'
                          />
                        </Wrapper>
                      </Wrapper>
                      <Typography
                        variant='h4'
                        className='text-md text-gray-300'
                      >
                        {role}
                      </Typography>
                      <Typography
                        variant='h5'
                        className='text-md text-gray-300'
                      >
                        Tech Stack
                        <Wrapper className='flex gap-2'>
                          {techStack.map((tech, index) => (
                            <Pill key={`${tech}${index}`} title={tech} />
                          ))}
                        </Wrapper>
                      </Typography>
                      <Wrapper
                        dangerouslySetInnerHTML={{ __html: description }}
                      ></Wrapper>
                    </>
                  </Wrapper>
                </Card>
                <Divider className='border-8 border-white' />
              </>
            </Wrapper>
          )
        )}
      </Wrapper>
      <Modal
        title='Project Details'
        className='w-10/12 sm:w-6/12'
        open={isOpen}
        onClose={(): void => setIsOpen(false)}
        onSave={(): void => handleSubmit()}
        saveBtnTitle={projectIndex !== null ? 'Update' : 'Save'}
      >
        <Wrapper className='p-2'>
          <Input
            inputLabel='Title'
            name='title'
            value={title}
            onChange={(e): void => handleInputChange(e.target)}
            placeholder=''
          />
        </Wrapper>
        <Wrapper className='p-2'>
          <Input
            inputLabel='Role in the project'
            placeholder='Ex:Frontend Developer'
            name='role'
            value={role}
            onChange={(e): void => handleInputChange(e.target)}
          />
        </Wrapper>
        <Wrapper className='p-2'>
          <TextEditor
            textEditorValue={description}
            handleEditorChange={(content: any): void =>
              handleInputChange({ name: 'description', value: content })
            }
          />
        </Wrapper>
        <Wrapper className='flex flex-col w-full'>
          <TagsInput
            tagLabel='Type and hit enter key to add Technology used'
            selectedTags={(stack): void =>
              handleInputChange({ name: 'techStack', value: stack })
            }
            initTags={techStack}
          />
        </Wrapper>
      </Modal>
    </Wrapper>
  );
};

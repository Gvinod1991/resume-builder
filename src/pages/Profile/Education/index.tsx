import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card,
  Wrapper,
  Typography,
  Divider,
  Button,
  Input,
  Modal,
  CustomDatePicker,
  Loader,
} from '../../../components';
import { PlusIcon } from '@heroicons/react/solid';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import { RootState } from '../../../store/rootReducer';
import { IResumeState, EducationType } from '../../../store/reducer';
import { updateResumeData } from '../../../store/actions';

const initialEducationData = {
  institution: '',
  fieldOfStudy: '',
  endDate: '',
  startDate: '',
  studyType: '',
};
export const Education = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [educationData, setEducationData] =
    useState<EducationType>(initialEducationData);
  const [educationIndex, setEducationIndex] = useState<number | null>(null);
  const dispatch = useDispatch();
  const { resumeDetails, resumeLoading }: IResumeState = useSelector(
    (state: RootState) => state.resume
  );

  const handleInputChange = ({ name, value }: any): void => {
    setEducationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (): void => {
    let updatedData;
    if (educationIndex !== null) {
      const oldEducationData = [...resumeDetails.education];
      oldEducationData[educationIndex] = educationData;
      updatedData = {
        ...resumeDetails,
        education: oldEducationData,
      };
    } else {
      updatedData = {
        ...resumeDetails,
        education: [...resumeDetails.education, educationData],
      };
    }
    dispatch(updateResumeData(updatedData, resumeDetails?.userId));
    setIsOpen(false);
    setEducationIndex(null);
    setEducationData(initialEducationData);
  };

  const handleEdit = (projectData: EducationType, index: number): void => {
    setEducationData(projectData);
    setIsOpen(true);
    setEducationIndex(index);
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
  const { institution, fieldOfStudy, endDate, startDate, studyType } =
    educationData;
  return (
    <Wrapper className='flex flex-row flex-wrap sm:flex-nowrap'>
      {resumeLoading && <Loader />}
      <Typography
        variant='h2'
        className='w-12/12 sm:w-3/12 text-lg text-gray-600'
      >
        Education
      </Typography>
      <Wrapper className='flex flex-col ml-2 px-4 w-12/12 sm:w-8/12'>
        <Wrapper className='flex flex-row justify-end z-0'>
          <Button
            onClick={(): void => {
              setIsOpen(true);
              setEducationData(initialEducationData);
              setEducationIndex(null);
            }}
            leftIcon={<PlusIcon className='h-5' />}
            className='w-fit'
            title='Add Education'
          />
        </Wrapper>
        {resumeDetails?.education?.map(
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
                    <Wrapper className='flex'>
                      <PencilAltIcon
                        onClick={(): void =>
                          handleEdit(
                            {
                              institution,
                              fieldOfStudy,
                              endDate,
                              startDate,
                              studyType,
                            },
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
        onSave={(): void => handleSubmit()}
        saveBtnTitle={educationIndex !== null ? 'Update' : 'Save'}
      >
        <Wrapper className='p-2'>
          <Input
            inputLabel='College/University'
            placeholder='Ex: VSSUT,Burla,Sambalpur,Odisha,India'
            value={institution}
            name='institution'
            onChange={(e): void => handleInputChange(e.target)}
          />
        </Wrapper>
        <Wrapper className='p-2'>
          <Input
            inputLabel='Degree'
            placeholder='Ex:Bachelor in Engineering'
            value={studyType}
            name='studyType'
            onChange={(e): void => handleInputChange(e.target)}
          />
        </Wrapper>
        <Wrapper className='p-2'>
          <Input
            inputLabel='Field of study'
            placeholder='Ex:Information Technology'
            value={fieldOfStudy}
            name='fieldOfStudy'
            onChange={(e): void => handleInputChange(e.target)}
          />
        </Wrapper>
        <Wrapper className='p-2'>
          <CustomDatePicker
            onDateChange={(date): void =>
              handleInputChange({ name: 'startDate', value: date })
            }
            selectedDate={startDate}
            pickerLabel='Stat Date'
          />
        </Wrapper>
        <Wrapper className='p-2'>
          <CustomDatePicker
            onDateChange={(date): void =>
              handleInputChange({ name: 'endDate', value: date })
            }
            selectedDate={endDate}
            pickerLabel='End Date'
          />
        </Wrapper>
      </Modal>
    </Wrapper>
  );
};

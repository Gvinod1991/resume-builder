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
  CheckBox,
  TextEditor,
} from '../../../components';
import { PlusIcon } from '@heroicons/react/solid';
import { PencilAltIcon } from '@heroicons/react/outline';
import { RootState } from '../../../store/rootReducer';
import { IResumeState, WorkType } from '../../../store/reducer';

const initialWorkDetails = {
  companyName: '',
  endDate: '',
  startDate: '',
  location: '',
  position: '',
  summary: '',
};
export const WorkExperience = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const {
    resumeDetails: { work },
  }: IResumeState = useSelector((state: RootState) => state.resume);
  const [workDetails, setWorkDetails] = useState<WorkType>(initialWorkDetails);

  const handleInputChange = ({ name, value }: any): void => {
    setWorkDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { companyName, location, position, summary } = workDetails;
  return (
    <Wrapper className='flex flex-row flex-wrap sm:flex-nowrap'>
      <Typography
        variant='h2'
        className='w-12/12 sm:w-3/12 text-lg text-gray-600'
      >
        Your work experience
      </Typography>
      <Wrapper className='flex flex-col ml-2 px-4 w-12/12 sm:w-8/12'>
        <Wrapper className='flex flex-row justify-end z-0'>
          <Button
            onClick={(): void => setIsOpen(true)}
            leftIcon={<PlusIcon className='h-5' />}
            className='w-fit'
            title='Add work experience'
          />
        </Wrapper>
        {work?.map(
          (
            { companyName, endDate, location, position, startDate, summary },
            index
          ) => (
            <Wrapper key={companyName + index}>
              <Card className='w-full border'>
                <Wrapper className='flex flex-col'>
                  <Wrapper className='flex flex-row justify-between'>
                    <>
                      <Typography variant='h1' className='text-xl'>
                        {position}
                      </Typography>
                      <PencilAltIcon className='h-5 cursor-pointer text-gray-500' />
                    </>
                  </Wrapper>
                  <Typography variant='h4' className='text-md text-gray-300'>
                    {`${companyName},${location}`}
                  </Typography>
                  <Typography variant='h5' className='text-md text-gray-300'>
                    {`${startDate} to ${endDate}`}
                  </Typography>
                  <Typography variant='p'>{summary}</Typography>
                </Wrapper>
              </Card>
              <Divider className='border-8 border-white' />
            </Wrapper>
          )
        )}
      </Wrapper>
      <Modal
        title='Add Work Experience'
        className='w-10/12 sm:w-6/12 m-1'
        open={isOpen}
        onClose={(): void => setIsOpen(false)}
      >
        <>
          <Wrapper className='p-2'>
            <Input
              inputLabel='Title'
              value={position}
              name='position'
              onChange={(e): void => handleInputChange(e.target)}
              placeholder='Ex: FrontEnd Engineer'
            />
          </Wrapper>
          <Wrapper className='p-2'>
            <Input
              inputLabel='Company Name'
              value={companyName}
              name='companyName'
              onChange={(e): void => handleInputChange(e.target)}
              placeholder='Ex: Infosys'
            />
          </Wrapper>
          <Wrapper className='p-2'>
            <Input
              inputLabel='Location'
              value={location}
              name='location'
              onChange={(e): void => handleInputChange(e.target)}
              placeholder='Ex: Bengaluru,India'
            />
          </Wrapper>
          <Wrapper className='p-2'>
            <>
              <CustomDatePicker pickerLabel='Stat Date' />
              <CheckBox
                onChange={(): void => setIsChecked(!isChecked)}
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
            <TextEditor
              textEditorValue={summary}
              handleEditorChange={(content: any): void =>
                handleInputChange({ name: 'summary', value: content })
              }
            />
          </Wrapper>
        </>
      </Modal>
    </Wrapper>
  );
};

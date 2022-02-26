import { useEffect, useState } from 'react';
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
  CheckBox,
  TextEditor,
  Loader,
} from '../../../components';
import { PlusIcon } from '@heroicons/react/solid';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import { RootState } from '../../../store/rootReducer';
import { IResumeState, WorkType } from '../../../store/reducer';
import { updateResumeData } from '../../../store/actions';
import { validate } from '../../../utils/validate';

const initialWorkDetails = {
  companyName: '',
  endDate: '',
  startDate: '',
  location: '',
  position: '',
  summary: '',
};
const rules = {
  position: {
    presence: true,
    message: 'Position/job role required!',
  },
  companyName: {
    presence: true,
    message: 'Company name required!',
  },
  startDate: {
    presence: true,
    message: 'Start month and year required!',
  },
  endDate: {
    presence: true,
    message: 'End month and year required!',
  },
  location: {
    presence: true,
    message: 'Job location required!',
  },
  summary: {
    presence: true,
    message: 'Your work summary required!',
  },
};
export const WorkExperience = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [workIndex, setWorkIndex] = useState<number | null>(null);
  const [confirmModal, setConfirmModal] = useState<boolean>(false);
  const [errorData, setErrorData] = useState<any>(null);
  const dispatch = useDispatch();
  const { resumeDetails, resumeLoading }: IResumeState = useSelector(
    (state: RootState) => state.resume
  );
  const [workDetails, setWorkDetails] = useState<WorkType>(initialWorkDetails);

  const handleInputChange = ({ name, value }: any): void => {
    setWorkDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    setWorkDetails((prevState) => ({
      ...prevState,
      endDate: isChecked ? 'present' : prevState.endDate,
    }));
  }, [isChecked]);

  const handleSubmit = (): void => {
    const { isValid, errors } = validate({ data: workDetails, rules });
    setErrorData(errors);
    if (!isValid) {
      return;
    }
    let updatedData;
    if (workIndex !== null) {
      const oldWorkData = [...resumeDetails.work];
      oldWorkData[workIndex] = workDetails;
      updatedData = {
        ...resumeDetails,
        work: oldWorkData,
      };
    } else {
      updatedData = {
        ...resumeDetails,
        work: [...resumeDetails.work, workDetails],
      };
    }
    dispatch(updateResumeData(updatedData, resumeDetails?.userId));
    setIsOpen(false);
    setWorkIndex(null);
    setWorkDetails(initialWorkDetails);
  };
  const handleEdit = (workData: WorkType, index: number): void => {
    if (workData.endDate === 'present') {
      setIsChecked(true);
    }
    setWorkDetails(workData);
    setIsOpen(true);
    setWorkIndex(index);
  };
  const handleRemove = (workIndex: number): void => {
    setWorkIndex(workIndex);
    setConfirmModal(true);
  };
  const deleteConfirm = (): void => {
    const updatedResumeDate = {
      ...resumeDetails,
      work: [...resumeDetails.work.filter((_, i) => i !== workIndex)],
    };
    dispatch(updateResumeData(updatedResumeDate, resumeDetails?.userId));
    setConfirmModal(false);
    setWorkIndex(null);
  };
  const { companyName, location, position, summary, startDate, endDate } =
    workDetails;
  return (
    <Wrapper className='flex flex-row flex-wrap sm:flex-nowrap'>
      {resumeLoading && <Loader />}
      <Typography
        variant='h2'
        className='w-12/12 sm:w-3/12 text-lg text-gray-500'
      >
        Your work experience
      </Typography>
      <Wrapper className='flex flex-col ml-2 px-4 w-12/12 sm:w-8/12'>
        <Wrapper className='flex flex-row justify-end z-0'>
          <Button
            onClick={(): void => {
              setIsOpen(true);
              setWorkDetails(initialWorkDetails);
              setWorkIndex(null);
            }}
            leftIcon={<PlusIcon className='h-5' />}
            className='w-fit'
            title='Add work experience'
          />
        </Wrapper>
        {resumeDetails?.work?.map(
          (
            { companyName, endDate, location, position, startDate, summary },
            index
          ) => (
            <Wrapper key={companyName + index}>
              <Card className='w-full border'>
                <Wrapper className='flex flex-col'>
                  <Wrapper className='flex flex-row justify-between p-0'>
                    <Typography variant='h1' className='text-xl text-gray-600'>
                      {position}
                    </Typography>
                    <Wrapper className='flex'>
                      <PencilAltIcon
                        onClick={(): void =>
                          handleEdit(
                            {
                              companyName,
                              endDate,
                              location,
                              position,
                              startDate,
                              summary,
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
                  <Typography variant='h4' className='text-md text-gray-400'>
                    {`${companyName},${location}`}
                  </Typography>
                  <Typography variant='h5' className='text-md text-gray-400'>
                    {`${startDate} to ${endDate}`}
                  </Typography>
                  <Wrapper
                    className='p-1 text-gray-500 text-sm custom-list'
                    dangerouslySetInnerHTML={{ __html: summary }}
                  ></Wrapper>
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
        onSave={handleSubmit}
        saveBtnTitle={workIndex !== null ? 'Update' : 'Save'}
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
            {errorData?.position && (
              <Typography variant='p' className='text-red-400'>
                {errorData?.position}
              </Typography>
            )}
          </Wrapper>
          <Wrapper className='p-2'>
            <Input
              inputLabel='Company Name'
              value={companyName}
              name='companyName'
              onChange={(e): void => handleInputChange(e.target)}
              placeholder='Ex: Infosys'
            />
            {errorData?.companyName && (
              <Typography variant='p' className='text-red-400'>
                {errorData?.companyName}
              </Typography>
            )}
          </Wrapper>
          <Wrapper className='p-2'>
            <Input
              inputLabel='Location'
              value={location}
              name='location'
              onChange={(e): void => handleInputChange(e.target)}
              placeholder='Ex: Bengaluru,India'
            />
            {errorData?.location && (
              <Typography variant='p' className='text-red-400'>
                {errorData?.location}
              </Typography>
            )}
          </Wrapper>
          <Wrapper className='p-2'>
            <>
              <CustomDatePicker
                onDateChange={(date): void =>
                  handleInputChange({ name: 'startDate', value: date })
                }
                selectedDate={startDate}
                pickerLabel='Stat Date'
              />
              <CheckBox
                checked={isChecked}
                onChange={(): void => {
                  setIsChecked(!isChecked);
                  handleInputChange({ name: 'endDate', value: '' });
                }}
                inputLabel='Currently works here'
              />
              {errorData?.startDate && (
                <Typography variant='p' className='text-red-400'>
                  {errorData?.startDate}
                </Typography>
              )}
            </>
          </Wrapper>
          {!isChecked && (
            <Wrapper className='p-2'>
              <CustomDatePicker
                onDateChange={(date): void =>
                  handleInputChange({ name: 'endDate', value: date })
                }
                selectedDate={endDate}
                pickerLabel='End Date'
              />
              {errorData?.endDate && (
                <Typography variant='p' className='text-red-400'>
                  {errorData?.endDate}
                </Typography>
              )}
            </Wrapper>
          )}
          <Wrapper className='p-2'>
            <TextEditor
              textEditorValue={summary}
              handleEditorChange={(content: any): void =>
                handleInputChange({ name: 'summary', value: content })
              }
            />
            {errorData?.summary && (
              <Typography variant='p' className='text-red-400'>
                {errorData?.summary}
              </Typography>
            )}
          </Wrapper>
        </>
      </Modal>
      <Modal
        title='Are you sure?'
        className='w-3/12 sm:w-6/12 m-1 h-1/4'
        open={confirmModal}
        onClose={(): void => setConfirmModal(false)}
        onSave={deleteConfirm}
        saveBtnTitle='Confirm'
      >
        <p>Want to delete the work experience</p>
      </Modal>
    </Wrapper>
  );
};

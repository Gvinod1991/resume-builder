import { useState } from 'react';
import {
  TextEditor,
  Wrapper,
  Typography,
  Button,
  Loader,
} from '../../../components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { IResumeState } from '../../../store/reducer/resume.reducer';
import { updateResumeData } from '../../../store/actions';

export const Achievements = (): JSX.Element => {
  const dispatch = useDispatch();
  const { resumeDetails, resumeLoading }: IResumeState = useSelector(
    (state: RootState) => state.resume
  );
  const [achievement, setAchievement] = useState<string | undefined>(
    resumeDetails?.achievements
  );
  const handleSubmit = (): void => {
    const updatedData = {
      ...resumeDetails,
      achievements: achievement,
    };
    dispatch(updateResumeData(updatedData, resumeDetails?.userId));
  };
  return (
    <Wrapper className='flex flex-col w-full'>
      {resumeLoading && <Loader />}
      <Wrapper className='flex flex-row flex-wrap sm:flex-nowrap'>
        <Typography
          variant='h1'
          className='w-12/12 sm:w-3/12  text-lg text-gray-500'
        >
          Achievements
        </Typography>
        <Wrapper className='flex flex-col ml-2 px-4 w-12/12 sm:w-8/12 '>
          <TextEditor
            textEditorValue={achievement}
            handleEditorChange={(content: any): void => setAchievement(content)}
          />
        </Wrapper>
      </Wrapper>
      <Wrapper className='flex justify-end'>
        <Button
          title='Save'
          onClick={(): void => handleSubmit()}
          className='w-fit'
        ></Button>
      </Wrapper>
    </Wrapper>
  );
};

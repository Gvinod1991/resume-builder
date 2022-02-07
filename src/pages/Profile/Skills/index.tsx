import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TagsInput, Wrapper, Typography, Button } from '../../../components';
import { RootState } from '../../../store/rootReducer';
import { IResumeState } from '../../../store/reducer/resume.reducer';
import { useDispatch } from 'react-redux';
import { updateResumeData } from '../../../store/actions';
import { Loader } from '../../../components';

export const Skills = (): JSX.Element => {
  const { resumeDetails, resumeLoading }: IResumeState = useSelector(
    (state: RootState) => state.resume
  );
  const dispatch = useDispatch();
  const [skillSet, setSkillList] = useState<Array<string>>(
    resumeDetails?.skills?.genericSkills
      ? resumeDetails?.skills?.genericSkills
      : []
  );
  const selectedTags = (tags: Array<string>): void => {
    setSkillList(tags);
  };
  const updateResumeDetails = (): void => {
    const updatedData = {
      ...resumeDetails,
      skills: {
        ...resumeDetails.skills,
        genericSkills: skillSet,
      },
    };
    dispatch(updateResumeData(updatedData, resumeDetails?.userId));
  };
  return (
    <>
      <Wrapper className='flex flex-row w-full'>
        {resumeLoading && <Loader />}
        <Typography variant='h2' className='w-2/12 text-lg text-gray-600'>
          Your skills
        </Typography>
        <Wrapper className='flex flex-col ml-2 px-4 w-10/12'>
          <TagsInput
            tagLabel='Type and hit enter key to add your skills'
            selectedTags={selectedTags}
            initTags={skillSet}
          />
        </Wrapper>
      </Wrapper>
      <Wrapper className='flex justify-end'>
        <Button
          title='Save'
          onClick={() => updateResumeDetails()}
          className='w-fit'
        ></Button>
      </Wrapper>
    </>
  );
};

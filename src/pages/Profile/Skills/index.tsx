import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TagsInput, Wrapper, Typography, Button } from '../../../components';
import { RootState } from '../../../store/rootReducer';
import { IResumeState } from '../../../store/reducer/resume.reducer';

export const Skills = (): JSX.Element => {
  const {
    resumeDetails: { skills },
  }: IResumeState = useSelector((state: RootState) => state.resume);
  const [skillSet, setSkillList] = useState<Array<string>>(
    skills?.genericSkills ? skills?.genericSkills : []
  );
  const selectedTags = (tags: Array<string>): void => {
    setSkillList(tags);
  };
  return (
    <>
      <Wrapper className='flex flex-row w-full'>
        <>
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
        </>
      </Wrapper>
      <Wrapper className='flex justify-end'>
        <Button title='Save' className='w-fit'></Button>
      </Wrapper>
    </>
  );
};

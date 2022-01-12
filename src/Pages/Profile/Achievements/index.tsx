import {
  TextArea,
  Wrapper, Typography,
} from '../../../Components';

export const Achievements = () => {
  return (
    <Wrapper className="flex flex-col w-full">
      <>
        <Wrapper className="flex flex-row">
          <>
            <Typography variant='h1' className="w-3/12 text-lg text-gray-500">Achievements</Typography>
            <Wrapper className='flex flex-col ml-2 px-4 w-10/12'>
              <TextArea textAreaValue=''
                rows={8}
                placeholder='Your Achievements' handleChange={() => { }} />
            </Wrapper>
            <Wrapper className='w-2/12'></Wrapper>
          </>
        </Wrapper>
      </>
    </Wrapper>
  )
}
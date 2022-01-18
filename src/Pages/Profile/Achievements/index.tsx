import {
  TextArea,
  Wrapper, Typography, Button
} from '../../../Components';

export const Achievements = () => {
  return (
    <Wrapper className="flex flex-col w-full">
      <>
        <Wrapper className="flex flex-row flex-wrap sm:flex-nowrap">
          <>
            <Typography variant='h1' className="w-12/12 sm:w-3/12  text-lg text-gray-500">Achievements</Typography>
            <Wrapper className='flex flex-col ml-2 px-4 w-12/12 sm:w-8/12 '>
              <TextArea textAreaValue=''
                rows={8}
                placeholder='Your Achievements' handleChange={() => { }} />
            </Wrapper>
          </>
        </Wrapper>
        <Wrapper className='flex justify-end'>
          <Button title='Save' className='w-fit'></Button>
        </Wrapper>
      </>
    </Wrapper>
  )
}
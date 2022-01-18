import {
  Input, Button, TextArea,
  Select, Wrapper, Typography, Divider
} from '../../../Components';

export const About = () => {
  const options = [{
    optionKey: '1',
    optionValue: 'FrontEnd Engineer'
  }, {
    optionKey: '2',
    optionValue: 'Backend Engineer'
  }
  ]
  const yearOptions = [{
    optionKey: '1',
    optionValue: '<1 Year'
  }, {
    optionKey: '2',
    optionValue: '1 Year'
  },
  {
    optionKey: '3',
    optionValue: '2 Years'
  },
  {
    optionKey: '4',
    optionValue: '3 Years'
  }
  ]
  return (
    <Wrapper className="flex flex-col w-full">
      <>
        <Wrapper className="flex flex-row flex-wrap sm:flex-nowrap">
          <>
            <Typography variant='h1' className="w-12/12 sm:w-3/12 text-lg text-gray-500">About your self</Typography>
            <Wrapper className='flex flex-col ml-2 px-4 w-12/12 sm:w-10/12'>
              <>
                <Wrapper className='p-2'>
                  <>
                    <Typography variant='h2' className="text-2xl">Vinod Godti</Typography>
                    <Wrapper className='flex flex-row flex-auto'>
                      <>
                        <img className="object-cover h-20 rounded-full" src="https://photos.angel.co/users/6513194-medium_jpg?1564405222" alt="" />
                        <Button title='Change profile picture' className="m-5 h-10 align-middle"></Button>
                      </>
                    </Wrapper>
                  </>
                </Wrapper>
                <Wrapper className='p-2'>
                  <Input inputLabel='Your Location' />
                </Wrapper>
                <Wrapper className='p-2'>
                  <Select
                    label='Select Designation/Role' handleChange={() => { }} options={options} />
                </Wrapper>
                <Wrapper className='p-2'>
                  <Select
                    label='Years of Experience' handleChange={() => { }} options={yearOptions} />
                </Wrapper>
                <Wrapper className='p-2'>
                  <TextArea textAreaValue='' textAreLabel='Professional Intro' handleChange={() => { }} />
                </Wrapper>
                <Wrapper className='flex justify-end'>
                  <Button title='Save' className='w-fit'></Button>
                </Wrapper>
              </>
            </Wrapper>
            <Wrapper className='w-12/12 sm:w-2/12 '></Wrapper>
          </>
        </Wrapper>
        <Divider />
        <Wrapper className='flex flex-row flex-wrap sm:flex-nowrap'>
          <>
            <Typography variant='h1' className="w-12/12 sm:w-3/12 text-lg text-gray-500">Contact Details</Typography>
            <Wrapper className='flex flex-col ml-2 px-4 w-12/12 sm:w-10/12'>
              <>
                <Wrapper className='p-2'>
                  <Input
                    inputLabel='Email Id'
                    value='venkat.godti3@gmail.com'
                    disabled={true}
                  />
                </Wrapper>
                <Wrapper className='p-2'>
                  <Input inputLabel='Contact Number'
                    placeholder='Contact Number(With country code)'
                  />
                </Wrapper>
                <Wrapper className='p-2'>
                  <Input
                    inputLabel='Website'
                    placeholder='Website' />
                </Wrapper>
                <Wrapper className='p-2'>
                  <Input
                    inputLabel='LinkedIn'
                    placeholder='LinkedIn'
                  />
                </Wrapper>
                <Wrapper className='p-2'>
                  <Input inputLabel='GitHub' placeholder='GitHub' />
                </Wrapper>
                <Wrapper className='p-2'>
                  <Input inputLabel='Twitter' placeholder='Twitter' />
                </Wrapper>
                <Wrapper className='flex justify-end'>
                  <Button title='Save' className='w-fit'></Button>
                </Wrapper>
              </>
            </Wrapper>
            <Wrapper className='w-12/12 sm:w-2/12'></Wrapper>
          </>
        </Wrapper>
      </>
    </Wrapper>
  )
}
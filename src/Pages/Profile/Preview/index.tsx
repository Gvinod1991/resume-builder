import {
  Card, Wrapper,
  Typography,
  Button, Pill, Divider
} from '../../../Components';
import {
  GlobeAltIcon, PhoneIcon, MailIcon,
  LocationMarkerIcon, PrinterIcon, RefreshIcon
} from '@heroicons/react/outline';

const printResume = () => {
  const data = document.getElementById('print-section')?.innerHTML;
  let myWindow = window.open('Resume');
  myWindow?.document.write('<html><head><title>Resume</title>');
  myWindow?.document.write('<script src="https://cdn.tailwindcss.com"></script>');
  myWindow?.document.write('</head><body >');
  myWindow?.document.write(data ? data : "");
  myWindow?.document.write('</body></html>');
  myWindow?.document.close(); // necessary for IE >= 10
  myWindow!.onload = () => {
    myWindow?.focus();
    myWindow?.print();
    myWindow?.close();
  }
}
export const Preview = () => {
  return (
    <>
      <Wrapper className='flex justify-end gap-3'>
        <>
          <Button leftIcon={<PrinterIcon className='h-5 mr-1' />} title='Print' onClick={() => printResume()}></Button>
          <Button leftIcon={<RefreshIcon className='h-5 mr-1' />} title='Change Template' onClick={() => printResume()}></Button>
        </>
      </Wrapper>
      <div id="print-section">
        <Card className='rounded-sm border' >
          <Wrapper className='flex flex-row justify-between w-full'>
            <>
              <Wrapper className='flex flex-row'>
                <>
                  <img className="object-cover h-20 rounded-full mt-3" src="https://photos.angel.co/users/6513194-medium_jpg?1564405222" alt="" />
                  <Wrapper className='flex-column'>
                    <>
                      <Typography variant='h2' className="text-2xl text-indigo-500">Vinod Godti</Typography>
                      <Typography variant='h2' className="text-xl text-gray-500">Lead Frontend Developer</Typography>
                      <Typography variant='p' className="text-xl text-gray-500">5 Years of experience</Typography>
                    </>
                  </Wrapper>
                </>
              </Wrapper>
              <>
                <Wrapper className='flex flex-col'>
                  <>
                    <div className='flex flex-col'>
                      <span className='flex'>
                        <MailIcon className='h-5 mt-1 text-indigo-500' />
                        <Typography variant='p' className='text-gray-500'>venkat.godti3@gmail.com</Typography>
                      </span>
                      <span className='flex'>
                        <PhoneIcon className='h-5 text-indigo-500' />
                        <Typography variant='p' className='text-gray-500'>+91-7008135892</Typography>
                      </span>
                      <span className='flex'>
                        <LocationMarkerIcon className='h-5 text-indigo-500' />
                        <Typography variant='p' className='text-gray-500'>Bengaluru, India</Typography>
                      </span>
                    </div>
                    <div className='flex flex-row mt-2'>
                      <GlobeAltIcon className='h-8 opacity-60 m-1 cursor-pointer' />
                      <img className="object-cover h-7 rounded-full opacity-60 m-1 cursor-pointer" src="/linkedIcon.png" alt="" />
                      <img className="object-cover h-7 rounded-full opacity-60 m-1 cursor-pointer" src="/twitter.png" alt="" />
                      <img className="object-cover h-7 rounded-full opacity-60 m-1 cursor-pointer" src="/gitHub.png" alt="" />
                    </div>
                  </>
                </Wrapper>
              </>
            </>
          </Wrapper>
        </Card>
        <Wrapper className='flex gap-4 p-0' >
          <>
            <div className='w-9/12'>
              <Card className='mt-2 border rounded-sm' title="Resume Highlights" titleClassName='text-indigo-500'>
                <Typography variant="h1" className="text-gray-600">
                  Full stack Javascript developer with 5+ years of experience in web & mobile app development using React Js and React Native.
                </Typography>
              </Card>
              <Card className='mt-2 border rounded-sm' title="Experience" titleClassName='text-indigo-500'>
                <Typography variant="h1" className="text-gray-600">
                  Full stack Javascript developer with 5+ years of experience in web & mobile app development using React Js and React Native.
                </Typography>
              </Card>
              <Card className='mt-2 border rounded-sm' title="Projects" titleClassName='text-indigo-500'>
                <>
                  <Wrapper>
                    <>
                      <Typography variant="h1" className="text-gray-800 text-2xl">
                        Fast Fingers
                      </Typography>
                      <Typography variant="h5" className="text-gray-600 text-lg">
                        Sr.Frontend Developer
                      </Typography>
                      <Typography variant="p" className="text-gray-500 text-sm">
                        Speed typing game in which the user can play the game by typing the word displayed within the time frame. By playing this game typing speed of the user will be enhanced and also new words can be learned.
                      </Typography>
                      <Wrapper className="text-gray-500 text-sm flex flex-wrap gap-3">
                        <>
                          <Typography variant="h5" className="text-gray-600 text-lg m-1">
                            Tech Stack
                          </Typography>
                          <Pill title='React JS' />
                          <Pill title='SCSS' />
                          <Pill title='Javascript' />
                        </>
                      </Wrapper>
                    </>
                  </Wrapper>
                  <Divider className='border-indigo-400 h mt-2' />
                  <Wrapper>
                    <>
                      <Typography variant="h1" className="text-gray-800 text-2xl">
                        Resume Builder
                      </Typography>
                      <Typography variant="h5" className="text-gray-600 text-lg">
                        Sr.Frontend Developer
                      </Typography>
                      <Typography variant="p" className="text-gray-500 text-sm">
                        Speed typing game in which the user can play the game by typing the word displayed within the time frame. By playing this game typing speed of the user will be enhanced and also new words can be learned.
                      </Typography>
                      <Wrapper className="text-gray-500 text-sm flex flex-wrap gap-3">
                        <>
                          <Typography variant="h5" className="text-gray-600 text-lg m-1">
                            Tech Stack
                          </Typography>
                          <Pill title='React JS' />
                          <Pill title='Tailwind CSS' />
                          <Pill title='Javascript' />
                        </>
                      </Wrapper>
                    </>
                  </Wrapper>
                </>
              </Card>
            </div>
            <div className='w-3/12'>
              <Card className='mt-2 border rounded-sm' title="Skills" titleClassName='text-indigo-500'>
                <div className='flex gap-2 flex-wrap'>
                  <Pill title='React Js' />
                  <Pill title='Javascript' />
                  <Pill title='HTML' />
                  <Pill title='CSS' />
                  <Pill title='React Native' />
                  <Pill title='Node Js' />
                </div>
              </Card>
              <Card className='mt-2 border rounded-sm' title="Education" titleClassName='text-indigo-500'>
                <>
                  <Wrapper>
                    <>
                      <Typography variant="h1" className="text-gray-800">
                        Pesto Tech
                      </Typography>
                      <Typography variant="h2" className="text-gray-600">
                        Engineering Fellow
                      </Typography>
                      <Typography variant="h2" className="text-gray-600">
                        Oct 2020 - Feb 2021
                      </Typography>
                    </>
                  </Wrapper>
                  <Divider className='border-indigo-400' />
                  <Wrapper>
                    <>
                      <Typography variant="h1" className="text-gray-800">
                        VSSUT
                      </Typography>
                      <Typography variant="h2" className="text-gray-600">
                        Information Technology
                      </Typography>
                      <Typography variant="h3" className="text-gray-600">
                        Aug 2010 -  May 2014
                      </Typography>
                    </>
                  </Wrapper>

                </>
              </Card>
            </div>
          </>
        </Wrapper>
      </div>
    </>
  )
}
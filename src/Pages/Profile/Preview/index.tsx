import {
  Card, Wrapper,
  Typography
} from '../../../Components';
import {
  GlobeAltIcon, PhoneIcon, MailIcon,
  LocationMarkerIcon
} from '@heroicons/react/outline';

export const Preview = () => {
  return (
    <>
      <Card className='rounded-sm border' >
        <Wrapper className='flex flex-row justify-between w-full'>
          <>
            <Wrapper className='flex flex-row'>
              <>
                <img className="object-cover h-20 rounded-full" src="https://photos.angel.co/users/6513194-medium_jpg?1564405222" alt="" />
                <Wrapper className='flex-column'>
                  <>
                    <Typography variant='h2' className="text-2xl text-gray-500">Vinod Godti</Typography>
                    <Typography variant='h2' className="text-2xl text-gray-500">Lead Frontend Developer</Typography>
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
                      <MailIcon className='h-5 mt-1 text-gray-400' />
                      <Typography variant='p' className='text-gray-500'>venkat.godti3@gmail.com</Typography>
                    </span>
                    <span className='flex'>
                      <PhoneIcon className='h-5 text-gray-500' />
                      <Typography variant='p' className='text-gray-500'>+91-7008135892</Typography>
                    </span>
                    <span className='flex'>
                      <LocationMarkerIcon className='h-5 text-gray-500' />
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
      <Wrapper className='flex gap-4' >
        <>
          <div className='w-9/12'>
            <Card className='mt-2 border rounded-sm' title="Resume Highlights">
              <Typography variant="h1" className="text-gray-600">
                Full stack Javascript developer with 5+ years of experience in web & mobile app development using React Js and React Native.
              </Typography>
            </Card>
            <Card className='mt-2 border rounded-sm' title="Projects">
              <Typography variant="h1" className="text-gray-600">
                Full stack Javascript developer with 5+ years of experience in web & mobile app development using React Js and React Native.
              </Typography>
            </Card>
            <Card className='mt-2 border rounded-sm' title="Experience">
              <Typography variant="h1" className="text-gray-600">
                Full stack Javascript developer with 5+ years of experience in web & mobile app development using React Js and React Native.
              </Typography>
            </Card>
          </div>
          <div className='w-3/12'>
            <Card className='mt-2 border rounded-sm' title="Skills">
              <Typography variant="h1" className="text-gray-600">
                Full stack Javascript developer with 5+ years of experience in web & mobile app development using React Js and React Native.
              </Typography>
            </Card>
            <Card className='mt-2 border rounded-sm' title="Education">
              <Typography variant="h1" className="text-gray-600">
                Full stack Javascript developer with 5+ years of experience in web & mobile app development using React Js and React Native.
              </Typography>
            </Card>
          </div>
        </>
      </Wrapper>
    </>
  )
}
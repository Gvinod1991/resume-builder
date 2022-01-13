import {
  Card, Wrapper,
  Typography
} from '../../../Components';
import { GlobeAltIcon } from '@heroicons/react/outline';

export const Preview = () => {
  return (
    <>
      <Card>
        <Wrapper className='flex flex-row justify-between'>
          <>
            <>
              <img className="object-cover h-20 rounded-full" src="https://photos.angel.co/users/6513194-medium_jpg?1564405222" alt="" />
              <Wrapper className='flex flex-col ml-2'>
                <>
                  <Typography variant='h2' className="text-2xl">Vinod Godti</Typography>
                  <Typography variant='p' className="text-xl">5 Years of experience</Typography>
                </>
              </Wrapper>
            </>
            <>
              <Wrapper className='flex flex-row'>
                <>
                  <GlobeAltIcon className='h-8 opacity-60 m-1 cursor-pointer' />
                  <img className="object-cover h-7 rounded-full opacity-60 m-1 cursor-pointer" src="/linkedIcon.png" alt="" />
                  <img className="object-cover h-7 rounded-full opacity-60 m-1 cursor-pointer" src="/twitter.png" alt="" />
                  <img className="object-cover h-7 rounded-full opacity-60 m-1 cursor-pointer" src="/gitHub.png" alt="" />
                </>
              </Wrapper>
            </>
          </>
        </Wrapper>
      </Card>
    </>
  )
}
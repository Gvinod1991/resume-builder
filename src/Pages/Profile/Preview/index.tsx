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
      <Wrapper className='flex justify-end gap-6'>
        <>
          <Button leftIcon={<PrinterIcon className='h-5 mr-1' />} title='Print' onClick={() => printResume()}></Button>
          <Button leftIcon={<RefreshIcon className='h-5 mr-1' />} title='Change Template' onClick={() => printResume()}></Button>
        </>
      </Wrapper>
      <div id="print-section">
        <Card className='rounded-sm border' >
          <Wrapper className='flex flex-row justify-between flex-wrap sm:flex-nowrap'>
            <>
              <Wrapper className='flex flex-col'>
                <>
                  <Wrapper className='flex flex-row'>
                    <>
                      <img className="object-cover h-20 rounded-full mt-3" src="https://photos.angel.co/users/6513194-medium_jpg?1564405222" alt="" />
                      <Wrapper className='flex-column'>
                        <>
                          <Typography variant='h2' className="text-2xl text-indigo-500">Vinod Godti</Typography>
                          <Typography variant='h2' className="text-xl text-gray-500">Lead Frontend Developer</Typography>
                          <Typography variant='p' className="text-xl text-gray-500">6 Years of experience</Typography>
                        </>
                      </Wrapper>
                    </>
                  </Wrapper>
                  <Typography variant="h1" className="text-gray-600">
                    Senior Frontend developer with 6+ years of experience in web & mobile app development using React Js and React Native.
                  </Typography>
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
                      <a href='https://gvinod-portfolio.herokuapp.com/'><GlobeAltIcon className='h-8 opacity-60 m-1 cursor-pointer' /></a>
                      <a href='https://www.linkedin.com/in/godti-vinod-37bb46a9/'><img className="object-cover h-7 rounded-full opacity-60 m-1 cursor-pointer" src="/linkedIcon.png" alt="" /></a>
                      <a href='https://twitter.com/GodtiVinod'><img className="object-cover h-7 rounded-full opacity-60 m-1 cursor-pointer" src="/twitter.png" alt="" /></a>
                      <a href='https://github.com/Gvinod1991'><img className="object-cover h-7 rounded-full opacity-60 m-1 cursor-pointer" src="/gitHub.png" alt="" /></a>
                    </div>
                  </>
                </Wrapper>
              </>
            </>
          </Wrapper>
        </Card>
        <Wrapper className='flex flex-wrap sm:flex-nowrap justify-between gap-3 p-0' >
          <>
            <div className='w-12/12 lg:w-9/12'>
              <Card className='mt-2 border rounded-sm' title="Experience" titleClassName='text-indigo-500'>
                <>
                  <Wrapper>
                    <>
                      <Typography variant="h5" className="text-gray-600 text-xl">
                        Lead Frontend Developer
                      </Typography>
                      <Typography variant="h1" className="text-gray-800 text-lg">
                        ACE Online, Bengaluru, India
                      </Typography>
                      <Typography variant="h5" className="text-gray-800 text-md">
                        2021 - present (about 1 year)
                      </Typography>
                      <Typography variant="p" className="text-gray-500 text-sm">
                        ACE Online is an ed-tech startup that provides recorded as well as live classes to engineering students who want to appear GATE exam and other engineering-related entrance tests for Engineering jobs in india.
                      </Typography>
                      <ul className='p-2 ml-5'>
                        <li className='list-disc text-sm p-1'>
                          CMS to manage the subjects,units,chapters and attach videos for the course
                        </li>
                        <li className='list-disc text-sm p-1'>
                          Student portal to browse the courses and subscribe it.
                        </li>
                        <li className='list-disc text-sm p-1'>
                          Tech stack: ReactJs, Redux, Material UI
                        </li>
                      </ul>
                    </>
                  </Wrapper>
                  <Divider className='border-indigo-400 h mt-2 mb-2' />
                  <Wrapper>
                    <>
                      <Typography variant="h5" className="text-gray-600 text-xl">
                        Sr.Frontend Developer
                      </Typography>
                      <Typography variant="h1" className="text-gray-800 text-lg">
                        Apnaklub, Bengaluru, India
                      </Typography>
                      <Typography variant="h5" className="text-gray-800 text-md">
                        2019 - 2021 (about 2 years)
                      </Typography>
                      <Typography variant="p" className="text-gray-500 text-sm">
                        Apnaklub provides a platform for resellers and traders to resell inventory of fashion, Kitchen, and daily essential goods.
                      </Typography>
                      <ul className='p-2 ml-5'>
                        <li className='list-disc text-sm p-1'>
                          Designed and developed the dashboard for the operations team to manage products, inventories, and order details. Operations team time saved by 40% when this application is used as compared to manually maintaining the excel sheets for inventory and purchase orders of products from vendors.
                        </li>
                        <li className='list-disc text-sm p-1'>
                          Created CI/CD process for effective deployment using Bitbucket and AWS.
                        </li>
                        <li className='list-disc text-sm p-1'>
                          Led a team of 2 engineers to build the Progressive Web App for the reseller to share and sell products to their customers. Responsible for the whole app architecture, planning, development, and deployment in AWS EC2
                        </li>
                        <li className='list-disc text-sm p-1'>
                          Tech stack: ReactJs, Redux, AntD library, NodeJs, ExpressJs, and MongoDB
                        </li>
                      </ul>
                    </>
                  </Wrapper>
                  <Divider className='border-indigo-400 h mt-2 mb-2' />
                  <Wrapper>
                    <>
                      <Typography variant="h5" className="text-gray-600 text-xl">
                        Full Stack Developer
                      </Typography>
                      <Typography variant="h1" className="text-gray-800 text-lg">
                        Bookingjini Labs, Bhubaneswar, India
                      </Typography>
                      <Typography variant="h5" className="text-gray-800 text-md">
                        2017 - 2019 (about 2 years)
                      </Typography>
                      <Typography variant="p" className="text-gray-500 text-sm">
                        Bookingjini Labs provides the dashboard, booking engine, and chatbot service tools to hoteliers to manage their properties which operate in India, Nepal, and Bhutan.
                      </Typography>
                      <ul className='p-2 ml-5'>
                        <li className='list-disc text-sm p-1'>
                          Built a portal to manage inventory of rooms and distribution to various online travel agents(OTA) like Booking.com and 7 other OTA's which helped reduce overbooking by 5%.
                        </li>
                        <li className='list-disc text-sm p-1'>
                          Built the Booking Engine Web application using ReactJs, Redux, NodeJs & ExpressJs with a team of 2 engineers. Revenue increased by 25% within the 1 month of the launch of this application.
                        </li>
                        <li className='list-disc text-sm p-1'>
                          Built the mobile app (Android) to manage the inventory and pricing of the hotel rooms by hoteliers using React Native and Redux. Uploaded this application to the google play store. Clients for the company increased by 20%. Google Play Store Link.
                        </li>
                        <li className='list-disc text-sm p-1'>
                          Tech stack- ReactJs, React Native, Redux, NodeJs, ExpressJs, and Mysql.
                        </li>
                      </ul>
                    </>
                  </Wrapper>
                  <Divider className='border-indigo-400 h mt-2 mb-2' />
                  <Wrapper>
                    <>
                      <Typography variant="h5" className="text-gray-600 text-xl">
                        Technical Analyst
                      </Typography>
                      <Typography variant="h1" className="text-gray-800 text-lg">
                        Siddha Development and Research Consultancy, Bhubaneswar, India
                      </Typography>
                      <Typography variant="h5" className="text-gray-800 text-md">
                        2015 - 2017 (2 years)
                      </Typography>
                      <Typography variant="p" className="text-gray-500 text-sm">
                        SDRC provides web-based software applications to agencies like UNICEF and various other social welfare organizations as well as state governments in India.
                      </Typography>
                      <ul className='p-2 ml-5'>
                        <li className='list-disc text-sm p-1'>
                          Worked on the project called child labor tracking system (CLTS), which is an innovative web-based system to register child laborers and track their re-integration to the mainstream.
                        </li>
                        <li className='list-disc text-sm p-1'>
                          Tech stack- PHP, Laravel , Jquery, HTML5, and CSS3
                        </li>
                      </ul>
                    </>
                  </Wrapper>
                </>
              </Card>
              <Card className='mt-2 border rounded-sm' title="Projects" titleClassName='text-indigo-500'>
                <>
                  <Wrapper>
                    <>
                      <a className='text-indigo-400 active:text-indigo-800 text-2xl' href="https://vigorous-fermat-03ebb2.netlify.app/">Fast Fingers</a>
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
                  <Divider className='border-indigo-400 mt-2' />
                  <Wrapper>
                    <>
                      <a className='text-indigo-400 active:text-indigo-800 text-2xl' href="https://keen-roentgen-c0e229.netlify.app/">Resume Builder </a>
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
            <div className='w-12/12 sm:w-3/12'>
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
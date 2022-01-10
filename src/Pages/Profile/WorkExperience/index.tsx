import { Card, Wrapper, Typography, Divider, Button } from "../../../Components";
import { PlusIcon } from "@heroicons/react/solid";

export const WorkExperience = () => {
  return (
    <Wrapper className="flex flex-row w-full">
      <>
        <Typography variant="h2" className="w-3/12 text-lg text-gray-600">Your work experience</Typography>
        <Wrapper className='flex flex-col ml-2 px-4 w-8/12'>
          <>
            <Wrapper className='flex flex-row justify-end'>
              <Button leftIcon={<PlusIcon className="h-5" />} className="w-fit" title="Add work experience" />
            </Wrapper>
            <Card>
              <Wrapper className="flex flex-col w-full">
                <>
                  <Typography variant="h1" className="text-xl">Lead FrontEnd Developer</Typography>
                  <Typography variant="h4" className="text-md text-gray-300">FROST</Typography>
                  <Typography variant="h5" className="text-md text-gray-300">Apr 2021 to Present</Typography>
                  <Typography variant="p">
                    FROST is an ed-tech startup that provides recorded as well as live classes to engineering students who want to appear GATE exam and other engineering-related entrance tests for Engineering jobs.
                  </Typography>
                </>
              </Wrapper>
            </Card>
            <Divider className="border-8 border-white" />
            <Card>
              <Wrapper className="flex flex-col w-full">
                <>
                  <Typography variant="h1" className="text-xl">Lead FrontEnd Developer</Typography>
                  <Typography variant="h4" className="text-md text-gray-300">FROST</Typography>
                  <Typography variant="h5" className="text-md text-gray-300">Apr 2021 to Present</Typography>
                  <Typography variant="p">
                    FROST is an ed-tech startup that provides recorded as well as live classes to engineering students who want to appear GATE exam and other engineering-related entrance tests for Engineering jobs.
                  </Typography>
                </>
              </Wrapper>
            </Card>
            <Divider className="border-8 border-white" />
            <Card>
              <Wrapper className="flex flex-col w-full">
                <>
                  <Typography variant="h1" className="text-xl">Lead FrontEnd Developer</Typography>
                  <Typography variant="h4" className="text-md text-gray-300">FROST</Typography>
                  <Typography variant="h5" className="text-md text-gray-300">Apr 2021 to Present</Typography>
                  <Typography variant="p">
                    FROST is an ed-tech startup that provides recorded as well as live classes to engineering students who want to appear GATE exam and other engineering-related entrance tests for Engineering jobs.
                  </Typography>
                </>
              </Wrapper>
            </Card>
          </>
        </Wrapper>
      </>
    </Wrapper>
  )
}
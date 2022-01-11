import {
  Card, Wrapper, Typography,
  Divider, Button, Input, Modal, CustomDatePicker, TextArea
} from "../../../Components";
import { PlusIcon } from "@heroicons/react/solid";
import { useState } from "react";

export const WorkExperience = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Wrapper className="flex flex-row w-full">
      <>
        <Typography variant="h2" className="w-3/12 text-lg text-gray-600">Your work experience</Typography>
        <Wrapper className='flex flex-col ml-2 px-4 w-8/12'>
          <>
            <Wrapper className='flex flex-row justify-end z-0'>
              <Button onClick={() => setIsOpen(true)} leftIcon={<PlusIcon className="h-5" />} className="w-fit" title="Add work experience" />
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
        <Modal title="Add Work Experience" className="w-6/12" open={isOpen} onClose={() => setIsOpen(false)} >
          <>
            <Wrapper className='p-2'>
              <Input inputLabel='Title' placeholder="Ex: FrontEnd Engineer" />
            </Wrapper>
            <Wrapper className='p-2'>
              <Input inputLabel='Company Name' placeholder="Ex: Infosys" />
            </Wrapper>
            <Wrapper className='p-2'>
              <Input inputLabel='Location' placeholder="Ex: Bengaluru,India" />
            </Wrapper>
            <Wrapper className='p-2'>
              <CustomDatePicker pickerLabel="Stat Date" />
            </Wrapper>
            <Wrapper className='p-2'>
              <CustomDatePicker pickerLabel="End Date" />
            </Wrapper>
            <Wrapper className='p-2'>
              <TextArea textAreaValue='' textAreLabel='Description' handleChange={() => { }} />
            </Wrapper>
          </>
        </Modal>
      </>
    </Wrapper>
  )
}
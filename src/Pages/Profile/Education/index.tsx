import {
  Card, Wrapper, Typography,
  Divider, Button, Input, Modal, CustomDatePicker, TextArea
} from "../../../Components";
import { PlusIcon } from "@heroicons/react/solid";
import { PencilAltIcon } from '@heroicons/react/outline'
import { useState } from "react";

export const Education = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Wrapper className="flex flex-row w-full">
      <>
        <Typography variant="h2" className="w-3/12 text-lg text-gray-600">Education</Typography>
        <Wrapper className='flex flex-col ml-2 px-4 w-8/12'>
          <>
            <Wrapper className='flex flex-row justify-end z-0'>
              <Button onClick={() => setIsOpen(true)} leftIcon={<PlusIcon className="h-5" />} className="w-fit" title="Add Education" />
            </Wrapper>
            <Card className="w-full border">
              <Wrapper className="flex flex-col w-full">
                <>
                  <Wrapper className="flex flex-row justify-between">
                    <>
                      <Typography variant="h1" className="text-xl">VSSUT Burla</Typography>
                      <PencilAltIcon className="h-5 cursor-pointer text-gray-500" />
                    </>
                  </Wrapper>
                  <Typography variant="h4" className="text-md text-gray-300">Information Technology, B.tech</Typography>
                  <Typography variant="h5" className="text-md text-gray-300">8.22/10 GPA</Typography>
                  <Typography variant="h5" className="text-md text-gray-300">Apr 2010 to 2014</Typography>
                </>
              </Wrapper>
            </Card>
            <Divider className="border-8 border-white" />
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
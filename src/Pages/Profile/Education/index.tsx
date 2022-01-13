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
        <Modal title="Education" className="w-6/12" open={isOpen} onClose={() => setIsOpen(false)} >
          <>
            <Wrapper className='p-2'>
              <Input inputLabel='College/University' placeholder="Ex: VSSUT,Burla,Sambalpur,Odisha,India" />
            </Wrapper>
            <Wrapper className='p-2'>
              <Input inputLabel='Degree' placeholder="Ex:Bachelor in Engineering" />
            </Wrapper>
            <Wrapper className='p-2'>
              <Input inputLabel='Field of study' placeholder="Ex:Information Technology" />
            </Wrapper>
            <Wrapper className='p-2'>
              <CustomDatePicker pickerLabel="Stat Date" />
            </Wrapper>
            <Wrapper className='p-2'>
              <CustomDatePicker pickerLabel="End Date" />
            </Wrapper>
          </>
        </Modal>
      </>
    </Wrapper>
  )
}
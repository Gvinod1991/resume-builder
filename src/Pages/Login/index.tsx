import { Card, Wrapper, Input, Typography, Button } from '../../Components';

export default function Login() {
  return (
    <Card className={`fixed bg-gray-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit`}>
      <>
        <Typography variant="h2" className="text-xl text-indigo-500" >Login Here</Typography>
        <Wrapper className='p-2'>
          <Input inputLabel='Email' placeholder="example@gmail.com" />
        </Wrapper>
        <Wrapper className='p-2'>
          <Input type="password" inputLabel='Password' placeholder="your password" />
        </Wrapper>
        <Wrapper className="flex flex-row justify-end">
          <Button onClick={() => { }} className="m-1" title="Login"></Button>
        </Wrapper>
      </>
    </Card>
  )
}
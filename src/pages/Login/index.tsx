import { Card, Wrapper, Typography, Button } from '../../components';
import { useDispatch } from 'react-redux';
import { LoginRequest } from '../../store/actions';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Card className={`fixed bg-gray-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit`}>
      <>
        <Typography variant="h2" className="text-xl text-indigo-500" >Login Here</Typography>
        <Wrapper className="flex flex-row justify-end">
          <Button onClick={() => dispatch(LoginRequest(navigate))} className="m-1" title="Login with google"></Button>
        </Wrapper>
        <Wrapper className="flex flex-row justify-end">
          <Button onClick={() => { }} className="m-1" title="Login with Github"></Button>
        </Wrapper>
      </>
    </Card>
  )
}
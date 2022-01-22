import { useEffect } from 'react';
import { Card, Wrapper, Typography, Button } from '../../components';
import { useDispatch } from 'react-redux';
import { LoginRequest } from '../../store/actions';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../utils/firebase';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate(from, { replace: true });
  }, [user, loading, from, navigate]);

  return (
    <Card className={`fixed bg-gray-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit`}>
      <>
        <Typography variant="h2" className="text-xl text-indigo-500" >Login Here</Typography>
        <Wrapper className="flex flex-row justify-end">
          <Button onClick={() => dispatch(LoginRequest())} className="m-1" title="Login with google"></Button>
        </Wrapper>
        <Wrapper className="flex flex-row justify-end">
          <Button onClick={() => { }} className="m-1" title="Login with Github"></Button>
        </Wrapper>
      </>
    </Card>
  )
}
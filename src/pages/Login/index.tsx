import { useEffect } from 'react';
import { Wrapper, Button } from '../../components';
import { useDispatch } from 'react-redux';
import { LoginRequest } from '../../store/actions';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';
import { Loader } from '../../components';
import { AppThunk } from '../../store/rootReducer';

export default function Login(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/resume';
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) navigate(from, { replace: true });
  }, [user, from, navigate]);
  if (loading) return <Loader />;
  return (
    <>
      <Wrapper className='flex flex-row justify-center'>
        <Button
          onClick={(): AppThunk<void> => dispatch(LoginRequest('google'))}
          className='m-2 px-10 py-5'
          title='Login with google'
        ></Button>
      </Wrapper>
      <Wrapper className='flex flex-row justify-center'>
        <Button
          onClick={(): AppThunk<void> => dispatch(LoginRequest('github'))}
          className='m-2 px-10 py-5'
          title='Login with Github'
        ></Button>
      </Wrapper>
    </>
  );
}

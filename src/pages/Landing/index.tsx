import { useEffect, useState } from 'react';
import { PencilAltIcon } from '@heroicons/react/solid';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Loader, Modal } from '../../components';
import { auth } from '../../utils/firebase';
import Login from '../Login';
import './landing.css';
export default function Landing(): JSX.Element {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/resume';
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      setIsModalVisible(false);
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  if (loading) return <Loader />;
  return (
    <>
      <div id='bg'></div>
      <header>
        <a href='#'>
          <PencilAltIcon className='w-8 cursor-pointer inline' />
          <span className='relative top-1 font-bold text-lg'>ResumeSmith</span>
        </a>
      </header>
      <main className='main'>
        <section id='card'>
          <ul>
            <li>
              <span></span>
              <strong>Login with Google/GitHub</strong>
            </li>
            <li>
              <span></span>
              <strong>
                Update who you are,your work, projects, and skills
              </strong>
            </li>
            <li>
              <span></span>
              <strong>All set , share or download </strong>
            </li>
          </ul>
        </section>
        <section id='primary'>
          <h1>Craft your resume!</h1>
          <p>Build once, download or share your resume.</p>
          <Button
            title='Get Started'
            className='bg-gray-50 text-indigo-500 px-10 py-4 mt-12 ml-10 hover:bg-gray-50 hover:border-indigo-300 border'
            onClick={(): void => setIsModalVisible(true)}
          ></Button>
        </section>
      </main>
      <Modal
        title='Login Here'
        titleStyle='text-indigo-400'
        className='w-10/12 md:w-5/12 lg:w-3/12 sm:h-auto m-1 h-auto bg-gray-50'
        open={isModalVisible}
        onClose={(): void => setIsModalVisible(false)}
        hideCancelBtn={true}
      >
        <Login />
      </Modal>
    </>
  );
}

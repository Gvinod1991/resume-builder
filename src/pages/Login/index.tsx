import { Card, Wrapper, Typography, Button } from '../../components';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../utils/firebase';

export default function Login() {
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user, token)
      }).catch((error) => {
        console.log(error)
      });
  }
  return (
    <Card className={`fixed bg-gray-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit`}>
      <>
        <Typography variant="h2" className="text-xl text-indigo-500" >Login Here</Typography>
        <Wrapper className="flex flex-row justify-end">
          <Button onClick={() => googleLogin()} className="m-1" title="Login with google"></Button>
        </Wrapper>
        <Wrapper className="flex flex-row justify-end">
          <Button onClick={() => { }} className="m-1" title="Login with Github"></Button>
        </Wrapper>
      </>
    </Card>
  )
}
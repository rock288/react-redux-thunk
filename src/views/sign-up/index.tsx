import { Layout } from '../../components';
import SignUpForm from './sign-up-form';
import signUpImage from '../../assets/images/sign-up.svg';

function SignUp() {
  return (
    <Layout imgBanner={signUpImage}>
      <SignUpForm />
    </Layout>
  );
}

export default SignUp;

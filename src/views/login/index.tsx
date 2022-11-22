import { Layout } from '../../components';
import LoginForm from './login-form';
import loginImage from '../../assets/images/login.svg';

function Login() {
  return (
    <Layout imgBanner={loginImage}>
      <LoginForm />
    </Layout>
  );
}

export default Login;

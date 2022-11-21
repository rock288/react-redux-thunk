import loginImage from '../../../assets/images/login.svg';
import { Image } from '../../../components';

function LoginBanner() {
  return (
    <section className="h-100 d-flex justify-content-center align-items-center">
      <Image src={loginImage} alt="" isBanner />
    </section>
  );
}

export default LoginBanner;

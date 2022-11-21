import loginSVG from '../../../assets/images/login.svg';
import { Image } from '../../../components';
import './index.scss';

function LoginBanner() {
  return (
    <section className="h-100 d-flex justify-content-center align-items-center">
      <Image src={loginSVG} alt="" isBanner />
    </section>
  );
}

export default LoginBanner;

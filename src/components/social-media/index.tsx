import facebookIcon from '../../assets/images/facebook.svg';
import githubIcon from '../../assets/images/github.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import mailIcon from '../../assets/images/mail.svg';
import { Image } from '..';
import './index.scss';

function SocialMedia() {
  return (
    <section className="login-social-media d-flex justify-content-center pt-4">
      <Image src={facebookIcon} alt="" isIcon />
      <Image src={githubIcon} alt="" isIcon />
      <Image src={twitterIcon} alt="" isIcon />
      <Image src={mailIcon} alt="" isIcon />
    </section>
  );
}

export default SocialMedia;

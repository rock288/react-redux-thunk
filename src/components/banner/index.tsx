import Image from '../image';

interface Props {
  src: string;
  alt: string;
}

function LoginBanner(props: Props) {
  return (
    <section
      data-testid="banner"
      className="h-100 d-flex justify-content-center align-items-center"
    >
      <Image imgClass="w-75" {...props} isBanner />
    </section>
  );
}

export default LoginBanner;

import './index.scss';

interface Props {
  src: string;
  alt: string;
  imgClass?: string;
  isIcon?: boolean;
  isBanner?: boolean;
}

function Image(props: Props) {
  const { isIcon, isBanner, imgClass, ...rest } = props;
  return (
    <img
      {...rest}
      className={`${imgClass ?? ''} ${isBanner ? 'img-banner' : ''} ${
        isIcon ? 'img-icon' : ''
      }`}
    />
  );
}

export default Image;

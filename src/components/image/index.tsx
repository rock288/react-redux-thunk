import './index.scss';

interface Props {
  src: string;
  alt: string;
  imgClass?: string;
  isIcon?: boolean;
  isBanner?: boolean;
  isAvatar?: boolean;
}

function Image(props: Props) {
  const { isIcon, isBanner, isAvatar, imgClass, ...rest } = props;
  return (
    <img
      {...rest}
      className={`${imgClass ?? ''} ${isBanner ? 'img-banner' : ''} ${
        isIcon ? 'img-icon' : ''
      } ${isAvatar ? 'img-avatar' : ''}`}
    />
  );
}

export default Image;

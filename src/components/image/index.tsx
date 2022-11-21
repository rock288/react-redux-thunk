import './index.scss';

interface Props {
  src: string;
  alt: string;
  isIcon?: boolean;
  isBanner?: boolean;
}

function Image(props: Props) {
  const { isIcon, isBanner, ...rest } = props;
  return (
    <img
      {...rest}
      className={`${isBanner ? 'img-banner' : ''} ${isIcon ? 'img-icon' : ''}`}
    />
  );
}

export default Image;

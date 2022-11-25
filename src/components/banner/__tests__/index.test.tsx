import { render, screen, cleanup } from '@testing-library/react';
import loginImage from '../../../assets/images/login.svg';
import Banner from '../index';

afterEach(cleanup);

test('should render banner', () => {
  render(<Banner src={loginImage} alt="image" />);
  const image = screen.getByTestId('banner');
  expect(image).toBeInTheDocument();

  const testImage = document.querySelector('img') as HTMLImageElement;
  expect(testImage).toHaveAttribute('alt', 'image');
});

import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Button from '../index';

afterEach(cleanup);

describe('Button', () => {
  test('should render button', () => {
    const onClickButton = jest.fn();
    render(<Button onClick={onClickButton} text="Login" />);
    const button = screen.getByTestId('btn');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Login');
    expect(button).not.toHaveClass('w-100');
  });

  test('should render button have full width', () => {
    const onClickButton = jest.fn();
    render(<Button onClick={onClickButton} text="Login" isFullWidth />);
    const button = screen.getByTestId('btn');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Login');
    expect(button).toHaveClass('w-100');
    fireEvent.click(button);
    expect(onClickButton).toHaveBeenCalledTimes(1);
  });
});

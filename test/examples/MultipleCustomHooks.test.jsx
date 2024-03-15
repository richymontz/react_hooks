import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('<MultipleCustomHooks />', () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });


  test('should shows the component', () => {

    useFetch.mockReturnValue({
      data: [{ author: 'Ricardo', quote: 'I say somthing here!' }],
      isLoading: true,
      hasError: null
    })

    render(<MultipleCustomHooks />);
    expect(screen.getByText('Breaking Quotes'))

  });

  test('should fetch a quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Ricardo', quote: 'I say somthing here!' }],
      isLoading: false,
      hasError: null
    })

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Ricardo'));
    expect(screen.getByText('I say somthing here!'));

    const nextButton = screen.getByRole('button', { name: 'Next Quote' });
    expect(nextButton.disabled).toBeFalsy();
  });

  test('should calls increment function', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Ricardo', quote: 'I say somthing here!' }],
      isLoading: false,
      hasError: null
    })

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole('button', { name: 'Next Quote' });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});

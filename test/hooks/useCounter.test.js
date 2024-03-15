import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks"

describe('useCounter', () => {
  test('should returns default values', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function))
    expect(decrement).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  test('should returns counter with 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(100)
  })

  test('should increments counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment } = result.current;
    act(
      () => { increment(10); }
    );


    expect(result.current.counter).toBe(110)
  })

  test('should decrement counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(
      () => { decrement(10); }
    );


    expect(result.current.counter).toBe(90)
  })

  test('should restart counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { reset, increment } = result.current;
    act(
      () => {
        increment(10);
        reset();

      }
    );


    expect(result.current.counter).toBe(100)
  })


})

import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks"

describe('useForm', () => {
  const initialForm = {
    name: 'Ricardo',
    email: 'ricardo@hooks.com'
  }
  test('should resturns default values', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { name, email, formState, onInputChange, resetForm } = result.current

    expect(name).toEqual(initialForm.name)
    expect(email).toEqual(initialForm.email)
    expect(formState).toEqual(initialForm)
    expect(onInputChange).toEqual(expect.any(Function))
    expect(resetForm).toEqual(expect.any(Function))
  })

  test('should change name in the form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current

    act(() => {
      onInputChange({ target: { name: 'name', value: 'Jose' } });
    })

    expect(result.current.name).toEqual('Jose')
    expect(result.current.formState.name).toEqual('Jose')
  })

  test('should reset the form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, resetForm } = result.current

    act(() => {
      onInputChange({ target: { name: 'name', value: 'Jose' } });
      resetForm();
    });

    expect(result.current.formState.name).toEqual(initialForm.name)
  })



})

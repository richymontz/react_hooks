import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
  const [counter, setCounter] = useState(1)

  const incrementFather = useCallback(
    (value) => {
      setCounter((c) => c + value)
    },
    [],
  )

  return (
    <>
      <h1>UseCallback Hook {counter} </h1>

      <ShowIncrement increment={incrementFather} />
    </>
  )
}

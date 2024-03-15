import { useMemo, useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Here we go!');
  }

  return `itereations = ${iterationNumber}`
}

export const MemorizeHook = () => {

  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true)

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1>Counter <small>{counter}</small></h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button className="btn btn-success" onClick={() => { increment(); }}>
        +1
      </button>

      <button className="btn btn-outline-primary" onClick={() => { setShow(!show) }}> Show/Hide {JSON.stringify(show)} </button>
    </>
  )
}
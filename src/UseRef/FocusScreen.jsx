import React, { useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef();

  const onClick = () => { inputRef.current.select(); }


  return (
    <>
      <h1>Focos Screen</h1>
      <hr />

      <input
        ref={inputRef}
        className='form-control'
        type="text"
        placeholder='Enter Name'
      />

      <button className='btn btn-success mt-2' onClick={onClick}> Set focus</button>
    </>
  )
}

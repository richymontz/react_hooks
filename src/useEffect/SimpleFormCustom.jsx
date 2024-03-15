import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const SimpleFormCustom = () => {

  const { formState, onInputChange, userName, email, password, resetForm } = useForm({
    userName: '',
    email: '',
    password: ''
  });

  // const { userName, email, password } = formState;

  useEffect(() => {
    // console.log("useEffect called");
  }, [])

  useEffect(() => {
    // console.log("use Form change called");
  }, [formState])

  useEffect(() => {
    // console.log("use Email change called");
  }, [email])


  return (
    <>
      <h1>Simple Form Custom</h1>
      <hr />


      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="userName"
        value={userName}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="example@host.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Enter Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={resetForm} className="btn btn-primary mt-2"> Reset </button>



    </>
  )
}

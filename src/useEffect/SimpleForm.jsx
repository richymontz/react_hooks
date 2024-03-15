import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    userName: "richy",
    email: "email@example.com"
  });

  const { userName, email } = formState;


  useEffect(() => {
    // console.log("useEffect called");
  }, [])

  useEffect(() => {
    // console.log("use Form change called");
  }, [formState])

  useEffect(() => {
    // console.log("use Email change called");
  }, [email])


  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value //computed properties accessor
    });
  };

  return (
    <>
      <h1>Simple Form</h1>
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

      {userName === "richymontz" && <Message />}

    </>
  )
}

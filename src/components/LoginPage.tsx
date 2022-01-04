import React, { FormEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useAuth } from "../context";

function LoginPage() {
  let navigate = useNavigate()
  let location = useLocation()
  let auth = useAuth()

  // let from = location.state?.from?.pathname || "/"
  let from = "/"

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    let formData = new FormData(event.currentTarget)
    let username = formData.get("username") as string

    auth.signIn(username, () => {
      navigate(from, { replace: true })
    })
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage

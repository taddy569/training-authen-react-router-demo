import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { RootState, AppDispatch } from "../redux/store";
import { signIn, signOut } from "../redux/actions";

export const Home = () => {
  const user = useSelector((state: RootState) => state.auth.user)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <p>Home</p>
      <div>Status: {user ? "Sign In" : "Sign Out"}</div>
      <br />
      <button
        onClick={() => dispatch(signIn())}
      >
        Sign In
      </button>
      <button
        onClick={() => dispatch(signOut())}
      >
        Sign Out
      </button>
      <br />
      <Link to="/public">Public</Link>
    </div>
  )
}

export default Home


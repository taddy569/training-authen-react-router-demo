import React from 'react'
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <p>Home</p>
      <Link to="/public">Public</Link>
    </div>
  )
}

export default Home


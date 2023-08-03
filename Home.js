import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <b>HOME PAGE</b>
      <Link to="/about"> GO TO THE ABOUT PAGE </Link>
    </div>
  );
}

export default Home;
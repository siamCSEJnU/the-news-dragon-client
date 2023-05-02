import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        quaerat nostrum suscipit obcaecati, nihil facere ex perferendis quam
        aut. Odit, adipisci natus reprehenderit obcaecati odio ducimus! Libero
        maiores enim beatae.
      </p>
      <p>
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

import "./signup.css";
export const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.name,e.target.value)
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4700/register", form)
      .then(function (response) {
        // console.log(response.data.user._id,response.data.user.name,response.data.token);
        swal({
          title: "Signup Successfull",
          text: "you are successfully registered to showman",
          icon: "success",
          // dangerMode: true,
        });
        navigate("/login");
      })
      .catch(function (error) {
        // console.log(error);
        swal({
          title: `${error.response.data.message}`,
          icon: "error",
          // dangerMode: true,
        });
      });
  };

  return (
    <>
      <div className="signupdiv">
        <h2>SignUp</h2>

        <form className="signupform" action="" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            required
            id="name"
            name="name"
            type="text"
            autoFocus
            placeholder="Enter Your Name"
            onInput={handleChange}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            required
            id="email"
            name="email"
            type="email"
            autoFocus
            placeholder="Enter Your Email"
            onInput={handleChange}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            required
            id="password"
            name="password"
            autoFocus
            type="password"
            placeholder="Enter Your Password"
            onInput={handleChange}
          />
          <br />
          <input id="submit" type="submit" value="Signup" />
        </form>
        <p>
          Already a User! <Link to="/login">Login here</Link>
        </p>
      </div>
    </>
  );
};

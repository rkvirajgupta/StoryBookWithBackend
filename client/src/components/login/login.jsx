import { useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useDispatch } from "react-redux";
import { UserData } from "../../Redux/UserSlice/UserSlice";
import swal from "sweetalert";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4700/login", form)
      .then(function (response) {
        // console.log(response.data.user._id,response.data.user.name,response.data.token);

        dispatch(
          UserData({
            userName: response.data.user.name,
            userId: response.data.user._id,
            userToken: response.data.token,
          })
        );
        swal({
          title: "Login Successfull",
          text: `login successfull ${response.data.user.name}!`,
          icon: "success",
          // dangerMode: true,
        });
        navigate("/");
      })
      .catch(function (error) {
        // console.log(error.response.data);
        if (error.response.data.message) {
          swal({
            title: `${error.response.data.message}`,
            icon: "error",
            // dangerMode: true,
          });
        } else {
          swal({
            title: `${error.response.data}`,
            icon: "error",
            // dangerMode: true,
          });
        }
      });
  };

  return (
    <>
      <div className="logindiv">
        <h2>Login</h2>

        <form className="loginform" action="" onSubmit={handleSubmit}>
          <label htmlFor="loginemail">Email:</label>
          <br />
          <input
            required
            id="loginemail"
            name="email"
            type="email"
            autoFocus
            placeholder="Enter Your Email"
            onInput={handleChange}
          />
          <br />
          <label htmlFor="loginpassword">Password:</label>
          <br />
          <input
            required
            id="loginpassword"
            name="password"
            autoFocus
            type="password"
            placeholder="Enter Your Password"
            onInput={handleChange}
          />
          <br />
          <input type="submit" className="submit" id="submit" value="Login" />
        </form>
        <p>
          New User! <Link to="/signup">SignUp here</Link>
        </p>
      </div>
    </>
  );
};

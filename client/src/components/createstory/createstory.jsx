import "./createstory.css";
import swal from "sweetalert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
export const Createstory = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  console.log("userdetails", user);

  const [form, setForm] = useState({
    title: "",
    about: "",
    type: "",
    userId: user.userId,
  });

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.userName === undefined) {
      swal({
        title: "Login First",
        text: "you need to login first to create story",
        icon: "info",
        // dangerMode: true,
      });
      navigate("/login");
    }
    axios
      .post(
        "http://localhost:4700/post",
        form,

        {
          headers: {
            authorization: `Bearer ${user.userToken}`,
          },
        }
      )
      .then(function (response) {
        // console.log(response);
        swal({
          title: "Story Posted",
          text: `Story Posted with author ${user.userName}`,
          icon: "success",
          // dangerMode: true,
        });
        setForm({
          title: "",
          about: "",
          type: "",
          userId: user.userId,
        });
      })

      .catch(function (error) {
        // console.log(error);
        if (user.userName !== undefined) {
          swal({
            title: `${error.response.data.message}`,
            icon: "error",
            // dangerMode: true,
          });
        }
      });
  };
  return (
    <>
      <h1>Want be author write your story here</h1>
      <div>
        <form className="createstoryform" action="" onSubmit={handleSubmit}>
          <label htmlFor="title">Title of your story:</label>
          <br />
          <input
            required
            id="title"
            name="title"
            type="text"
            value={form.title}
            autoFocus
            placeholder="Enter Your Title Here"
            onInput={handleChange}
          />
          <br />
          <label htmlFor="about">Description of your story:</label>
          <br />
          <input
            required
            id="about"
            name="about"
            type="text"
            value={form.about}
            autoFocus
            placeholder="Enter  Description Here"
            onInput={handleChange}
          />
          <br />
          <label htmlFor="type">Type of your story</label>
          <br />
          <input
            required
            id="type"
            name="type"
            autoFocus
            type="text"
            value={form.type}
            placeholder="Enter The Type of Story Here"
            onInput={handleChange}
          />
          <br />
          <input id="b1" type="submit" value="Post Story" />
        </form>
      </div>
    </>
  );
};

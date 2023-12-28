import "./updatestory.css";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Updater } from "../../Redux/FlagSlice/FlagSlice";
import swal from "sweetalert";
import { StorydetailsData } from "../../Redux/StorydetailsSlice/StorydetailsSlice";
export const Updatestory = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const flag = useSelector((state) => state.flag);
  // console.log("userdetails", flag);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [form, setForm] = useState({
    title: "",
    about: "",
    type: "",
    userId: user.userId,
  });

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.get(`http://localhost:4700/post/${id}`).then((data) => {
      setForm(data.data);
      dispatch(StorydetailsData(data.data));
    });
  };
  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.userName === undefined) {
      alert("you need to login first to update story");
      navigate("/login");
    }
    axios
      .patch(
        `http://localhost:4700/post/${id}`,
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
          title: "Story Updated",
          text: `Story Updated with author ${user.userName}`,
          icon: "success",
          // dangerMode: true,
        });
      })
      .then(() => getData())
      .then(() => dispatch(Updater(!flag.updater)))
      .catch(function (error) {
        // console.log(error);
        if (user.userName !== undefined) {
          alert(error.response.data.message);
        }
      });
  };
  return (
    <>
      <div
        style={
          flag.updater === true ? { display: "block" } : { display: "none" }
        }
      >
        <h1>Update your story here</h1>
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
          <input id="b1" type="submit" value="Update Story" />
        </form>
      </div>
    </>
  );
};

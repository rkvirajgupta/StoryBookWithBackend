import { useEffect } from "react";
import { useState } from "react";
import "./product.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Stories = () => {
  const [stories, setStories] = useState([]);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    const data = await fetch("http://localhost:4700/post");
    const data1 = await data.json();
    setStories(data1);
  };
  const handleStory = () => {
    if (user.userName === undefined) {
      alert("you need to login first to create story");
      navigate("/login");
    }
    if (user.userName !== undefined) {
      navigate("/createstory");
    }
  };

  return (
    <>
      <p className="verse">
        <span>!!!</span> YOUR STORIES <span>!!!</span>
      </p>
      {user.userName === undefined ? (
        ""
      ) : (
        <button className="btn5" onClick={() => handleStory()}>
          Create Storie's
        </button>
      )}
      <div className="main">
        {stories.map((e) => {
          return (
            <div className="main1" key={e._id}>
              <h3>{e.title}</h3>

              <div className="main1div1">
                <p>
                  Visitor's visted this story{" "}
                  <span>{Math.floor(Math.random() * 80 + 50)}</span>
                </p>
                <p>
                  Rated by Viewer's{" "}
                  <span>{(Math.random() * (10 - 1 + 1)).toFixed(1)}★</span>
                </p>
                <p>
                  {" "}
                  Story related to <span>{e.type}</span>
                </p>
              </div>
              <Link to={`/detailstory/${e._id}`}>
                <button className="btn3">Detailed view</button>
              </Link>
              <p
                style={{
                  fontSize: "small",
                  textAlign: "right",
                  marginRight: "40px",
                }}
              >
                Written by:{" "}
                <span style={{ color: "rgb(1,88,255)" }}>{e.userId.name}</span>
              </p>
            </div>
          );
        })}
      </div>
      <p className="testimonials">What our customers say about us!</p>
      <div className="mainpro1">
        <div>
          <h5>★★★★★</h5>
          <p>
            These guys seemed too good to be true… believe it! They are
            exceptional. What an easy, joyful experience. I don’t know how we
            were so lucky to have found SHOWMAN!
          </p>
          <span>Mike.E</span>
          <p style={{ color: "rgb(1,88,255)" }}>Paint Manufacturer</p>
        </div>
        <div>
          <h5>★★★★★</h5>
          <p>
            SHOWMAN has smart people and offers outstanding resources for
            building and managing websites. Highly recommended.These guys seemed
            too good to be true working for the new comers.
          </p>
          <span>Charles E.</span>
          <p style={{ color: "rgb(1,88,255)" }}>Environmental Consultant</p>
        </div>
        <div>
          <h5>★★★★★</h5>
          <p>
            SHOWMAN was very helpful with our local Rotary website! They
            assisted us in redesigning our website and adding user-friendly
            functions. We get compliments all the time on our site is awosome!
          </p>
          <span>Meredith P.</span>
          <p style={{ color: "rgb(1,88,255)" }}>Real Estate Agent</p>
        </div>
        <div>
          <h5>★★★★★</h5>
          <p>
            SHOWMAN is my online solution for me. They have created a website
            with great visual interest and an easy to navigate format. They are
            innovators in connecting with my clients in meaningful and
            interesting ways!{" "}
          </p>
          <span>Kimberly L.</span>
          <p style={{ color: "rgb(1,88,255)" }}>Local Rotary Chapter</p>
        </div>
      </div>
    </>
  );
};

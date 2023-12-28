import "./Home.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import swal from "sweetalert";
export const Home = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const handleStory = () => {
    if (user.userName === undefined) {
      swal({
        title: "Login First",
        text: "you need to login first to create story",
        icon: "info",
        // dangerMode: true,
      });
      navigate("/login");
    }
    if (user.userName !== undefined) {
      navigate("/createstory");
    }
  };
  const handleTrending = () => {
    navigate("/stories");
  };
  return (
    <>
      <div className="maindiv">
        <h1>
          Helping small author's <br /> thrive in there dream's
        </h1>
        <h2>
          We are a creative digital agency specializing in story marketing{" "}
          <br />
          that drives growth for small to medium author's.
        </h2>

        <button className="btn1" onClick={() => handleTrending()}>
          Trending Storie's
        </button>
        <button className="btn2" onClick={() => handleStory()}>
          Create Storie's
        </button>
        <h1>Your Success is our Success</h1>
        <h2>
          We design custom Storie's that help you reach more readers and
          increase revenue.
        </h2>
      </div>
      <div className="box1">
        <div className="box1div1">
          {" "}
          <h2>
            Get The
            <br /> perfect Story
            <br /> match for your's
          </h2>
          <p>Action Storie's</p>
          <p>Horror Storie's</p>
          <p>Thriller Storie's</p>
          <p>Mystery Storie's</p>
          <p>Adventure Storie's</p>
          <p>Romance/Love Storie's</p>
        </div>{" "}
        <div className="box1div2">
          <h2>Trending Story's</h2>
          <div>
            <p> 1. Ramayana </p>
            <h5>{(Math.random() * (10 - 1 + 1)).toFixed(1)}★</h5>{" "}
          </div>
          <div>
            <p>2. Adipurush </p>
            <h5>{(Math.random() * (10 - 1 + 1)).toFixed(1)}★</h5>
          </div>
          <div>
            <p>3. Mahabharat </p>
            <h5>{(Math.random() * (10 - 1 + 1)).toFixed(1)}★</h5>
          </div>
          <div>
            <p>4. Dashavatar </p>
            <h5>{(Math.random() * (10 - 1 + 1)).toFixed(1)}★</h5>
          </div>
          <div>
            <p>5. Sitaramam </p>
            <h5>{(Math.random() * (10 - 1 + 1)).toFixed(1)}★</h5>
          </div>
          <div>
            <p>6. Kuntiputra </p>
            <h5>{(Math.random() * (10 - 1 + 1)).toFixed(1)}★</h5>
          </div>
          <div>
            <p>7. Worldotour </p>
            <h5>{(Math.random() * (10 - 1 + 1)).toFixed(1)}★</h5>
          </div>
        </div>
        <div className="box1div3">
          <h2>User's View</h2>
          <p className="ab">
            Visitors: <span>{Math.floor(Math.random() * 80 + 50)}</span>{" "}
          </p>
          <p className="ab">
            Writers: <span>{Math.floor(Math.random() * 80 + 50)}</span>
          </p>
          <p>Stories</p>
          <p>↓</p>
          <div className="box1div3subdiv1">
            <div>
              <p>Adventure </p>
              <p>↓</p>

              <span> {Math.floor(Math.random() * 80 + 50)}</span>
            </div>
            <div>
              <p>Action </p>
              <p>↓</p>

              <span>{Math.floor(Math.random() * 80 + 50)}</span>
            </div>
            <div>
              <p>Horror </p>
              <p>↓</p>

              <span>{Math.floor(Math.random() * 80 + 50)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="maindiv">
        <h1>Custom story Design Process</h1>
        <h2>
          While designing storie's, we look for brand identity elements to
          create a cohesive experience that reflects both the <br /> state of
          the viwers today and their ambitions for the future.
        </h2>
      </div>
    </>
  );
};

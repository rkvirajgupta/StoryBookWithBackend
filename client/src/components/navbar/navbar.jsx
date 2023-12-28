import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserData } from "../../Redux/UserSlice/UserSlice";
import "./navbar.css";
import image from "../../assets/storyBook.png";

export const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(UserData({}));
  };

  return (
    <div className="navdiv">
      <Link to="/" className="navdiv1">
        <img
          src={image}
          alt="StoryBook"
        />
      </Link>

      <div>
        <Link to="/" className="nav">
          Home
        </Link>
        <Link to="/stories" className="nav">
          Stories
        </Link>
        <Link to="/about" className="nav">
          About
        </Link>
      </div>
      <div>
        {user.userName === undefined ? (
          <Link to="/login" className="nav">
            <button className="btn4">Login</button>
          </Link>
        ) : (
          <div className="nvbtn nav">
            {" "}
            <p> Hi, {user.userName}</p>
            <button
              className="btn4"
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

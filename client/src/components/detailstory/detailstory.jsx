import "./detailstory.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Updatestory } from "../updatestory/updatestory";
import { Updater } from "../../Redux/FlagSlice/FlagSlice";
import swal from "sweetalert";
import { StorydetailsData } from "../../Redux/StorydetailsSlice/StorydetailsSlice";

export const DetailStory = () => {
  const { id } = useParams();

  // console.log({ id });

  const author = useSelector((state) => state.user.user);

  const updater = useSelector((state) => state.flag.updater);

  const story = useSelector((state) => state.storydetails.storydetails);
  // console.log(story)

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:4700/post/${id}`)
      .then((res) => dispatch(StorydetailsData(res.data)));
  }, [updater]);

  const navigate = useNavigate();

  const handleEdit = () => {
    dispatch(Updater(!updater));
  };
  // console.log(updater);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:4700/post/${id}`, {
        headers: {
          authorization: `Bearer ${author.userToken}`,
        },
      })
      .then((res) => {
        swal({
          title: "Story Deleted",
          text: `Story Deleted with author ${author.userName}`,
          icon: "warning",
          dangerMode: true,
        });
      });
    navigate("/stories");
  };
  return (
    <>
      <div className="dsr0">
        <div>
          <h2 className="sr1">{story.title}</h2>
          <div className="dsr" style={{ display: "flex" }}>
            <div className="dsr1">
              <p>
                Visitor's visted this story{" "}
                <span>{Math.floor(Math.random() * 80 + 50)}</span>
              </p>
              <p>
                Rated by Viewer's{" "}
                <span>{(Math.random() * (10 - 1 + 1)).toFixed(1)}★</span>
              </p>
              <p>
                Story related to <span>{story.type}</span>
              </p>
            </div>
            <div className="dsr2">"{story.about}".</div>
          </div>

          <i className="dsr3">
            {" "}
            Written by: <span> {story?.userId?.name}</span>
          </i>
        </div>
        {author.userId === story?.userId?._id ? (
          <div>
            <button className="btn7" onClick={() => handleEdit()}>
              {updater === false ? "Edit Story" : "Stay on Story"}
            </button>
            <button className="btn8" onClick={() => handleDelete()}>
              Delete Story
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {author.userId === story?.userId?._id ? (
        <div>{updater === false ? "" : <Updatestory />}</div>
      ) : (
        ""
      )}
    </>
  );
};

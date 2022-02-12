import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { addComments, getComments } from "../actions/AdminAction";
import { useParams } from "react-router-dom";
import moment from "moment";

const CommentsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComments(params.id, content));
    setContent("");
  };

  const { posts } = useSelector((state) => state.adminReducer);
  const { user } = useSelector((state) => state.userAuthReducer);

  useEffect(() => {
    dispatch(getComments(params.id));
  }, []);
  //
  if (!posts) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="comments">
      <h3 className="heading">Add A Comment Below</h3>
      <div className="container1">
        {user ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <textarea
                onChange={(e) => setContent(e.target.value)}
                value={content}
                className="form-control status-box"
                rows="3"
                placeholder="Enter your comment here..."
              />
              <Button variant="contained" type={"submit"}>
                Post
              </Button>
            </div>
          </form>
        ) : (
          <div>You have to sign in to leave a comment...</div>
        )}
        <ul className="posts" style={{ marginTop: 20 }}>
          {posts.map((item) => (
            <li key={item.id} style={{ flexDirection: "row", display: "flex" }}>
              <img
                width={50}
                style={{ borderRadius: 25, marginRight: 8 }}
                src={item.user.photoURL}
              />
              <div>
                {item.user.displayName} -{" "}
                {moment(item.created_at).calendar().toLowerCase()}
                <br />
                {item.content}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentsPage;

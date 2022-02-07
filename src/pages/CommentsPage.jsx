import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { addComments, getComments } from "../actions/AdminAction";

const CommentsPage = () => {
  const initComment = {
    comment: "",
  };
  const [comments, setNewComments] = useState(initComment);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComments(comments));
    setNewComments(initComment);
  };

  // getComments
  const { posts } = useSelector((state) => state.adminReducer);
  useEffect(() => {
    dispatch(getComments());
  }, []);

  if (!posts) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="comments">
      <h3 className="heading">Add A Comment Below</h3>
      <div className="container1">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <textarea
              onChange={(e) =>
                setNewComments({ ...comments, comment: e.target.value })
              }
              value={comments.comment}
              className="form-control status-box"
              rows="3"
              placeholder="Enter your comment here..."
            />

            <Button variant="contained">Post</Button>
          </div>
        </form>
        <ul className="posts" style={{ marginTop: 20 }}>
          {posts.map((item) => (
            <li key={item.id}>{item.comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentsPage;

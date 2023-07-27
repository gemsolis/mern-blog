import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
const Post = ({ _id, title, summary, content, cover, createdAt, author }) => {
  return (
    <div className="post">
      <div className="img-wrapper">
        <Link to={"/post/id"}>
          <img src={`http://localhost:4000/${cover}`} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <span className="author">{author.username}</span>
          <span className="time">
            {format(new Date(createdAt), "MMM d, yyyy HH:mm")}
          </span>
        </p>
        <p className="content">{summary}</p>
      </div>
    </div>
  );
};

export default Post;

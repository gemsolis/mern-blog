import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";

  return (
    <div className="post-page">
      <div className="post-title">
        <h2>{postInfo.title}</h2>
      </div>
      <div className="post-page-info">
        <div className="author">By {postInfo.author.username}</div>
        <div className="time">
          {format(new Date(postInfo.createdAt), "MMM d, yyyy HH:mm")}
        </div>
      </div>

      <div className="post-img-wrapper">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="blog-title" />
      </div>

      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
};

export default PostPage;

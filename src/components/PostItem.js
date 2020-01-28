import React from "react";

function PostHeader({ author, date }) {
  return (
    <div class="postHeader">
      <img src={author.avatar} alt="Avatar" class="avatar" />
      <div class="details">
        <span class="user">{author.name} </span>
        <span class="date">{date}</span>
      </div>
    </div>
  );
}

function PostComment({ comments }) {
  return (
    <div class="comments">
      {comments.map(comment => (
        <div class="comment" key={comment.id}>
          <img src={comment.author.avatar} alt="" class="avatar" />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

function PostItem({ data }) {
  return (
    <div class="postItem">
      <PostHeader author={data.author} date={data.date} />
      <div class="post">
        <p>{data.content}</p>
      </div>
      <PostComment comments={data.comments} />
    </div>
  );
}

export default PostItem;

import { useState } from 'react';
import { MdReadMore } from 'react-icons/md';
import { MdThumbDown } from 'react-icons/md';
import { MdThumbUp } from 'react-icons/md';

import './Post.css';
import IconButton from './IconButton';
import PostMeta from './PostMeta';

export function Post({ title, date, author, summary }) {
  const [showMore, setShowMore] = useState(false);
  const [votes, setVotes] = useState(0);

  function toggleShowMore() {
    setShowMore(!showMore);
  }

  function handleUpvote() {
    setVotes(votes + 1);
  }

  function handleDownvote() {
    setVotes(votes - 1);
  }

  return (
    <article className="Post">
      <h2 className="Post-title">{title}</h2>
      <div className="Post-votes">
        <IconButton onClick={() => handleUpvote()} icon={<MdThumbUp />}>
          Upvote
        </IconButton>
        <IconButton onClick={() => handleDownvote()} icon={<MdThumbDown />}>
          Downvote
        </IconButton>
        <p>Votes: {votes}</p>
      </div>
      <div className="Post-content">
        <div className="Post-meta">
          <PostMeta author={author} date={date} />
        </div>
        <div className="Post-button">
          <IconButton onClick={() => toggleShowMore()} icon={<MdReadMore />}>
            {showMore ? 'Read less' : 'Read more'}
          </IconButton>
        </div>
        {showMore && <p>{summary}</p>}
      </div>
    </article>
  );
}

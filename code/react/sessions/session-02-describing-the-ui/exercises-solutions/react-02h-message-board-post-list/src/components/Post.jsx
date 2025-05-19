import { IconButton } from './IconButton';
import { PostMeta } from './PostMeta';
import './Post.css';

export function Post({ title, date, author }) {
  return (
    <article className="Post">
      <h2 className="Post-title">{title}</h2>
      <div className="Post-content">
        <div className="Post-meta">
          <PostMeta author={author} date={date} />
        </div>
        <div className="Post-button">
          <IconButton>Read more</IconButton>
        </div>
      </div>
    </article>
  );
}

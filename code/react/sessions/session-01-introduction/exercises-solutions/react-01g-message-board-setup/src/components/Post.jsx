import './Post.css';

export function Post() {
  return (
    <article className="Post">
      <h2 className="Post-title">My first Posting</h2>
      <div className="Post-content">
        <span className="Post-author">from Sebastian</span>
        <span className="Post-date">
          on <time>2025-05-11</time>
        </span>
        <div className="Post-button">
          <button>Read more</button>
        </div>
      </div>
    </article>
  );
}

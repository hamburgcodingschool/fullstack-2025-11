import { useState } from 'react';

export function BlogEntry() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleIsVisible() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={toggleIsVisible}>
        {isVisible ? 'Read less' : 'Read more'}
      </button>
      <p>Here is some content of the blog entry.</p>
      {isVisible && <p>Here is even more content!</p>}
    </div>
  );
}

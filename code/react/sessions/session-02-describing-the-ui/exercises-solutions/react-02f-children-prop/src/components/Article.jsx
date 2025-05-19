export function Article({ children }) {
  return (
    <article>
      <h2>Content Passed via Children Prop</h2>
      {children}
    </article>
  );
}

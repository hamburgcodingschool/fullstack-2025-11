import './Paragraph.css';

const props = {
  children: 'Hello',
  text: 'example',
};

export function Paragraph({ children }) {
  return (
    <div className="Paragraph">
      <h2>This is the Paragraph</h2>
      {children}
      <p className="Paragraph__box">This is the text: {text}</p>
    </div>
  );
}

export default function Poste({title="No Title", comment="No comment"}) {
  return (
    <div style={{ border: "solid 5px teal", padding: "10px", margin: "10px", }}>
      <h2>{title}</h2>
      <hr />
      <p>{comment}</p>
    </div>
  );
}

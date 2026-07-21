function Card({ title, description }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        margin: "15px 0",
        borderRadius: "8px",
      }}
    >
      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default Card;

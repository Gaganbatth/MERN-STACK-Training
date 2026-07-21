function Home(props) {
  return (
    <div>
      <h2>Home Component</h2>

      <p>Name: {props.name}</p>

      <p>Age: {props.age}</p>
    </div>
  );
}

export default Home;

import { useState } from "react";

function Conditional() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <h2>Conditional Rendering</h2>

      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>

      <h3>{loggedIn ? "Welcome User!" : "Please Login"}</h3>
    </div>
  );
}

export default Conditional;

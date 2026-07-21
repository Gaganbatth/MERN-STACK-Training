import { useState } from "react";

function Toggle() {
  const [status, setStatus] = useState(false);

  return (
    <div>
      <h2>Toggle Example</h2>

      <button onClick={() => setStatus(!status)}>Toggle</button>

      <p>{status ? "Light is ON" : "Light is OFF"}</p>
    </div>
  );
}

export default Toggle;

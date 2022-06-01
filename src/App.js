import React from "react";
import News from "./components/News";

function App() {
  return (
    <div>
      <News posts={[1, 2, 3]} />
    </div>
  );
}

export default App;

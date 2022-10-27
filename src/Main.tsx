import { useState } from "react";

import Background from "./specific/Background";

function Main() {
  document.title = "Des Photos"; // separator: –

  let [bgUrl, setBgUrl] = useState("");

  return (
    <div>
      <h1>Des Photos</h1>

      <Background url={bgUrl} />
    </div>
  );
}

export default Main;

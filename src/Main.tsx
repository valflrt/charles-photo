import { useEffect, useState } from "react";

import Background from "./components/Background";

import photos from "./assets/photos";
import Canvas from "./components/Canvas";

import "./Main.scss";

function Main() {
  document.title = "Des Photos"; // separator: –

  let [photoId, setPhotoId] = useState(0);

  return (
    <div className={"main"}>
      <div className="slideshow">
        <button
          onClick={() => {
            setPhotoId((prev) => (prev !== 0 ? prev - 1 : photos.length - 1));
          }}
          className={"roundedButton"}
        >
          previous
        </button>
        <a href={photos[photoId].url} target={"_blank"}>
          <Canvas photo={photos[photoId]} />
        </a>
        <button
          onClick={() => {
            setPhotoId((prev) => (prev !== photos.length - 1 ? prev + 1 : 0));
          }}
          className={"roundedButton"}
        >
          next
        </button>
      </div>

      <Background url={photos[photoId].reducedUrl} />
    </div>
  );
}

export default Main;

import { PhotoObject } from "../types";

export interface CarouselProps {
  photo: PhotoObject;
}

import "./Canvas.scss";

function Canvas(props: CarouselProps) {
  return (
    <div className={"carousel"}>
      <img
        src={props.photo.url}
        alt={props.photo.description}
        className={"photo"}
      />
    </div>
  );
}

export default Canvas;

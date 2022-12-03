export interface BackgroundProps {
  url: string | null;
}

import "./Background.scss";

function Background(props: BackgroundProps) {
  return (
    <div className={"background"}>
      <img src={props.url ?? ""} className={!props.url ? "hidden" : ""} />
    </div>
  );
}

export default Background;

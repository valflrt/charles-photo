import "./Background.scss";

export interface BackgroundProps {
  url: string;
}

function Background(props: BackgroundProps) {
  return (
    <div className={"background"}>
      <img src={props.url} />
    </div>
  );
}

export default Background;

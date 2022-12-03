import useIsMobile from "./hooks/useIsMobile";
import useIsTactile from "./hooks/useIsTactile";

import Main from "./Main";

import Spinner from "./components/Spinner";

import useResponsive from "./hooks/useReponsive";

import "./Root.scss";

function Root() {
  useResponsive(document.getElementById("root")!);

  return (
    <div className={"root"}>
      <Spinner />

      <Main />

      <div className={"copyright"}>
        <p>© 2021-present Valentin Fleurit</p>
      </div>
    </div>
  );
}

export default Root;

import useIsMobile from "./hooks/useIsMobile";
import useIsTactile from "./hooks/useIsTactile";

import Main from "./Main";

import Spinner from "./specific/Spinner";

import { css } from "./utils";

import "./Root.scss";

function Root() {
  return (
    <div
      className={css.join(
        "root",
        useIsMobile() ? "mobile" : "desktop",
        useIsTactile() ? "tactile" : "notTactile"
      )}
    >
      <Spinner />

      <Main />

      <div className={"copyright"}>
        <p>© 2021-present Valentin Fleurit</p>
      </div>
    </div>
  );
}

export default Root;

import useIsMobile from "./useIsMobile";
import useIsTactile from "./useIsTactile";

let useResponsive = (item: HTMLElement) => {
  let isMobile = useIsMobile();
  let isTactile = useIsTactile();

  if (isMobile) {
    item.classList.add("mobile");
  } else {
    item.classList.remove("mobile");
  }

  if (isTactile) {
    item.classList.add("tactile");
  } else {
    item.classList.remove("tactile");
  }
};

export default useResponsive;

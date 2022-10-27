import { useState } from "react";

let useIsMobile = (url: string) => {
  let [tone, setTone] = useState();

  fetch(url)
    .then((res) => res.blob())
    .then((data) => {});

  return tone;
};

export default useIsMobile;

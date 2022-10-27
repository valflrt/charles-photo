let useSpinner = () => (state: "visible" | "hidden") => {
  if (state === "visible")
    document
      .querySelector("#root > .root > .spinner")
      ?.classList.add("visible");
  else if (state === "hidden")
    document
      .querySelector("#root > .root > .spinner")
      ?.classList.remove("visible");
};

export default useSpinner;

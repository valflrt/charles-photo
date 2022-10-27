import { useState, useEffect } from "react";

export interface LazyProps {
  importPromise: () => Promise<{ default: (props: any) => JSX.Element }>;
  render?: (element: (props: any) => JSX.Element) => JSX.Element;
  loadStart?: () => unknown;
  loadEnd?: () => unknown;
}

/**
 * Similar to React.lazy but if there are hooks included in
 * the component you want to render, it will throw an error.
 */
function Lazy(props: LazyProps) {
  let { importPromise, loadStart, loadEnd, ...elementProps } = props;

  let [Element, setElement] = useState<((props: any) => JSX.Element) | null>(
    null
  );

  useEffect(() => {
    setElement(null);
    if (loadStart) loadStart();
    importPromise().then((i) => {
      if (loadEnd) loadEnd();
      setElement(() => i.default);
    });
  }, [importPromise]);

  return Element ? (
    props.render ? (
      props.render(Element)
    ) : (
      <Element {...elementProps} />
    )
  ) : null;
}

export default Lazy;

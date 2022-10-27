import BaseLink, { BaseLinkProps } from "./BaseLink";

export type CopyLinkProps = Omit<BaseLinkProps, "onClick" | "toDo"> & {
  textToCopy: string;
  notificationTimeout?: number;
};

// Used to create a link that copies some text to clipboard
function CopyLink(props: CopyLinkProps) {
  let { textToCopy, notificationTimeout, ...filteredProps } = props;

  let toDo = () => {
    navigator.clipboard.writeText(props.textToCopy);
  };

  return <BaseLink toDo={toDo} {...filteredProps} />;
}

export default CopyLink;

import * as React from "react";
import "./Button.scss";

type Props = {
  children: React.ReactNode;
  type: "primary" | "secondary" | "tertiary";
  clickHandler(): void;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
};

export default function Button(props: Props) {
  const { children, type, clickHandler, size, disabled } = props;
  return (
    <button
      className={`btn btn-${type} ${size === "large" && "btn-lg"} ${
        size === "medium" && "btn-md"
      } ${size === "small" && "btn-sm"}`}
      onClick={clickHandler}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

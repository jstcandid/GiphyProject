import { MouseEventHandler } from "react";
import styles from "./Button.module.css";
interface IProps {
  properties?: React.CSSProperties;
  className?: string;
  text: string;
  onClick: MouseEventHandler;
}

export function Button({ className, text, properties, onClick }: IProps) {
  return (
    <>
      <button
        style={properties}
        className={`${className}`}
        onClick={onClick}
        type="button"
      >
        {text}
      </button>
    </>
  );
}

import styles from './Button.module.css';

interface IProps {
  text: string;
  width?: string;
  height?: string;
  background?: string;
  border?: string;
  fontSize?: string;
  onClick: () => void;
}

export function Button({
  border,
  background,
  height,
  width,
  text,
  fontSize,
  onClick,
}: IProps) {
  return (
    <div>
      <button
        style={{
          border: border,
          width: width,
          height: height,
          backgroundColor: background,
          fontSize: fontSize,
        }}
        onClick={onClick}
        type='button'
        className={`${styles.button}`}
      >
        {text}
      </button>
    </div>
  );
}

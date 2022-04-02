import styles from './Input.module.css';
import { KeyboardEventHandler } from 'react';

import { ChangeEventHandler } from 'react';

interface IProps {
  properties?: React.CSSProperties;
  className?: string;
  value: string;
  label: string;
  text?: string;
  error?: string;
  type?: string;
  background?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function Input({
  className,
  properties,
  error,
  value,
  text,
  label,
  type,
  background,
  onKeyDown,
  onChange,
}: IProps) {
  return (
    <>
      <p>{text}</p>
      <input
        style={properties}
        className={`${className} ${error ? styles.error : ''}`}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type={type ? type : 'text'}
        placeholder={value}
      />
      {error ? <p className={`${styles.p_error}`}>{error}</p> : null}
    </>
  );
}

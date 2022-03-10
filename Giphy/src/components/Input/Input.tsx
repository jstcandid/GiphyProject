import styles from './Input.module.css';
import { KeyboardEventHandler } from 'react';

import { ChangeEventHandler } from 'react';

interface IProps {
  width?: string;
  height?: string;
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
  width,
  height,
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
    <div className={`${styles.input}`}>
      <p>{text}</p>
      <input
        style={{ width: width, height: height, backgroundColor: background }}
        className={`${styles.input_item} ${error ? styles.error : ''}`}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type={type ? type : 'text'}
        placeholder={value}
      />
      {error ? <p className={`${styles.p_error}`}>{error}</p> : null}
    </div>
  );
}

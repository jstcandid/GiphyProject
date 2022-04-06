import styles_inner from './Input.module.css';
import { KeyboardEventHandler } from 'react';

import { ChangeEventHandler } from 'react';

interface IProps {
  styles?: React.CSSProperties;
  className?: string;
  value: string;
  label: string;
  text?: string;
  error?: string;
  type?: string;
  background?: string;
  placeholder?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function Input({
  className,
  styles,
  error,
  value,
  text,
  label,
  type,
  background,
  placeholder,
  onKeyDown,
  onChange,
}: IProps) {
  return (
    <>
      {text ? <p>{text}</p> : null}
      <input
        style={styles}
        className={` ${error ? styles_inner.error : ''} ${className}`}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type={type ? type : 'text'}
        placeholder={placeholder}
        value={value}
      />
      {error ? <p className={`${styles_inner.p_error}`}>{error}</p> : null}
    </>
  );
}

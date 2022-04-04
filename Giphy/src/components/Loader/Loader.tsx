import styles from './Loader.module.css';
import { KeyboardEventHandler } from 'react';

import { ChangeEventHandler } from 'react';

export function Loader() {
  return (
    <>
      <div className={`${styles.spinner}`}>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

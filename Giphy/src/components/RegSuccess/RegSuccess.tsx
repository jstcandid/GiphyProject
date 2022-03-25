import styles from './RegSuccess.module.css';

export function RegSuccess() {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.success}`}>
          <p className={`${styles.text}`}>Your registration was successfull</p>
        </div>
      </div>
    </>
  );
}

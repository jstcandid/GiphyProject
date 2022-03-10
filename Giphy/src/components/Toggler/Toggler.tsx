import { useContext } from 'react';
// import { Context } from '../../App';
import styles from './Toggler.module.css';

interface IProps {
  onClick: () => void;
}

export const Toggler = ({ onClick }: IProps) => {
  // const { isDark } = useContext(Context);
  return (
    <div onClick={onClick} className={`${styles.btn_container}`}>
      <span
      // className={isDark ? `${styles.inactive}` : `${styles.toggle}`}
      ></span>
    </div>
  );
};

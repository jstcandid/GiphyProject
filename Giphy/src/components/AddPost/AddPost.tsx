import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './AddPost.module.css';
import image from './addPost.png';
import menu from './dotsMenu.svg';

export function AddPost() {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.header}`}>
          <img src={menu} className={`${styles.menu}`} alt='React Logo' />
          <Button
            text='Save'
            onClick={() => {}}
            className={styles.savebutton}
          />
        </div>
        <div className={`${styles.content}`}>
          <img className={`${styles.img}`} src={image} alt='' />
          <div className={`${styles.text_content}`}>
            <div>
              <Input
                value='Add title'
                onChange={() => {}}
                label=''
                className={styles.name}
              />
              <p className={`${styles.hint_text}`}>
                Only 40 first symbols can be seen in the feed
              </p>
            </div>
            <div>
              <div className={`${styles.user}`}>
                <Button
                  text='S'
                  onClick={() => {}}
                  className={styles.user_icon}
                />
                <p className={`${styles.username}`}>someperson</p>
              </div>
              <Input
                value='Add post description'
                onChange={() => {}}
                label=''
                className={styles.description}
              />
              <p className={`${styles.hint_text}`}>
                When people click on your post they usually see only 50 first
                symbols
              </p>
            </div>

            <Input
              className={styles.link}
              value='Add link'
              onChange={() => {}}
              label={''}
            />
          </div>
        </div>
      </div>
    </>
  );
}

import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './AddPost.module.css';
import image from './addPost.png';

export function AddPost() {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.header}`}>
          <svg
            version='1.1'
            id='Capa_1'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='20px'
            height='20px'
            viewBox='0 0 342.382 342.382'
            cursor='pointer'
          >
            <g>
              <g>
                <g>
                  <path
                    d='M45.225,125.972C20.284,125.972,0,146.256,0,171.191c0,24.94,20.284,45.219,45.225,45.219
				c24.926,0,45.219-20.278,45.219-45.219C90.444,146.256,70.151,125.972,45.225,125.972z'
                    fill='gray'
                  />
                </g>
                <g>
                  <path
                    d='M173.409,125.972c-24.938,0-45.225,20.284-45.225,45.219c0,24.94,20.287,45.219,45.225,45.219
				c24.936,0,45.226-20.278,45.226-45.219C218.635,146.256,198.345,125.972,173.409,125.972z'
                    fill='gray'
                  />
                </g>
                <g>
                  <path
                    d='M297.165,125.972c-24.932,0-45.222,20.284-45.222,45.219c0,24.94,20.29,45.219,45.222,45.219
				c24.926,0,45.217-20.278,45.217-45.219C342.382,146.256,322.091,125.972,297.165,125.972z'
                    fill='gray'
                  />
                </g>
              </g>
            </g>
          </svg>
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

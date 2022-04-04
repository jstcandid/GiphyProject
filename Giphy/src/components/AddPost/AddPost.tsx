import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addPost } from '../../redux/actions/postActions';
import { IPost } from '../../redux/reducers/postsReducer';
import { IState } from '../../redux/store';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './AddPost.module.css';
import imageAdd from './addPost.png';
import menu from './dotsMenu.svg';
const { v4: uuidv4 } = require('uuid');

export function AddPost() {
  const [isImage, setIsImage] = useState(true);
  const sizesArray = [29, 36, 46];
  const dispatch = useDispatch();
  const { email } = useSelector((state: IState) => state.authReducer);
  const [image, setImage] = useState(imageAdd);
  const [imageFile, setImageFile] = useState<Blob | null>(null);
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const onChangeTitle = useCallback(
    (event) => {
      setTitle(event.target.value);
    },
    [title]
  );

  const onChangeDesc = useCallback(
    (event) => {
      setDescription(event.target.value);
    },
    [description]
  );
  const onChangeLink = useCallback(
    (event) => {
      setLink(event.target.value);
    },
    [link]
  );

  const onLoad = (event: any) => {
    setIsImage(false);
    setImageFile(event.target.files[0]);

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (event: any) => {
      setImage(event.target.result);
    };
    setIsImage(true);
  };

  const getUsername = (email: string) => {
    return email.substring(0, email.indexOf('@'));
  };

  const addPosts = () => {
    if (imageFile) {
      const randomInt =
        sizesArray[Math.floor(Math.random() * sizesArray.length)];

      const post: IPost = {
        height: randomInt * 10,
        id: uuidv4(),
        showSave: false,
        size: randomInt,
        title: title,
        type: 'gif',
        url: image,
        username: getUsername(email),
        added: true,
      };

      dispatch(addPost(post));

      history.push('/added');
    } else {
      setIsImage(false);
    }
  };
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.header}`}>
          <img src={menu} className={`${styles.menu}`} alt='React Logo' />
          <Button
            text='Save'
            onClick={addPosts}
            className={styles.savebutton}
          />
        </div>
        <div className={`${styles.content}`}>
          <div className={`${styles.img}`}>
            <input
              className={`${styles.input}`}
              type='file'
              accept='image/*'
              onChange={onLoad}
              onClick={() => {}}
            />
            <img
              style={
                isImage
                  ? {}
                  : {
                      border: '3px rgba(241, 46, 46, 0.746) solid',
                      borderRadius: '10px',
                    }
              }
              className={`${styles.img_inner}`}
              src={image}
              alt=''
            />
          </div>

          <div className={`${styles.text_content}`}>
            <div>
              <Input
                value='Add title'
                onChange={onChangeTitle}
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
                  text={email.charAt(0).toUpperCase()}
                  onClick={() => {}}
                  className={styles.user_icon}
                />
                <p className={`${styles.username}`}>{getUsername(email)}</p>
              </div>
              <Input
                value='Add post description'
                onChange={onChangeDesc}
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
              onChange={onChangeLink}
              label={''}
            />
          </div>
        </div>
      </div>
    </>
  );
}

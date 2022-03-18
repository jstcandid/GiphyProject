import './App.css';
import { GiphyList } from './components/GiphyList/GiphyList';
import { Header } from './components/Header/Header';
import { FullPost } from './components/FullPost/FullPost';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { RootRouter } from './navigation/RootRouter';

const themeDark = {
  titleColor: '#E5E5E5',
  textColor: '#FFFFFF',
  dateColor: '#FFFFFF',
  background: '#016efc',
  backgroundButton: '#f8fafe',
  colorButton: '#016efc',
  color: '#fff',
  postBackground: '#0060DC',
  postBorder: '1px solid #f8fafe',
  onChange: '#fff',
};

const themeLight = {
  titleColor: '#4f4f4f',
  textColor: '#979797',
  dateColor: '#016efc',
  background: '#f8fafe',
  backgroundButton: '#016efc',
  colorButton: '#fff',
  color: '#016efc',
  postBackground: '#ffffff',
  postBorder: '1px solid #c6ddff',
  onChange: '#016efc',
};

function App() {
  return (
    <Provider store={store}>
      <div>
        <RootRouter />
      </div>
    </Provider>
  );
}

export default App;

import './App.css';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { RootRouter } from './navigation/RootRouter';

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

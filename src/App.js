import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <MainComponent />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

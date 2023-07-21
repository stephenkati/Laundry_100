import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

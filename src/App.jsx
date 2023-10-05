import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import ProtectedRoutes from './components/ProtectedRoutes';
import Navbar from './components/navigation/Navbar';
import HeroSection from './components/Hero/HeroSection';
import Intro from './components/Intro';
import Services from './components/Services/Services';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="">
            <Navbar />
            <HeroSection />
            <Intro />
            <Services />
          <Routes>
            {/* <Route path="/" element={<Navbar />} /> */}
            {/* <Route
              path="/"
              element={
                <ProtectedRoutes>
                  <Logout />
                </ProtectedRoutes>
              }
            /> */}
            {/* <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

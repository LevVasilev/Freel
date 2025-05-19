import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Jobs from './components/Jobs';
import MyProfile from './components/MyProfile';
import Applications from './components/Applications';
import Users from './components/Users';
import CustomerJobs from './components/CustomerJobs';

function App() {
  const { user, logout } = useAuth();

  console.log('-------------------');
  console.log('User:', user);
  console.log('-------------------');

  return (
    <div className='appContainer'>
      <nav className='navBar'>
        <div className="logo">SelfWork</div>
        <ul className='nav-links'>
          <li><Link to="/">Главная</Link></li>
          {user ? (
            user.role === 'SEEKER' ? (
              <>
                <li><Link to="/jobs">Заказы</Link></li>
                <li><Link to="/profile">Мой аккаунты</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/applications">Отклики</Link></li>
                <li><Link to="/users">Фрилансеры</Link></li>
                <li><Link to="/customerJobs">Редактировать заказы</Link></li>
              </>
            )
          ) : (
            <>
              <li><Link to="/login">Войти</Link></li>
              <li><Link to="/register">Регистрация</Link></li>
            </>
          )}
          {user && (
            <li>
              <a
                href="#logout"
                onClick={(e) => {
                  e.preventDefault(); // Prevent page reload
                  logout();
                }}
                className="nav-link"
              >
                Выйти
              </a>
            </li>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/users" element={<Users />} />
        <Route path="/customerJobs" element={<CustomerJobs />} />
      </Routes>
    </div>
  );
}

export default App;

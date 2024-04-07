import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Setting from './pages/setting';
import Profile from './pages/profile';

const App = () => {
    return (
        <BrowserRouter>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/setting">Setting</Link>
            <Link to="/profile">Profile</Link>
          </div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
    )
}

export default App;

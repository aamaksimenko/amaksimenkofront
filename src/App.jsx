import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Container } from '@mui/material';

import Header from './components/Header/Header';
import UserPage from './pages/UserPage/UserPage';
import MainPage from './pages/MainPage/MainPage';
import EditProfilePage from './pages/EditProfilePage/EditProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/user_page" element={<UserPage />} />
          <Route path="/edit_profile" element={<EditProfilePage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

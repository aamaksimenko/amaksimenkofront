import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Container } from '@mui/material';

import MainPage from './pages/MainPage';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

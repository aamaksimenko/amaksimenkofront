import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';

import MainPage from './pages/MainPage';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Container>

    </div>
  );
}

export default App;

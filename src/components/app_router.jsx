import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import HomeAlumno from '../pages/home_alumno';
import HomeProfesor from '../pages/home_profesor';
import InternalPage from '../pages/internal';
import InternalProfesor from '../pages/internal_p';
import PracticesList from '../pages/list';
import HomePage from '../pages/home';

InternalProfesor
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/internal" element={<InternalPage />} />
        <Route path="/list" element={<PracticesList />} />
        <Route path="/profesor" element={<HomeProfesor />} />
        <Route path="/alumno" element={<HomeAlumno />} />
        <Route path="/internal_profesor" element={<InternalProfesor />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
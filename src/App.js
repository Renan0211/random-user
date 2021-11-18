/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './app.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

const App = function () {
  return (
    <div className="w-100">
      <div className="bg-primary p-5 rounded-lg m-auto w-100 text-white">
        <h1 className="text-center"> Random User</h1>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import {
  AuthProvider,
  Home,
  Layout,
  LoginPage,
  PublicPage,
  ProtectedPage,
} from './components'

function App() {
  return (
      <div className="App">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<Layout />}>
              <Route path="public" element={<PublicPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="protected" element={<ProtectedPage />} />
            </Route>
          </Routes>
        </AuthProvider>
      </div>
  );
}

export default App;

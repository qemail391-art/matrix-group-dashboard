import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

// مكون لحماية المسارات (Guarded Route) للتأكد من تسجيل الدخول
function GuardedRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* الشاشة الافتراضية: تسجيل الدخول */}
        <Route path="/" element={<Login />} />
        
        {/* شاشة إنشاء حساب */}
        <Route path="/register" element={<Register />} />
        
        {/* لوحة التحكم المحمية بواسطة GuardedRoute */}
        <Route 
          path="/dashboard" 
          element={
            <GuardedRoute>
              <Dashboard />
            </GuardedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}
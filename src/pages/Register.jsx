import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    // التحقق من إدخال جميع البيانات
    if (name && email && password) {
      // حفظ التوكن للانتقال مباشرة للوحة التحكم بعد التسجيل
      localStorage.setItem('token', 'matrix_secure_token_123');
      navigate('/dashboard');
    } else {
      setError('الرجاء تعبئة جميع الحقول المطلوب');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>إنشاء حساب جديد - Matrix Group</h2>
        {error && <p style={styles.error}>{error}</p>}
        
        <form onSubmit={handleRegister} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>الاسم الكامل</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              placeholder="عبدالله محمد"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>البريد الإلكتروني</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="name@matrix.com"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>كلمة المرور</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="********"
            />
          </div>

          <button type="submit" style={styles.button}>تسجيل الحساب</button>
        </form>

        <p style={styles.text}>
          لديك حساب بالفعل؟ <Link to="/" style={styles.link}>تسجيل الدخول</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f3f4f6',
    direction: 'rtl',
  },
  card: {
    background: '#ffffff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  title: {
    marginBottom: '20px',
    color: '#1f2937',
    textAlign: 'center',
    fontSize: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#4b5563',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #d1d5db',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#10b981',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  text: {
    marginTop: '15px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#6b7280',
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none',
  },
  error: {
    color: '#dc2626',
    marginBottom: '10px',
    fontSize: '14px',
    textAlign: 'center',
  }
};
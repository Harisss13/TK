// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Cek status login di local storage saat aplikasi dimuat
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus) {
      setLoggedIn(JSON.parse(storedLoginStatus));
    }
  }, []);

  const login = () => {
    setLoggedIn(true);
    // Simpan status login di local storage
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
  };

  const logout = () => {
    setLoggedIn(false);
    // Hapus status login dari local storage
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

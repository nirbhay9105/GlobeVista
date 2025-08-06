import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';

// ✅ Import AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css';

const RootApp = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true, // run animation only once
    });
  }, []);

  return (
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootApp />);


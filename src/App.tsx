import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import routes from './routes';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
  <div>
    <head>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </head>
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        className: '',
        style: {
          background: '#ffffff',
          color: '#333333',
        },
      }}
    />
  </div>
  );
};

export default App;
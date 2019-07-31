import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="text-center h-screen flex items-center">
      <header className="bg-purple-600 sm:bg-blue-500 md:bg-teal-500 lg:bg-indigo-800 m-12 p-12 rounded-lg shadow-xl w-full">
        <img src={logo} className="app-logo" alt="logo" />
        <p className="text-white text-base mb-2">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-indigo-300 hover:text-white mr-6"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="text-indigo-300 hover:text-white lr-6"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TailwindCSS
        </a>
      </header>
    </div>
  );
}

export default App;

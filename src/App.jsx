import React from 'react';
import Book from './components/Book';
import './App.css';
import { AnswersProvider } from './context/AnswersContext';

function App() {
  return (
    <div className="container">
        <AnswersProvider>
          <Book />
        </AnswersProvider>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="AppContainer">
        <Header />
        <main className="Main">
          <Routes>
            <Route exact path="/" element={<TodoList />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

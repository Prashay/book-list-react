import './App.css';
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from 'react-router-dom';
import AddTutorial from './components/addtutorials';
import Tutorial from './components/tutorials';
import TutorialsList from './components/tutorialslist';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand px-4">
            React BookApp
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add New Tutorial
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/tutorials" element={<TutorialsList/>} />
            <Route path="/add" element={<AddTutorial/>} />
            <Route path="/" element={<Tutorial />}/>
            <Route path="/tutorials/:id" element={<Tutorial/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

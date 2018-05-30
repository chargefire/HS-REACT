import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import './assets/styles/style.css';
import './assets/styles/main.css';
import NavBar from './components/NavBar/NavBar';

ReactDOM.render(<NavBar />, document.getElementById('navbar'));
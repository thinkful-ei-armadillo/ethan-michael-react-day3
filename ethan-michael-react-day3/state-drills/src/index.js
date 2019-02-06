import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hello from './helloworld';
import Bomb from './bomb';
import RouletteGun from './roulettegun';
import './index.css';

ReactDOM.render(<Hello />, document.getElementById('root'));
ReactDOM.render(<Bomb />, document.getElementById('root2'));
ReactDOM.render(<RouletteGun />, document.getElementById('root3'));
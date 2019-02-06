import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hello from './helloworld';
import Bomb from './bomb';
import RouletteGun from './roulettegun';
import Accordion from './Accordion';
import './index.css';

ReactDOM.render(<Hello />, document.getElementById('root'));
ReactDOM.render(<Bomb />, document.getElementById('root2'));
ReactDOM.render(<RouletteGun />, document.getElementById('root3'));



const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

ReactDOM.render(<Accordion sections={sections} />, document.getElementById('root4'));

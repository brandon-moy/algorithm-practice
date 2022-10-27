import React from 'react';
import ReactDOM from 'react-dom/client';
import Cards from './cards';

const cards = [
  { number: 0, name: 'Markus', background: 'images/logo.png' },
  { number: 1, name: 'Jiheng', background: 'images/logo.png' },
  { number: 2, name: 'Brandon', background: 'images/logo.png' },
  { number: 3, name: 'Eugene', background: 'images/logo.png' },
  { number: 4, name: 'Anthony', background: 'images/logo.png' },
  { number: 5, name: 'Daisy', background: 'images/logo.png' },
  { number: 6, name: 'Derrick', background: 'images/logo.png' },
  { number: 7, name: 'Jake', background: 'images/logo.png' },
  { number: 8, name: 'Jianni', background: 'images/logo.png' },
  { number: 9, name: 'Quan', background: 'images/logo.png' },
  { number: 10, name: 'Matt', background: 'images/logo.png' },
  { number: 11, name: 'Ashley', background: 'images/logo.png' }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Cards cards={cards} />);

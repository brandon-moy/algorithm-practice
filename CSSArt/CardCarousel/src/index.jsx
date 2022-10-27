import React from 'react';
import ReactDOM from 'react-dom/client';
import Cards from './cards';

const cards = [
  { number: 0, background: 'images/logo.png' },
  { number: 1, background: 'images/logo.png' },
  { number: 2, background: 'images/logo.png' },
  { number: 3, background: 'images/logo.png' },
  { number: 4, background: 'images/logo.png' },
  { number: 5, background: 'images/logo.png' },
  { number: 6, background: 'images/logo.png' },
  { number: 7, background: 'images/logo.png' },
  { number: 8, background: 'images/logo.png' },
  { number: 9, background: 'images/logo.png' },
  { number: 10, background: 'images/logo.png' },
  { number: 11, background: 'images/logo.png' }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Cards cards={cards} />);

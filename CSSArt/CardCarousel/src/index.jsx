import React from 'react';
import ReactDOM from 'react-dom/client';
import Cards from './cards';

const cards = [
  {
    number: 0,
    name: 'Markus',
    front: 'images/markus.png',
    linked: 'https://www.linkedin.com/in/markusdoan-le/'
  },
  {
    number: 1,
    name: 'Jiheng',
    front: 'images/jiheng.png',
    linked: 'https://www.linkedin.com/in/jiheng-nie/'
  },
  {
    number: 2,
    name: 'Brandon',
    front: 'images/brandon.png',
    linked: 'https://www.linkedin.com/in/brandon-k-moy/'
  },
  {
    number: 3,
    name: 'Eugene',
    front: 'images/eugene.png',
    linked: 'https://www.linkedin.com/in/eugenepark215/'
  },
  {
    number: 4,
    name: 'Anthony',
    front: 'images/anthony.png',
    linked: 'https://www.linkedin.com/in/anthonyisaiahurbina/'
  },
  {
    number: 5,
    name: 'Daisy',
    front: 'images/daisy.png',
    linked: 'https://www.linkedin.com/in/daisy-yoo/'
  },
  {
    number: 6,
    name: 'Derrick',
    front: 'images/derrick.png',
    linked: 'https://www.linkedin.com/in/derrick-fleming/'
  },
  {
    number: 7,
    name: 'Jake',
    front: 'images/jake.png',
    linked: 'https://www.linkedin.com/in/jacob-husband/'
  },
  {
    number: 8,
    name: 'Jianni',
    front: 'images/jianni.png',
    linked: 'https://www.linkedin.com/in/jiannicariaga/'
  },
  {
    number: 9,
    name: 'Quan',
    front: 'images/quan.png',
    linked: 'https://www.linkedin.com/in/quannampham/'
  },
  {
    number: 10,
    name: 'Matt',
    front: 'images/matt.png',
    linked: 'https://www.linkedin.com/in/matthew-kweon/'
  },
  {
    number: 11,
    name: 'Ashley',
    front: 'images/ashley.png',
    linked: 'https://www.linkedin.com/in/ashleylho/'
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Cards cards={cards} />);

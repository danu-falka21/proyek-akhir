import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Todo, Contact, About } from './views';
import ReactDOM from 'react-dom';

// testing untuk component yang ada di dalam project
// mulai dari komponen todo, contact, dan about
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
it('Todo renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todo />, div);
});
it('Contact renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contact />, div);
});
it('About renders without crashing', () => {
  const div = document.createElement('div');
ReactDOM.render(<About />, div);
});
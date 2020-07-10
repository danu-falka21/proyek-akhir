import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// Aplikasi todo list yang menggunakan cra dan redux beserta list yang dapat ditandai
// dan dihapus. ada juga contact form untuk memberikan saran menggunakan controlled form,
// aplikasi ini menggunakan router untuk pindah component dan juga terdapat testing 
// di app.test.js, untuk styling terdapat css, aplikasi ini juga menerapkan composing,
// extracting dan lifting state up. 


ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

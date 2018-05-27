import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';

const store =  createStore(
  combineReducers({
    students: () => [
      { id: 1, name:'Aarash', program:'CSIT' },
      { id: 2, name:'Aditi',program:'CSIT' },
      { id: 3, name:'Bishal', program:'Computer Science' }
    ],
    selected: (nil ,action) => {
      if(action.type === 'SELECT_STU'){
        return action.payload
      }
      
      else{
        return {}
      }
    }
  })
);



ReactDOM.render(
  <Provider store = {store}>
 <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();

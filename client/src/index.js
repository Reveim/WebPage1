import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StatsStorage from './storage/StatsStorage';
import UserStore from './storage/UserStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext(null)
//console.log(process.env.REACT_APP_API_URL)

root.render(
      <Context.Provider value={{
            user: new UserStore(),
            stats: new StatsStorage(),
      }}>
            <App />
      </Context.Provider>



);


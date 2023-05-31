import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GetHeroesCount } from './utils/data'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

import Card from './components/Card';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <App /> */}
    <div class="container">
      <div class="row mt-4" >
      {Array.from({length: 3}, (_, index) => (
        <div class="col-3 ">
          <Card 
            name="Зимние ботинки"
            universe="99"
            alterego="Такие только у нас"
            friends="https://shop/winter_boots.jpg"
            superpowers="https://shop/winter_boots.jpg"
            url="https://shop/winter_boots.jpg"
            info="https://shop/winter_boots.jpg"
            imgLink="https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
          />
        </div>
  ))}
       
        
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

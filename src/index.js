import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GetHeroesCount } from './utils/dataHeroes.js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import heroes from './data/heroes.json';

import Card from './components/Card';

function MainComponent() {

  const heroesCount = GetHeroesCount();

  return (
    <React.StrictMode>
      <div className="container">
        <div className="row mt-4">
          {Array.from({ length: heroesCount }, (_, index) => (
            <div className="col-3  mb-4" key={index}>
              <Card
                name={heroes[index].name}
                universe={heroes[index].universe}
                alterego={heroes[index].alterego}
                friends={heroes[index].friends}
                superpowers={heroes[index].superpowers}
                url={heroes[index].url}
              />
            </div>
          ))}
        </div>
      </div>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainComponent />);
function SetHeroScore(heroName) {
  
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

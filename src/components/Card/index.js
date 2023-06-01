import './index.css';
import { GetHeroesCount, IsHeroScoreRated } from '../../utils/dataHeroes.js';


function Card(props) {

    const stars = [];


    // if (!IsHeroScoreRated()) {
    //     localStorage.setItem(props.name, 0);
    // }

    for (let i = 1; i <= 5; i++) {
        if (localStorage.getItem(props.name) >= i ) {
            stars.push(
            <span class="fa fa-star star-checked star-card col-2" data-score={props.name + '*Star*' + i} onClick={handleClick}></span>
            );
        }
        else{

            stars.push(
                <span class="fa fa-star  star-card col-2" data-score={props.name + '*Star*' + i} onClick={handleClick}></span>
            );

        }
        console.log(localStorage.getItem(props.name))

       
    }

    return (
        <div class="card " >
            <img class="card-img-top" src={props.url} alt={props.name} />
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.universe}</p>
                <p class="card-text">{props.alterego}</p>
                <p class="card-text">{props.friends}</p>
                <p class="card-text">{props.superpowers}</p>
                <p class="card-text">{props.info}</p>

                <div className="container">
                    <div className="row ">
                        {stars}
                    </div>
                </div>

            </div>
        </div>
    );

    function getFirstWord(str) {
        const words = str.split('*');
        return words[0];
    }

    function getLastWord(str) {
        const words = str.split('*');
        return words[words.length - 1];
      }

    function handleClick(event) {


        event.target.classList.add('star-checked');

        const heroScore = event.target.dataset.score;

        const score = getLastWord(heroScore);
        
        const hero = getFirstWord(heroScore);

        localStorage.setItem(hero, score);

        const elements = document.querySelectorAll(`[data-score^="${hero}-"]`);


    }
}




export default Card;


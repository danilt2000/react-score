import data from '../data/heroes.json';


export function GetHeroesCount() {

    return data.length;
}

export function IsHeroScoreRated(hero) {

    if (localStorage.getItem(hero) === null) {
        return false;
    }
    
    return true;
}


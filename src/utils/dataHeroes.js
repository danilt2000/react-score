



export async function GetHeroesCount() {
    const response = await fetch('../data/heroes.json');


    const json = await response.json();


    return json.length;
}


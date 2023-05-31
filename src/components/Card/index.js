import './index.css';


function Card(props) {
    return (
        <div class="card " >
            <img class="card-img-top" src={props.imgLink} alt={props.name} />
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.universe}</p>
                <p class="card-text">{props.alterego}</p>
                <p class="card-text">{props.friends}</p>
                <p class="card-text">{props.superpowers}</p>
                <p class="card-text">{props.url}</p>
                <p class="card-text">{props.info}</p>
            </div>
        </div>
    );
}
export default Card;

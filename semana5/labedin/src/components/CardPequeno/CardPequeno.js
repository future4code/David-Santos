import React from 'react';
import './CardPequeno.css'

function CardPequeno(props){
    return(
        <div className="card-Pequeno">
            <div>
                <img src={ props.imagem } />
                <p>{ props.email }</p>
            </div>
            <div>
                <img src={ props.imagem } />
                <p>{ props.endereco }</p>
            </div>
        </div>
    )
}

export default CardPequeno



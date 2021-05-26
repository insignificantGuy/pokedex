import React from 'react'
import './card-list.style.css'
import { Card } from '../Card/card.component.jsx';

export const CardList = (props) =>(
	<div className="cardlist">
	{
		props.pokemon.map(pokemon=> (
              <Card key={pokemon.id} pokemon={pokemon}/> 
          ))
	}
	</div>
);
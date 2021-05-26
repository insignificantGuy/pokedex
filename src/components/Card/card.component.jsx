import React from 'react'
import './card.style.css';

export const Card = (props) =>(
	<div className="card">
		<img alt={`${props.pokemon.name}`} src={`https://img.pokemondb.net/artwork/${props.pokemon.name.toLowerCase()}.jpg`}/>
		<h2>{props.pokemon.name}</h2>
	</div>
);
import React from 'react';
import "./searchBox.style.css";

export const SearchBox = ({placeholder, onchangeMethod}) =>(
	<input
		className='search'
		type="search"
		placeholder={placeholder}
		onChange={onchangeMethod}
	/>
)
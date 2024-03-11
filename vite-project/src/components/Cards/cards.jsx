import React, { useState, useEffect } from 'react';
import './cards.css';

function PokemonCards() {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        fetch('https://api.pokemontcg.io/v1/cards')
            .then(response => response.json())
            .then(data => {
                setPokemonData(data.cards);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Pokémon Cards</h2>
            <div className="pokemon-cards">
                {pokemonData.map((pokemon, index) => (
                    <div key={index} className="pokemon">
                        <img src={pokemon.imageUrl} alt={`Pokemon ${index + 1}`} />
                        <p>{pokemon.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PokemonCards;

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.pokemontcg.io/v1/cards')
        .then(response => response.json())
        .then(data => {
            const cardsContainer = document.getElementById('cards');
            data.cards.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');
                cardElement.innerHTML = `
                    <h3>${card.name}</h3>
                    <img src="${card.imageUrl}" alt="${card.name}">
                `;
                cardsContainer.appendChild(cardElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

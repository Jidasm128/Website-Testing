document.addEventListener('DOMContentLoaded', function () {
    fetchBeerData(); // Fetch beer data when the page loads
});

function fetchBeerData() {
    // You would typically fetch data from an API here
    // For this example, we'll just hardcode some beer data

    const beers = [
        { name: 'Beer 1', style: 'Style 1', abv: '5%' },
        { name: 'Beer 2', style: 'Style 2', abv: '6%' },
        { name: 'Beer 3', style: 'Style 3', abv: '4.5%' },
        // Add more beer objects as needed
    ];

    // Populate the beer list
    const beerList = document.getElementById('beer-list');
    beers.forEach(beer => {
        const beerItem = document.createElement('div');
        beerItem.classList.add('beer-item');
        beerItem.innerHTML = `
            <h3>${beer.name}</h3>
            <p><strong>Style:</strong> ${beer.style}</p>
            <p><strong>ABV:</strong> ${beer.abv}</p>
        `;
        beerList.appendChild(beerItem);
    });
}
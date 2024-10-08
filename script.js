document.getElementById('search-button').addEventListener('click', function() {
    const location = document.getElementById('search-input').value;
    const apiKey = 'edd892fa5ac640ffb5e101714231311';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('Location not found');
                return;
            }
            document.getElementById('latitude').textContent = `Latitude: ${data.location.lat}`;
            document.getElementById('longitude').textContent = `Longitude: ${data.location.lon}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('An error occurred while fetching data');
        });
});

// Function to create a cattle name element
function createCattleNameElement(name) {
    const cattleName = document.createElement('div');
    cattleName.className = 'cattle-name'; // Add a CSS class for styling
    cattleName.textContent = name;
    return cattleName;
}

// Function to display cattle image when a name is clicked
function displayCattleImage(imageSrc) {
    const cattleDetailsContainer = document.getElementById('cattle-details');
    cattleDetailsContainer.innerHTML = `<img src="${imageSrc}" alt="Cattle Image" />`;
}

// Function to fetch and display cattle names
function fetchAndDisplayCattleNames() {
    fetch('db.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const cattleList = document.getElementById('cattle-list');
            const cattleData = data.Cattles;

            cattleData.forEach(cattle => {
                const cattleName = createCattleNameElement(cattle.name);
                cattleName.addEventListener('click', () => {
                    // Display cattle image when the name is clicked
                    displayCattleImage(cattle.image);
                });
                cattleList.appendChild(cattleName);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Call the fetchAndDisplayCattleNames function to load and display the cattle names
fetchAndDisplayCattleNames();



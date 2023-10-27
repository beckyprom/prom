function filterCattle(searchText) {
    searchText = searchText.toLowerCase();
    return cattleData.filter(cattle => {
        return (
            cattle.name.toLowerCase().includes(searchText) ||
            cattle.Description.toLowerCase().includes(searchText) ||
            cattle.Origin.toLowerCase().includes(searchText)
        );
    });
}

// Function to update the displayed cattle list
function updateCattleList(searchText) {
    const cattleList = document.getElementById('cattle-list');
    const cattleDetails = document.getElementById('cattle-details');

    const filteredCattle = filterCattle(searchText);

    cattleList.innerHTML = '';

    filteredCattle.forEach(cattle => {
        const cattleName = createCattleNameElement(cattle);
        const detailsButton = createDetailsButton(cattle);

        cattleList.appendChild(cattleName);
        cattleList.appendChild(detailsButton);
    });
}

// Function to create a cattle name element
function createCattleNameElement(cattle) {
    const name = cattle.name;
    const imageSrc = cattle.image;
    const details = {
        Origin: cattle.Origin,
        Description: cattle.Description,
        Mass: cattle.Mass
    };

    const cattleName = document.createElement('div');
    cattleName.className = 'cattle-name'; // Add a CSS class for styling
    cattleName.textContent = name;
    cattleName.addEventListener('click', () => {
        displayCattleDetailsAndImage(name, imageSrc, details);
    });
    return cattleName;
}

// Function to create a "Details" button
function createDetailsButton(cattle) {
    const detailsButton = document.createElement('button');
    detailsButton.textContent = 'Details';
    detailsButton.addEventListener('click', () => {
        displayCattleDetails(cattle);
    });
    return detailsButton;
}

// Function to display cattle image when a name is clicked
function displayCattleImage(imageSrc) {
    const cattleDetailsContainer = document.getElementById('cattle-details');
    cattleDetailsContainer.innerHTML = `<img src="${imageSrc}" alt="Cattle Image" />`;
}

// Function to display cattle details
function displayCattleDetails(cattle) {
    const cattleDetailsContainer = document.getElementById('cattle-details');
    cattleDetailsContainer.innerHTML = `
        <p><strong>Origin:</strong> ${cattle.Origin}</p>
        <p><strong>Description:</strong> ${cattle.Description}</p>
        <p><strong>Mass:</strong> ${cattle.Mass}</p>
    `;
}


// Function to create a cattle name element
function createCattleNameElement(cattle) {
    const name = cattle.name;
    const imageSrc = cattle.image;
    const details = {
        Origin: cattle.Origin,
        Description: cattle.Description,
        Mass: cattle.Mass
    };

    const cattleName = document.createElement('div');
    cattleName.className = 'cattle-name'; // Add a CSS class for styling
    cattleName.textContent = name;
    cattleName.addEventListener('click', () => {
        displayCattleDetailsAndImage(name, imageSrc, details);
        displaySmallCattleImage(imageSrc); // Display small image when the name is clicked
    });
    return cattleName;
}

// Function to display cattle image and details when a name is clicked
function displayCattleDetailsAndImage(name, imageSrc, details) {
    const cattleDetailsContainer = document.getElementById('cattle-details');
    cattleDetailsContainer.innerHTML = `
        <h2>${name}</h2>
        <img src="${imageSrc}" alt="Cattle Image" />
        <p><strong>Origin:</strong> ${details.Origin}</p>
        <p><strong>Description:</strong> ${details.Description}</p>
        <p><strong>Mass:</strong> ${details.Mass}</p>
    `;
}

// Add event listeners for the search input and button
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value;
        updateCattleList(searchText);
    });

    searchButton.addEventListener('click', () => {
        const searchText = searchInput.value;
        ReternCattleList(searchText);
    });

    // Call the fetchAndDisplayCattleNames function to load and display the cattle names
    fetchAndDisplayCattleNames();
});

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
            cattleData = data.Cattles;
            // Display all cattle initially
            updateCattleList('');
        })
        .catch(error => {
            console.error('Error:', error);
        });dairyInfoButton.addEventListener('click', () => {
            const dairyInformation = document.getElementById('dairy-information');
            dairyInformation.innerHTML = '<a href="https://youtu.be/q-EYh4pc9X4" target="_blank">Dairy Information Link</a>';
        });
       // Event listener for the Home Page button
const homePageButton = document.getElementById('home-page-button');
homePageButton.addEventListener('click', () => {
    // Clear cattle image and details
    const cattleDetailsContainer = document.getElementById('cattle-details');
    cattleDetailsContainer.innerHTML = '';

    const cattleImageContainer = document.getElementById('cattle-image');
    cattleImageContainer.innerHTML = '';

    // Clear dairy information
    const dairyInformation = document.getElementById('dairy-information');
    dairyInformation.innerHTML = '';
}); 

}
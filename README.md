# phase1-projectoverview of a web application designed to search and display information about cattle. The app allows users to filter cattle based on search criteria, view cattle details, and access additional dairy-related information.

## Introduction
This web application is designed to provide information about cattle. Users can search for cattle based on their name, origin, or description. When a cattle's name is clicked, detailed information about the cattle is displayed, including its name, image, origin, description, and mass. Additionally, the app allows users to access dairy-related information via a link.

## Usage
Open the web application in a web browser.
Enter search criteria (e.g., cattle name, origin, or description) in the search input field.
The list of cattle matching the search criteria will be displayed on the left-hand side.
Click on a cattle name to view detailed information and an image on the right-hand side.
Click the "Details" button to view cattle details.
Click the "Dairy Information" button to access dairy-related information.
## Functions
filterCattle
The filterCattle(searchText) function filters the cattle data based on the provided search text, which can be a name, origin, or description. It returns an array of cattle that match the search criteria.

## updateCattleList
The updateCattleList(searchText) function updates the displayed cattle list based on the provided search text. It clears the existing cattle list and appends filtered cattle to the list.

## createCattleNameElement
The createCattleNameElement(cattle) function creates a clickable element for a cattle's name. When clicked, it displays detailed information about the cattle, including its image.

## createDetailsButton
The createDetailsButton(cattle) function creates a button labeled "Details" for a specific cattle. When clicked, it displays detailed information about the cattle, including its origin, description, and mass.

## displayCattleImage
The displayCattleImage(imageSrc) function displays the image of a cattle when a cattle's name is clicked.

## displayCattleDetails
The displayCattleDetails(cattle) function displays detailed information about a cattle, including its origin, description, and mass.

## displayCattleDetailsAndImage
The displayCattleDetailsAndImage(name, imageSrc, details) function displays detailed information about a cattle, including its name, image, origin, description, and mass. It is called when a cattle's name is clicked.

## fetchAndDisplayCattleNames
The fetchAndDisplayCattleNames() function fetches cattle data from a JSON file and initializes the app by displaying all cattle initially. It also handles error cases if data retrieval fails.

## Event Listeners
The app listens for user input in the search input field and updates the cattle list accordingly.
The "Search" button triggers a cattle list update based on the entered search criteria.
The "Dairy Information" button provides a link to dairy-related information.
The "Home Page" button clears the cattle image and details, as well as any dairy information.
Additional Features
Dairy Information: Users can access dairy-related information by clicking the "Dairy Information" button.
Home Page: The "Home Page" button clears the displayed cattle information and any dairy information, returning the app to its initial state.
This web application allows users to search for cattle information and learn more about them. It also provides a link to dairy-related information for users interested in the dairy industry.

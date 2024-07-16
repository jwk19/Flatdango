# FlatDango - Flatiron Movie Theatre

FlatDango is a web application for Flatiron Movie Theatre that allows users to view movie details and purchase tickets. This project uses a JSON server to fetch movie data and dynamically update the webpage.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Images](#images)

## Introduction

FlatDango is an interactive application that displays a list of movies from Flatiron Movie Theatre. Users can view detailed information about each movie and purchase tickets directly from the application.

## Features

- Display the first movie's details, including its poster, title, runtime, showtime, and available tickets when the page loads.
- Show a menu of all movies on the left side of the page.
- Allow users to buy tickets, with the number of available tickets decreasing on the frontend. Prevent ticket purchase if the showing is sold out.

## Technologies Used

- HTML
- CSS
- JavaScript
- JSON Server

## Setup Instructions

1. **Clone the repository**:

    ```sh
    git clone git@github.com:jwk19/week-3-code-challenge.git
    cd week-3-code-challenge
    ```

2. **Install JSON Server**:

    ```sh
    npm install -g json-server
    ```

3. **Create a `db.json` file** in the root directory with the following content:

    ```json
    {
     "films": [
       {
         "id": "1",
         "title": "The Giant Gila Monster",
         "runtime": "108",
         "capacity": 30,
         "showtime": "04:00PM",
         "tickets_sold": 27,
         "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
       },
       //... add the rest of the movie data here
     ]
    }
    ```

4. **Start the JSON Server**:

    ```sh

    json-server --watch db.json
    ```

5. **Open `index.html`** in your web browser to view the application.

## Usage

1. On page load, the first movie's details will be displayed, and a list of all movies will appear on the left side.
   ![Initial Load Screen](/images/initial-load-screen-flatdango.png)

2. Click on any movie in the list to view its details.
   ![Movie Details](/images/movie-details.png)

3. Click the "Buy Ticket" button to purchase a ticket. The available tickets count will decrease.
   ![Buy Ticket](/images/buy-ticket-button.png)

## Project Structure

- `index.html`: The main HTML file for the project.
- `styles.css`: The CSS file for styling the project.
- `script.js`: The JavaScript file containing the logic for fetching data, displaying movie details, and handling ticket purchases.
- `db.json`: The JSON file used by JSON Server to provide movie data.

## Images

Include relevant images to enhance the documentation. Replace the placeholders with actual paths to the images.

1. **Initial Load Screen**: Screenshot of the application when it first loads.
   ![Initial Load Screen](/images/initial-load-screen-flatdango.png)

2. **Movie Details**: Screenshot showing the details of a selected movie.
   ![Movie Details](/images/movie-details.png)

3. **Buy Ticket**: Screenshot showing the process of buying a ticket.
   ![Buy Ticket](/images/buy-ticket-button.png)

## License

This project is licensed under the MIT License.

document.addEventListener("DOMContentLoaded", () => {
    const BASE_URL = "http://localhost:3000/films";
    const filmsList = document.getElementById("films");
    const poster = document.getElementById("poster");
    const title = document.getElementById("title");
    const runtime = document.getElementById("runtime");
    const showtime = document.getElementById("showtime");
    const capacity = document.getElementById("capacity");
    const description = document.getElementById("description");
    const availableTickets = document.getElementById("available-tickets");
    const buyTicketButton = document.getElementById("buyTicket");

    fetch(BASE_URL)
        .then(response => response.json())
        .then(films => {
            populateFilmList(films);
            displayFilmDetails(films[0]);
        });

    function populateFilmList(films) {
        filmsList.innerHTML = "";
        films.forEach(film => {
            const li = document.createElement("li");
            li.className = "film-item";
            li.textContent = film.title;
            li.addEventListener("click", () => displayFilmDetails(film));
            filmsList.appendChild(li);
        });
    }

    function displayFilmDetails(film) {
        poster.src = film.poster;
        title.textContent = `Title: ${film.title}`;
        runtime.textContent = `Runtime: ${film.runtime} minutes`;
        showtime.textContent = `Showtime: ${film.showtime}`;
        capacity.textContent = `Capacity: ${film.capacity}`;
        description.textContent = `Description: ${film.description}`;
        availableTickets.textContent = `Available Tickets: ${film.capacity - film.tickets_sold}`;
        
        buyTicketButton.onclick = () => {
            if (film.tickets_sold < film.capacity) {
                film.tickets_sold += 1;
                availableTickets.textContent = `Available Tickets: ${film.capacity - film.tickets_sold}`;
            } else {
                alert("This showing is sold out.");
            }
        };
    }
});

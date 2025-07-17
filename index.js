function search() {
    const movieName = document.getElementById("input").value.trim();
    const message = document.getElementById("message");
    const movieCard = document.getElementById("movie-card");

    if (!movieName) {
        message.textContent = "Please enter a movie name.";
        movieCard.style.display = "none";
        return;
    }

    const url = "https://www.omdbapi.com/?apikey=5be20f0a&t=" + encodeURIComponent(movieName);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.Response === "False") {
                message.textContent = "Movie not found!";
                movieCard.style.display = "none";
                return;
            }

            message.textContent = "";
            movieCard.style.display = "block";
            document.getElementById("poster").src = data.Poster;
            document.getElementById("title").textContent = data.Title;
            document.getElementById("year").textContent = "Year: " + data.Year;
            document.getElementById("genre").textContent = "Genre: " + data.Genre;
            document.getElementById("plot").textContent = data.Plot;
            document.getElementById("director").textContent = "Director: " + data.Director;
        })
        .catch(error => {
            console.error(error);
            message.textContent = "Error fetching data. Please try again.";
            movieCard.style.display = "none";
        });
}
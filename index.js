function search() {
    console.log("search");

    let inputTag = document.getElementById("input");
    let movieName = inputTag.value.trim();

    if (!movieName) {
        alert("Please enter a movie name.");
        return;
    }

    let httpRequest = new XMLHttpRequest();
    let url = "https://www.omdbapi.com/?apikey=5be20f0a&t=" + encodeURIComponent(movieName);

    httpRequest.open("GET", url);
    httpRequest.responseType = "json";
    httpRequest.send();

    httpRequest.onload = () => {
        let response = httpRequest.response;
        console.log(response);

        if (response.Response === "False") {
            alert("Movie not found!");
            return;
        }

        document.getElementById("poster").src = response.Poster;
        document.getElementById("poster").style.display = response.Poster !== "N/A" ? "block" : "none";

        document.getElementById("title").innerHTML = response.Title;
        document.getElementById("plot").innerHTML = response.Plot;
        document.getElementById("year").innerHTML = `Year: ${response.Year}`;
        document.getElementById("genre").innerHTML = `Genre: ${response.Genre}`;
        document.getElementById("director").innerHTML = `Director: ${response.Director}`;
    };
}
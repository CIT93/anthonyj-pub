// I wrote your code down too because my code was so different I wanted to walk through your code with you as you wrote it. I didn't want to commit over my existing code as it still needs to be reviewed, thus why I made a seperate module.

function displayMovies(movies) {
    const movieEl = document.getElementById("movies");
    const table = document.createElement("table");
    const row = document.createElement("tr");
    movies.forEach(function (movie) {
      if (movie.rating >= 7 && movie.watched <= 3) {
        for (const key in movie) {
            console.log(movie[key])
            const cell = document.createElement("td");
            cell.textContent = movie[key];
            row.appendChild(cell);
        }
        table.appendChild(row);
        // const li = document.createElement("li");
        // li.textContent = `${movie.title} released in (${movie.year}) has a rating of ${movie.rating}.`;
        // movieEl.appendChild(li);
      }
    });
  }
  
  displayMovies([{
    title: "Matrix",
    year: 1999,
    rating: 10,
    watched: 5
  }, {
    title: "Will & Harper",
    year: 2024,
    rating: 8,
    watched: 3
  }, {
    title: "CODA",
    year: 2022,
    rating: 6,
    watched: 7
  }]);
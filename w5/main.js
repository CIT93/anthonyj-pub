
const TBL = document.getElementById("movieList");
const movieData = [];


function renderTblHeading () {
    const table = document.createElement("table");
     const thead = document.createElement("thead");
     const tr = document.createElement("tr");
     const headingTextArr = ["Movie", "Year", "Rating"];
     headingTextArr.forEach(function (text) {
       const th = document.createElement("th");
       th.textContent = text;
       tr.appendChild(th);
     });
     thead.appendChild(tr);
     table.appendChild(thead);
     return table
   }

   function renderTbl(data) {

    const table = renderTblHeading();
    const tbody = document.createElement("tbody");
    data.forEach(function (obj) {      
      const tr = document.createElement("tr");
      const tdMovie = document.createElement("td");
      tdMovie.textContent = obj.movie
      const tdYear = document.createElement("td");
      tdYear.textContent = obj.year
      tr.appendChild(tdMovie);
      tr.appendChild(tdYear) 
      const tdRating = document.createElement("td")
      tdRating.textContent = obj.rating
      tr.appendChild(tdRating)
      tbody.appendChild(tr);
    });
   
    table.appendChild(tbody);
    TBL.appendChild(table);
  }

function start() {
     movieData.push(
    {movie: "Planet of the Apes", year: 1956, rating: 8, watched: 1},
    {movie: "Joy Ride", year: 2023, rating: 9, watched: 5},
    {movie: "Godzilla Minus One", year: 2023, rating: 10, watched: 3}
     )
}

/* function displayMovieList(){
const movieList = document.getElementById("movieList");
movieList.appendChild(document.createElement("th")).textContent = "Movie";
movieData.forEach((movie) => {
    console.log(movie.movie)
    console.log(movie.year)
    console.log(movie.rating)
    const movieTitle = document.createElement("p");
    const movieYear = document.createElement("p");
    const movieRating = document.createElement("p");
    movieTitle.textContent = movie.movie;
    movieYear.textContent = `This movie came out in ${movie.year}`;
    movieRating.textContent = `I have given this a personal rating of ${movie.rating}`;
    movieList.appendChild(movieTitle);
    movieList.appendChild(movieYear);
    movieList.appendChild(movieRating);
    if (movie.rating > 6 && movie.watched <5) {
      const movieRecommendation = document.createElement("p")
      movieRecommendation.textContent = `I would recommend ${movie.movie}`
      movieList.appendChild(movieRecommendation)
    }
    })
    
}



start()
displayMovieList();

*/
TBL.appendChild(renderTblHeading());

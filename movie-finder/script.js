const searchInput = document.querySelector(".search-input");
const movieList = document.querySelector(".movie-list");
const resultModal = document.querySelector(".modal-results");
const modalWindow = document.querySelector(".modal-wrapper");
const paginationArrows = document.querySelector(".pagination-wrapper");
const buttonNextPage = document.querySelector(".next-page-btn");
const buttonPreviousPage = document.querySelector(".previouse-page-btn");
const pageCounter = document.querySelector(".pageCount");

const URL = "https://www.omdbapi.com/";
const URLKEY = "b73572eb";

searchInput.focus();
searchInput.addEventListener("search", searchMovie);
resultModal.addEventListener("click", closePop);
searchInput.addEventListener("keyup", searchMovie);
buttonNextPage.addEventListener("click", nextPage);
buttonPreviousPage.addEventListener("click", previousPage);

let page = 1;
changePage();

function searchMovie() {
  let movieName = searchInput.value;
  if (movieName.trim() != 0) {
    return showResults(movieName);
  } else return;
}

function showResults(movieName) {
  const URL = `https://omdbapi.com/?s=${movieName}&page=${page}&apikey=b73572eb`;
  fetch(`${URL}`).then((res) => {
    res.json().then((res) => {
      const result = res.Search;
      if (res == "False") return Error;
      else addResultsHTML(result);
    });
  });
}

function addResultsHTML(result) {
  movieList.innerHTML = "";
  for (itm in result) {
    let HTML = `
        <div class="movie-list__item" id=${result[itm].imdbID}>
              <div class="movie-poster">
                  <img class="movie-poster__img"
                  src= ${result[itm].Poster}
                />
              </div>
  
            <div class="movie-info">
              <div class="movie-title --global-text">${result[itm].Title}</div>
              <div class="year --global-text">${result[itm].Year}</div>
            </div>
          </div>`;
    movieList.insertAdjacentHTML("afterbegin", HTML);
  }
  pagRem();
  detailsInfo();
}

function detailsInfo() {
  const searchListMovies = movieList.querySelectorAll(".movie-list__item");
  searchListMovies.forEach((movie) => {
    movie.addEventListener("click", async () => {
      //console.log(movie.id);
      const result = await fetch(
        `http://www.omdbapi.com/?i=${movie.id}&apikey=fc1fef96`
      );
      const movieDetails = await result.json();
      displayMovieDetails(movieDetails);
    });
  });
}

function displayMovieDetails(details) {
  modalWindow.classList.add("is-open");
  resultModal.innerHTML = `
    <div class = "movie-poster">
        <img src = "${
          details.Poster != "N/A" ? details.Poster : "./img/image_not_found.png"
        }" alt = "movie poster">
    </div>
    <div class = "movie-info">
        <h3 class = "movie-title modal-results--text">${details.Title}</h3>
        <ul class = "movie-misc-info modal-results--text">
            <li class = "year modal-results--text">Year: ${details.Year}</li>
            <li class = "rated modal-results--text">Ratings: ${
              details.Rated
            }</li>
            <li class = "released modal-results--text">Released: ${
              details.Released
            }</li>
        </ul>
        <p class = "genre modal-results--text"><b>Genre:</b> ${
          details.Genre
        }</p>
        <p class = "writer modal-results--text"><b>Writer:</b> ${
          details.Writer
        }</p>
        <p class = "actors modal-results--text"><b>Actors: </b>${
          details.Actors
        }</p>
        <p class = "plot modal-results--text"><b>Plot:</b> ${details.Plot}</p>
        <p class = "language modal-results--text"><b>Language:</b> ${
          details.Language
        }</p>
        <p class = "awards modal-results--text"><b><i class = "fas fa-award"></i></b> ${
          details.Awards
        }</p>
    </div>
    `;
}

function closePop(e) {
  if (e.target) modalWindow.classList.remove("is-open");
}

function nextPage(e) {
  if (e.target == buttonNextPage) page += 1;
  changePage();
  searchMovie();
}

function previousPage(e) {
  if (e.target == buttonPreviousPage && page > 1) page -= 1;
  else return;
  changePage();
  searchMovie();
}

function changePage() {
  pageCounter.innerHTML = page;
}

function pagRem() {
  movieList.innerHTML == ""
    ? paginationArrows.classList.add("hide")
    : paginationArrows.classList.remove("hide");
}

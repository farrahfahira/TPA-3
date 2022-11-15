// menampilkan list movie berdasarkan popular

let containerMovie = document.querySelector(".movie-list");

let getMovies = async () => {
  let response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=da5ed6bbb96a06ca0832f01c9a14e368&page=1");
  let data = await response.json();

  let movies = data.results;

  movies.forEach((movie) => {
    containerMovie.innerHTML += `
      <div class="movie-card">
        <div class="thumbnail">
          <img src="${"https://image.tmdb.org/t/p/w500/" + movie.poster_path}" alt="${movie.title}" />
        </div>
        <div class="movie-desc">
          <div class="movie-title">
            <h3>${movie.title}</h3>
          </div>
          <div class="movie-desc-bawah">
            <div class="movie-release-date">
              <h5>${movie.release_date}</h5>
            </div>
            <div class="movie-rat">
              <h5><span class="fa fa-star checked"></span>${movie.vote_average}</h5>
            </div>
          </div>
        </div>
      </div>`;
  });
};

getMovies();

// fungsi utk search movie

let search = document.querySelector(".input-search");

let cardMovie = (movie) => {
  return `
  <div class="movie-card">
  <div class="thumbnail">
    <img src="${"https://image.tmdb.org/t/p/w500/" + movie.poster_path}" alt="${movie.title}" />
  </div>
  <div class="movie-desc">
    <div class="movie-title">
      <h3>${movie.title}</h3>
    </div>
    <div class="movie-desc-bawah">
      <div class="movie-release-date">
        <h5>${movie.release_date}</h5>
      </div>
      <div class="movie-rat">
        <h5><span class="fa fa-star checked"></span>${movie.vote_average}</h5>
      </div>
    </div>
  </div>
</div>
    `;
};

let searchMovies = async (judul) => {
  let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=da5ed6bbb96a06ca0832f01c9a14e368&query=${judul}}&page=1`);
  let data = await response.json();
  return data.results;
};

search.addEventListener("keyup", async (event) => {
  let movies = await searchMovies(event.target.value);
  if (movies) {
    containerMovie.innerHTML = movies.map((movie) => cardMovie(movie)).join("");
  } else {
    getMovies();
  }
});

// ****

let myFunction = async () => {
  let response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=da5ed6bbb96a06ca0832f01c9a14e368&page=1");
  let data = await response.json();

  let movies = data.results;

  movies.forEach((movie) => {
    containerMovie.innerHTML += `
      <div class="movie-card">
        <div class="thumbnail">
          <img src="${"https://image.tmdb.org/t/p/w500/" + movie.poster_path}" alt="${movie.title}" />
        </div>
        <div class="movie-desc">
          <div class="movie-title">
            <h3>${movie.title}</h3>
          </div>
          <div class="movie-desc-bawah">
            <div class="movie-release-date">
              <h5>${movie.release_date}</h5>
            </div>
            <div class="movie-rat">
              <h5><span class="fa fa-star checked"></span>${movie.vote_average}</h5>
            </div>
          </div>
        </div>
      </div>`;
  });
};

myFunction();

import {Route} from "react-router-dom"


export const getData = (setData,setFilms, setSerials, setAnime) => {
    fetch("https://pavelvynnpv.github.io/mymovieapi/films.json")
      .then((response) => response.json())
      .then((apiInfo) => {
        setData(apiInfo.movies.all_movies);
        setFilms(apiInfo.movies.new_movies);
        setSerials(apiInfo.movies.serials);
        setAnime(apiInfo.movies.anime);
      });
  };


export const dataChanger = (
  webHref,
  data,
  films,
  anime,
  year,
  serials,
  country,
  movieTime,
  favourites
) => {
  if (webHref === "http://localhost:3000/movie-web") {
    <Route exact path="/"/>
    return data;
  } else if (webHref === "http://localhost:3000/movie-web/films") {
    return films;
  } else if (webHref === "http://localhost:3000/movie-web/serials") {
    return serials;
  } else if (webHref === "http://localhost:3000/movie-web/anime") {
    return anime;
  } else if (webHref === "http://localhost:3000/movie-web/filteryear") {
    return year;
  } else if (webHref === "http://localhost:3000/movie-web/filtercountry") {
    return country;
  } else if (webHref === "http://localhost:3000/movie-web/filtermovietime") {
    return movieTime;
  } else if (webHref === "http://localhost:3000/movie-web/favourites") {
    return favourites;
  } else {
    return data;
  }
};

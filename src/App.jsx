import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import SinglePage from "./components/MoviesList/SinglePage";
import { dataChanger, getData } from "./components/utils/helper";

function App() {
  const [films, setFilms] = useState([]);
  const [serials, setSerials] = useState([]);
  const [anime, setAnime] = useState([]);
  const [data, setData] = useState([]);
  const [itemInfo, setItemInfo] = useState({});
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [webHref, setWebHref] = useState("");
  const [year, setYear] = useState([]);
  const [movieTime, setMovieTime] = useState([]);
  const [country, setCountry] = useState([]);
  const [clients, setClients] = useState([]);
  const [activeLogin, setActiveLogin] = useState(false);
  const [activeSignUp, setActiveSignUp] = useState(false);
  const [activeClient, setActiveClient] = useState({});




  useEffect(() => {
    getData(setData, setFilms, setSerials, setAnime);
    const itemFavourites = JSON.parse(localStorage.getItem("items")) || [];
    setFavourites(itemFavourites);
  }, []);

  function handleOnClickAdd(item) {
    const newFavouriteListAdd = [...favourites, item];

    const saveToLocalStorage = (item) => {
      localStorage.setItem("items", JSON.stringify(item));
    };
    saveToLocalStorage(newFavouriteListAdd);
    setFavourites(newFavouriteListAdd);
  }

  function handleOnClickAddClient(item) {
    let clientsArray = JSON.parse(localStorage.getItem("client")) || [];
    const isExisting = clientsArray.some(
      (element) => element.email === item.email
    );
    if (isExisting) {
      alert("Елемент уже існує в масиві");
      setActiveSignUp(true)
      return;
    }
    clientsArray.push(item);
    localStorage.setItem("client", JSON.stringify(clientsArray));
    setClients(clientsArray);
    localStorage.setItem("activeClient", JSON.stringify(item));
    setActiveSignUp(false)
  }

  function handleOnClickRemove(item) {
    const newFavouriteList = favourites.filter((favourite) => {
      return favourite.id !== item.id;
    });
    const saveToLocalStorage = (item) => {
      localStorage.setItem("items", JSON.stringify(item));
    };
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const filters = (filter) => {
    const filteredYears = data.filter((movie) =>
      filter.every((tag) => movie.year.includes(tag))
    );
    const filteredMovieTime = data.filter((movie) =>
      filter.every((tag) => movie.time.includes(tag))
    );
    const filteredCountry = data.filter((movie) =>
      filter.every((tag) => movie.country.includes(tag))
    );

    setCountry(filteredCountry);
    setYear(filteredYears);
    setMovieTime(filteredMovieTime);
  };

  console.log(webHref)


  return (
    <>
      <div className={"app_content"}>
        <img
          className={
            webHref === `http://localhost:3000/movie-web/singlepage/${itemInfo.id}`
              ? "unActive"
              : "main_bg_photo"
          }
          src="https://kartinkin.net/uploads/posts/2021-07/thumbs/1625685683_6-kartinkin-com-p-betmen-oboi-krasivie-8.jpg"
          alt=""
        />
        <div className="image_shadow_box">
          <img
            className={
              webHref === `http://localhost:3000/movie-web/singlepage/${itemInfo.id}`
                ? "singlep__background"
                : "unActive_img"
            }
            src={itemInfo.singlep_image}
            alt="sinlePage-pic"
          />
          <div className="shadow_bg"></div>
        </div>

        <BrowserRouter>
          <Navbar
            data={data}
            setSearch={setSearch}
            webHref={webHref}
            itemInfo={itemInfo}
            setWebHref={setWebHref}
            clients={clients}
            handleOnClickAddClient={handleOnClickAddClient}
            setActiveLogin={setActiveLogin}
            setActiveSignUp={setActiveSignUp}
            activeLogin={activeLogin}
            activeSignUp={activeSignUp}
            activeClient={activeClient}
            setActiveClient={setActiveClient}
          />
          <Main
            data={dataChanger(
              webHref,
              data,
              films,
              anime,
              year,
              serials,
              country,
              movieTime,
              favourites
            )}
            films={films}
            serials={serials}
            anime={anime}
            search={search}
            setItemInfo={setItemInfo}
            handleOnClickAdd={handleOnClickAdd}
            handleOnClickRemove={handleOnClickRemove}
            favourites={favourites}
            setWebHref={setWebHref}
            filters={filters}
            asideDataInfo={data}
            webHref={webHref}
            itemInfo={itemInfo}
          />
          <Routes>
            <Route
              path="movie-web/singlepage/:id"
              element={
                <SinglePage itemInfo={itemInfo} setWebHref={setWebHref} />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

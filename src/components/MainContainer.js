//1. import the useState hook from the react library
import { useState } from "react";
import SearchBar from "./SearchBar";
//2. import axios
import axios from "axios";
import RatingsResult from "./RatingsResult";
import FaceOff from "./FaceOff";
import { Route, Routes } from "react-router-dom";
import Loading from "./Loading";

const MainContainer = () => {
  //3. intiliaze state to hold the data - The information on the book will be returned from the api
  const [searchInput, setSearchInput] = useState("");
  const [bookDetails, setBookDetails] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //4. define a side effect which will run once the user searches for a book or movie title

  const onEnter = () => {
    setIsLoading(true);
    axios({
      url: "https://api.themoviedb.org/3/search/movie",
      params: {
        api_key: "abb23cb27cf45e3859e3f8c484c9463a",
        include_adult: false,
        original_language: "en",
        query: searchInput,
      },
    })
      .then((data) => {
        if (data) {
          return data;
        } else {
          throw new Error(data.data.results === "");
        }
      })
      .then((data) => {
        setMovieDetails(data.data.results);
        setIsLoading(false);
        console.log(data.data.results) // --------------------- delete this after
      })
      .catch((error) => {
        // state to represent error
        // if error is true display message
        // turnary in return section
        if (error.message === "apiData.data.results is undefined") {
          setError("This book or movie title doesn't exist");
          setSearchInput("");
        } else {
          setError(true);
        }
        setIsLoading(false);
      });
  };
  const onClick = (bookTitle) => {
    // console.log(bookTitle);
    setSelectedMovie(bookTitle);
    axios({
      url: "https://www.googleapis.com/books/v1/volumes",
      method: "GET",
      dataResponse: "json",
      params: {
        API_KEY: "AIzaSyAUtAytZDfo4ohe1l2O29rUzdY7oypqRts",
        q: bookTitle.title,
      },
    }).then((apiData) => {
      let selectedBook;

      for (let i = 0; i < apiData.data.items.length; i++) {
        let book = apiData.data.items[i].volumeInfo;
        let rating = 0;
        // console.log(apiData.data.items[i]);
        if (book.title.toUpperCase() === bookTitle.title.toUpperCase()) {
          //if rating < averageRating then set rating=averageRating AND set selectedBookElement
          if (rating < book.averageRating) {
            rating = book.averageRating;
            selectedBook = book;
          }
        }
      }

      // updated the error handling for selectedBook
      if (selectedBook === undefined) {
        setError(true);
        return;
      }
      // console.log(selectedBook);
      setBookDetails(selectedBook);

      // if (selectedBook) {
      //   return selectedBook;
      // } else {
      //   // what happens if it didn't find any book?
      //   setError(true);
      // }
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    // call the state updater function and use the selected option value to update.
    onEnter();
  };


  if (isLoading) return <Loading />;
  return (
    <section>
      <SearchBar
        handleClick={handleClick}
        bookDetails={bookDetails}
        movieDetails={movieDetails}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      <Routes>
        <Route
          path="/faceoff"
          element={
            <FaceOff
              bookDetails={bookDetails}
              selectedMovie={selectedMovie}
              onClick={onClick}
              loading={isLoading}
            />
          }
        />
        <Route
          path="/"
          element={
            <RatingsResult
              searchInput={searchInput}
              movieDetails={movieDetails}
              error={error}
              onClick={onClick}
              loading={isLoading}
            />
          }
        
          
        />
      </Routes>
    </section>
  );
};

export default MainContainer;

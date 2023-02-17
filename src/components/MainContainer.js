//1. import the useState hook from the react library
import { useState } from "react";
import SearchBar from "./SearchBar";
//2. import axios
import axios from "axios";
import RatingsResults from "./RatingsResult";

const MainContainer = () => {
  //3. intiliaze state to hold the data - The information on the book will be returned from the api
  const [searchInput, setSearchInput] = useState("");
  const [bookDetails, setBookDetails] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(false);
  const [selectedBook, setSelectedBook] = useState("");

  //4. define a side effect which will run once the user searches for a book or movie title

  // NEED TO TAKE A LOOK INTO THE BOOK API. NEEDS TO GIVE US BETTER TITLES OF THE BOOK..
  const onEnter = () => {
    axios({
      url: "https://www.googleapis.com/books/v1/volumes",
      method: "GET",
      dataResponse: "json",
      params: {
        API_KEY: "AIzaSyAUtAytZDfo4ohe1l2O29rUzdY7oypqRts",
        q: searchInput,
      },
    })
      .then((apiData) => {
        if (apiData === apiData) {
          return apiData;
        } else {
          throw new Error(apiData.data.items === "");
        }
      })
      .then((apiData) => {
        // console.log(apiData)

        const bookInfo = apiData.data.items.map((book) => {
          return book.volumeInfo;
        });

        setBookDetails(bookInfo);

        // const bookName = apiData.data.items[1].volumeInfo.title;
        // trying to have a strict filter based on user input
        // const filteredBookData = apiData.data.items[1].volumeInfo.filter(obj => obj.title === bookTitle)
        // setBookTitle(filteredBookData);

        // function goes here for bookDetails.title
        // wrap the movie axios into a function here.
      })
      .catch((error) => {
        // state to represent error
        // if error is true display message
        // turnary in return section
        // console.log(error.message)
        if (error.message === "apiData.data.items is undefined") {
          setError("This book or movie title doesn't exist");
          setSearchInput("");
        } else {
          setError(true);
        }
      });
  };
  const onClick = (bookTitle) => {
    console.log(bookTitle);
    axios({
      url: `https://api.themoviedb.org/3/search/movie`,
      params: {
        api_key: "abb23cb27cf45e3859e3f8c484c9463a",
        include_adult: false,
        language: "en",
        query: bookTitle,
      },
    }).then((data) => {
      // filtered movie data based on user input
      console.log(data)
      const filteredMovieData = data.data.results.filter(
        (movie) =>
          movie.original_title.toUpperCase() === bookTitle.toUpperCase()
      );

      const vote = filteredMovieData.map(
        (popularMovie) => popularMovie.vote_average
      );
      const popularOrganized = Math.max(...vote);
      const mostPopular = vote.indexOf(popularOrganized);
      console.log(mostPopular, "most popular");
      setMovieDetails(filteredMovieData[mostPopular]);
      // setMovieDetails(filteredMovieData);
      // NEED TO LOOK AT MOVIE - SEE IF THERE IS A BETTER WAY TO PULL RESULTS (MORE FORGIVING)
      console.log(data);
    });
  };
  // index 0 OR randomizer as each search has different
  // for google book api we need to get
  // index1, volumeInfo -> averageRating, volumeInfo ->description, volumeInfo -> imageLinks -> thumbnail, volumneInfo -> authors,
  const handleClick = (e) => {
    e.preventDefault();

    // call the state updater function and use the selected option value to update.
    onEnter();

    // const book = e.target.value;
    // setBookDetails(book);

    // setMovieDetails(displayDetails);
  };

  return (
    <section>
      {/*Parent component that will be used to pass down props */}
      <SearchBar
        handleClick={handleClick}
        bookDetails={bookDetails}
        movieDetails={movieDetails}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      <RatingsResults
        bookDetails={bookDetails}
        searchInput={searchInput}
        error={error}
        onClick={onClick}
      />
    </section>
  );
};

export default MainContainer;

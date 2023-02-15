//1. import the useState hook from the react library
import {useState} from 'react';
import SearchBar from "./SearchBar";
//2. import axios
import axios from "axios";
import RatingsResults from './RatingsResult';



const MainContainer = () => {

  //3. intiliaze state to hold the data - The information on the book will be returned from the api
  const [searchInput, setSearchInput] = useState(""); 
  const [bookDetails, setBookDetails] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);

  
  //4. define a side effect which will run once the user searches for a book or movie title
  const onEnter = () => {
    
    axios({
      url: "https://www.googleapis.com/books/v1/volumes",
      method:'GET',
      dataResponse: 'json',
      params: {
          API_KEY:"AIzaSyAUtAytZDfo4ohe1l2O29rUzdY7oypqRts",
          q: searchInput
      }
    })
    .then((apiData) => {
  
      const bookInfo = apiData.data.items.map((book) => { return book.volumeInfo}
        ) ;
  
        // console.log(data.data.items[1].volumeInfo.imageLinks.thumbnail) -> FOR IMAGE
      // console.log(data.data.items[1].volumeInfo.description) -> FOR DESCRIPTION
      // console.log(data.data.items[1].volumeInfo.title) -> FOR TITLE
      // console.log(data.data.items[1].volumeInfo.authors) -> FOR AUTHORS
      // console.log(data.data.items[1].volumeInfo.averageRating) -> FOR AVERAGE RATING
      const bookName = apiData.data.items[1].volumeInfo.title;
      // trying to have a strict filter based on user input
      // const filteredBookData = apiData.data.items[1].volumeInfo.filter(obj => obj.title === bookTitle) 
      // setBookTitle(filteredBookData);
    
      setBookDetails(bookInfo);
      console.log(setBookDetails)
      // const bookToMovie = (bookTitle) => { 
      //   console.log(bookTitle)          
      //   return axios({
      //       url: `https://api.themoviedb.org/3/search/movie`,
      //       params: {
      //         api_key: "abb23cb27cf45e3859e3f8c484c9463a",
      //         include_adult: false,
      //         language: "en",        
      //         query: bookTitle
      //     }
      //   })        
      // }      
      // function goes here for bookDetails.title
      // wrap the movie axios into a function here.
        
      // bookToMovie(bookName).then((data) => {               
      //   // filtered movie data based on user input         
      //   // const filteredMovieData = data.data.results.filter(movie => movie.original_title.toUpperCase() === bookName.toUpperCase())
      //   // const popular = filteredMovieData.map(popularMovie => popularMovie.popularity)  
      //   // const popularOrganized = (Math.max(...popular))        
      //   // const mostPopular = popular.indexOf(popularOrganized)
      //   // console.log(mostPopular, "most popular");
       
      //   // setMovieDetails(filteredMovieData[mostPopular]);
      
      // }) 
    })      
    .catch((error) => {
       alert("Invalid book title!")
    });
  }
  
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
  }
  
  return (
    <section>
      {/*Parent component that will be used to pass down props */}
      {/* <MainContainer bookDetails={bookDetails}/> */}
      <SearchBar handleClick={handleClick} bookDetails={bookDetails} movieDetails={movieDetails} setSearchInput={setSearchInput} searchInput={searchInput}/>
      <RatingsResults bookDetails={bookDetails} searchInput={searchInput} />
    </section>
  )
  ;
}

 

export default MainContainer;

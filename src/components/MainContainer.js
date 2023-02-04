import axios from "axios";
import SearchBar from "./SearchBar";

const MainComponent = () => {
  // const onEnter = () => {
  //   axios({
  //     url: "https://www.googleapis.com/books/v1/volumes",
  //     method:'GET',
  //     dataResponse: 'json',
  //     params: {
  //         API_KEY:"AIzaSyAUtAytZDfo4ohe1l2O29rUzdY7oypqRts",
  //         q: "lord of the rings"
  //     }
  //   })
  //   .then((data) => {
  //       console.log(data)
  //   })
  //   .catch((error) => {
  //       console.log(error)
  //   });
  // }

  axios({
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      api_key: "abb23cb27cf45e3859e3f8c484c9463a",
      include_adult: false,
      primary_release_year: 2002,
    },
  })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  // index 0 OR randomizer as each search has different
  // for google book api we need to get
  // index1, volumeInfo -> averageRating, volumeInfo ->description, volumeInfo -> imageLinks -> thumbnail, volumneInfo -> authors,
  return (
    <SearchBar />
  )
  ;
};

export default MainComponent;

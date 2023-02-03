import axios from "axios";

const MainComponent = () => {
    // const onEnter = () => {
      axios({
        url: "https://www.googleapis.com/books/v1/volumes",
        method:'GET',
        dataResponse: 'json',
        params: {
            API_KEY:"AIzaSyAUtAytZDfo4ohe1l2O29rUzdY7oypqRts",
            q: "lord of the rings"
        }  
      })    
      .then((data) => {
          console.log(data)
      })
      .catch((error) => {
          console.log(error)
      });
    // index 0 OR randomizer as each search has different 
    // for google book api we need to get 
    // index1, volumeInfo -> averageRating, volumeInfo ->description, volumeInfo -> imageLinks -> thumbnail, volumneInfo -> authors, 
    return (
        <div></div>
    )
}

export default MainComponent;
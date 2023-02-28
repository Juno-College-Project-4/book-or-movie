import { useState, useEffect } from "react";

const FaceOff = (props) => {
  // added a rendered and set rendered useState to check for the displayBook array after the page loaded
  const [rendered, setRendered] = useState(false);
  const displayMovie = props.selectedMovie;
  const displayBook = props.bookDetails;
  const movieImage = `https://image.tmdb.org/t/p/w500${displayMovie.poster_path}`;
  // added bookRating and movieRating variables so we can compare them in the  banner
  const bookRating = displayBook.averageRating * 2;
  const movieRating = displayMovie.vote_average;
  // set banner to null
  let banner = null;

  // added the banner to compare and determine who won and diplay the coresponding banner
  if (bookRating > movieRating) {
    banner = <h2 className="winnerBanner">The Book Wins</h2>;
  } else if (movieRating > bookRating) {
    banner = <h2 className="winnerBanner">The Movie wins!</h2>;
  } else if (movieRating === bookRating) {
    banner = <h2 className="winnerBanner">They Tied!</h2>;
  } else {
    banner = <h2 className="winnerBanner">No Book Available</h2>;
  }

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <>
      {/* added the banner */}
      {banner}
      {/* will hide the entire resultContainer and display an empty div when display.Book.length is empty, which means there wasn't a corresponding book */}
      {rendered && displayBook.length === 0 ? (
        <div></div>
      ) : (
        <section className="resultContainer">
          <div className="bookResult">
            <div className="bookTopInfo">
              <div className="bookInfoDetails">
                <div className="titleOfBook">
                  <h3 className="eachBookTitle">{displayBook.title}</h3>
                </div>
                <div className="authorAndRating">
                  <h4 className="author">Author: {displayBook.authors}</h4>
                  <div className="rating">
                    Rating: {displayBook.averageRating}
                  </div>
                </div>
              </div>
<<<<<<< HEAD
            </div>
            <div className='bookImgContainer'>
            {/*// need to use some kind of dot notation for the alt text for the description of the book image */}
              <img src={displayBook.imageLinks?.thumbnail} alt=""/>
            </div>
          </div>
          <div className='bookBottomInfo'>
            <div className='summary'>
              <span className='plot'>Plot Summary</span>
              <p>{displayBook.description}</p>
            </div>
          </div>
        </div>

        <div className='vsBannerContainer'>
          <h2 className='vsBanner'>VS</h2>
        </div>

        <div className='movieResult'>
          <div className='movieTopInfo'>
            <div className='movieInfoDetails'>
              <div className='titleOfMovie'>
                <h3 className='eachMovieTitle'>{displayMovie.title}</h3>
=======
              <div className="bookImgContainer">
                <img src={displayBook.imageLinks?.thumbnail} />
>>>>>>> c30e3c8101b198e69d0c28742b15be5a3280ba53
              </div>
            </div>
            <div className="bookBottomInfo">
              <div className="summary">
                <span className="plot">Plot Summary</span>
                <p>{displayBook.description}</p>
              </div>
            </div>
          </div>

          <div className="vsBannerContainer">
            <h2 className="vsBanner">VS</h2>
          </div>

          <div className="movieResult">
            <div className="movieTopInfo">
              <div className="movieInfoDetails">
                <div className="titleOfMovie">
                  <h3 className="eachMovieTitle">{displayMovie.title}</h3>
                </div>
                <div className="authorAndRating">
                  <div className="rating">
                    Rating: {displayMovie.vote_average}
                  </div>
                </div>
              </div>
              <div className="moviePhotoContainer">
                <img className="moviePhoto" src={movieImage} />
              </div>
            </div>
<<<<<<< HEAD
            <div className='moviePhotoContainer'>
              {/*// need to use some kind of dot notation for the alt text for the description of the movie image */}
              <img className='moviePhoto' src={movieImage}  alt=""/>
=======
            <div className="movieBottomInfo">
              <div className="summary">
                <span className="plot">Plot Summary</span>
                <p>{displayMovie.overview}</p>
              </div>
>>>>>>> c30e3c8101b198e69d0c28742b15be5a3280ba53
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default FaceOff;

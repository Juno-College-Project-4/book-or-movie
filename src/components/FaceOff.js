// import RatingsResults from "./RatingsResult";

const FaceOff = (props) => {
  const displayMovie = props.selectedMovie;
  const displayBook = props.bookDetails;
  console.log(displayMovie);
  const movieImage = `https://image.tmdb.org/t/p/w500${displayMovie.poster_path}`;
  // const displayMovie = props?
  // console.log(displayBook)
  return (
    <>
      <section className='resultContainer'>
        <div className='bookResult'>
          <div className='bookTopInfo'>
            <div className='bookInfoDetails'>
              <div className='titleOfBook'>
                <h3 className='eachBookTitle'>{displayBook.title}</h3>
              </div>
              <div className='authorAndRating'>
                <h4 className='author'>Author: {displayBook.authors}</h4>
                <div className='rating'>
                  Rating: {displayBook.averageRating}
                </div>
              </div>
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
              </div>
              <div className='authorAndRating'>
                <div className='rating'>
                  Rating: {displayMovie.vote_average}
                </div>
              </div>
            </div>
            <div className='moviePhotoContainer'>
              {/*// need to use some kind of dot notation for the alt text for the description of the movie image */}
              <img className='moviePhoto' src={movieImage}  alt=""/>
            </div>
          </div>
          {/* stretch goal to use id # and filter out name of directors */}
          {/* <div className='director'>{displayBook.}</div> */}

          <div className='movieBottomInfo'>
            <div className='summary'>
              <span className='plot'>Plot Summary</span>
              <p>{displayMovie.overview}</p>
            </div>
          </div>
        </div>
      </section>
      {/* stretch goals for voting system from users */}
      {/* <section className='userButtons'>
        <button>Didn't Read Book</button>
        <button className='agreeOrDisagree'>Agree or Disagree</button>
        <button>Didn't Watch Movie</button>
      </section> */}
    </>
  );
};

export default FaceOff;

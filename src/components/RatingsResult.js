import { Link, Outlet } from 'react-router-dom';

const RatingsResults = (props) => {
  const movieResult = props.movieDetails;
  const error = props.error;
  return (
    <>
      <section className='wrapper'>
        <div className='movieContainer'>
          <div className='movieInfo'>
            <p>
              {error ? error : ''}
              {/* stretch goal: hide the paragraph vs. what's inside the paragraph */}
            </p>
            <div className='movieImageContainer'>
              {movieResult.map((movieDescription, i) => {   
                 const movieImage = `https://image.tmdb.org/t/p/w500${movieDescription.poster_path}`;             
                return (
                  <>
                  {/* re-routing to .faceoff component onClick .movieList */}
                    <Link to='/faceoff'>
                      <div
                        className='movieList'
                        key={i}
                        onClick={() => props.onClick(movieDescription)}
                      >
                        {movieDescription.poster_path &&
                        movieDescription.poster_path ? (
                          <img className='movieImg' src={movieImage} alt='' />
                        ) : (
                          <h3>{movieDescription.title}</h3>
                        )}
                        <h3>{movieDescription.title}</h3>            
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default RatingsResults;

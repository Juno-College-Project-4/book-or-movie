const FaceOff = (props) => {
  const displayMovie = props.movieDetails;
  // const displayMovie = props?
  // console.log(displayBook)
  return (
    <section>
      <div className='bookResult'>
        <h3>{displayMovie.title}</h3>
        {/* <img src={displayBook?.imageLinks.thumbnail} /> */}
        <h4 className='author'>{displayMovie.authors}</h4>
        <div className='rating'>{displayMovie.rating}</div>
        <p className='summary'>{displayMovie.description}</p>
      </div>

      <div>
        <h2 className='vsBanner'>VS</h2>
      </div>

      <div className='movieResult'>
        <h3></h3>
        <img />
        <div className='author'></div>
        <div className='rating'></div>
        <p className='summary'></p>
      </div>

      <button>Didn't Read Book</button>
      <button className='agreeOrDisagree'>Agree or Disagree</button>
      <button>Didn't Watch Movie</button>
    </section>
  );
};

export default FaceOff;

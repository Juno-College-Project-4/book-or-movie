const RatingsResults = (props) => {
  const searchInput = props.searchInput;
  const bookInfo = props.bookDetails;
  const error = props.error;
  return (
    <>
      <section className="wrapper">
        <div className="bookContainer">
          <div className="bookInfo">
            <p>
              {error ? error : ""}
              {/* stretch goal: hide the paragraph vs. what's inside the paragraph */}
            </p>
            <div className="bookImageContainer">
              {bookInfo.map((bookDescription, i) => {
                return (
                  <>
                    <div
                      className="bookList"
                      key={i}
                      onClick={() => props.onClick(bookDescription.title)}
                    >                      
                      {
                        (bookDescription.imageLinks && bookDescription.imageLinks.thumbnail)
                        ? <img 
                          className="bookImg"
                          src={bookDescription.imageLinks.thumbnail}
                          alt=""
                          />
                        : <h3>{bookDescription.infoLink}</h3>  
                      }        
                      <h3 key={i}>{bookDescription.title}</h3>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RatingsResults;

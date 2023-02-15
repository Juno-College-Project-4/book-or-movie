const RatingsResults = (props) => {
    const searchInput = props.searchInput
    const bookInfo = props.bookDetails
    console.log(bookInfo)
    return (
        <>
            <section className="wrapper">
                <div className="bookContainer">
                    <div className="bookInfo">
                        <h2>{searchInput}</h2>
                        <div className="bookTitle">
                            {/* <h3>{bookTitle}</h3> */}
                        </div>
                        <div className="bookImageContainer">
                            {bookInfo.map((bookImage) => {
                                console.log(bookImage)
                                return (
                                    <div>
                                        <img src={bookImage.imageLinks.thumbnail} alt="" />
                                    </div>
                                    
                                )
                                
                            })}
                        </div>
                        <div className="bookRating">
                            
                        </div>
                        <div className="bookAuthor">

                        </div>
                        <div className="bookStars">

                        </div>
                        <div className="bookDescription">
        
                        </div>
                    </div>
                </div>

                <div className="movieContainer">
                    <div className="movieInfo">
                        <div className="movieImageContainer">
                            {/* <img className="movieImage" src={ } alt={ } /> */}
                        </div>
                        <div className="movieRating">

                        </div>
                        <div className="movieAuthor">

                        </div>
                        <div className="movieStars">

                        </div>
                        <div className="movieDescription">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RatingsResults;
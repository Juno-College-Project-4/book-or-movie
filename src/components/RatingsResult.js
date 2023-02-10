const RatingsResults = (props) => {
    const searchInput = props.searchInput
    return (
        <>
            <section className="wrapper">
                <div className="bookContainer">
                    <div className="bookInfo">
                        <h2>{searchInput}</h2>
                        <div className="bookImageContainer">
                            {/* <img className="bookImage" src={} alt={} /> */}
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
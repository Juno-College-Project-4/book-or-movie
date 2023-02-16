const RatingsResults = (props) => {
    const searchInput = props.searchInput
    const bookInfo = props.bookDetails
    console.log(bookInfo)
    const error = props.error
    return (
        <>
            <section className="wrapper">
                <div className="bookContainer">
                    <div className="bookInfo">
                        <h2>{searchInput}</h2>
                        <p>
                            {
                                error ? error : ""
                            }
                            {/* stretch goal: hide the paragraph vs. what's inside the paragraph */}
                        </p>
                        <div className="bookImageContainer">
                            {bookInfo.map((bookDescription, i) => {
                                return (
                                    <div key={i}>
                                        <img src={bookDescription.imageLinks.thumbnail} alt="" />
                                        <h3 key={i}>{bookDescription.title}</h3>
                                    </div>
                                    
                                )  
                            })}
                        </div>
                </div>  
            </div>
            </section>
        </>
    )
}

export default RatingsResults;
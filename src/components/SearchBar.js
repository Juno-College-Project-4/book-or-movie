import { useNavigate } from "react-router-dom";

const SearchBar = ({ handleClick, setSearchInput, searchInput }) => {
  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };
  const navigate = useNavigate();

  return (
    <>
      {/* input and submit button onClick navigate user back to / path, link creates anchor tag which does not work with button */}
      <div onClick={() => navigate("/")}>
        <form action="">
          <input
            type="text"
            value={searchInput}
            placeholder="Search Movies/Books"
            onChange={handleInput}
          />
          <button
            type="submit"
            value="Submit"
            className="button"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

<<<<<<< HEAD
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     setButtonClick(userInput); ---- handle click is not needed here
    //     console.log(buttonClick);
    // }

    const handleInput = (e) => {
        setSearchInput(e.target.value);
        // setUserInput(e.target.value); -- not needed.. as the handle input is using the setBookTitle state from the MainContainer Component
        // console.log(userInput);
    }
    
    return (
        <div className="searchBox">
            <form action="">
                <input type="text" value={searchInput} placeholder="Search Movies/Books " onChange={handleInput}/>
                <button type="submit" value="Submit" className="button" onClick={handleClick}><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    )
}

export default SearchBar;
=======
export default SearchBar;
>>>>>>> c30e3c8101b198e69d0c28742b15be5a3280ba53

// import { useState } from "react"; -- state not needed

const SearchBar = ({handleClick, setSearchInput, searchInput}) => {

    // const [buttonClick, setButtonClick] = useState(""); --- State is not needed here as all the states were put into the MainContainer Component
    // const [userInput, setUserInput] = useState("");

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
        <div>
            <form action="">
                <input type="text" value={searchInput} placeholder="Search Movies/Books" onChange={handleInput}/>
                <button type="submit" value="Submit" className="button" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default SearchBar;
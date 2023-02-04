import { useState } from "react";

const SearchBar = () => {

    const [buttonClick, setButtonClick] = useState("");
    const [userInput, setUserInput] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        setButtonClick(userInput);
        console.log(buttonClick);
    }

    const handleInput = (e) => {
        e.preventDefault();
        setUserInput(e.target.value);
        console.log(userInput);
    }
    
    return (
        <div>
            <form action="">
                <input type="text" value={userInput}placeholder="Search Movies/Books" onChange={handleInput}/>
                <button type="submit" value="Submit" className="button" onClick={e => { handleClick(e, userInput) }}>Submit</button>
            </form>
        </div>
    )
}

export default SearchBar;
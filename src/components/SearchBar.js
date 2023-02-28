import { useNavigate } from "react-router-dom";

const SearchBar = ({ handleClick, setSearchInput, searchInput }) => {
  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };
  const navigate = useNavigate();

  return (
    <>
      {/* input and submit button onClick navigate user back to / path, link creates anchor tag which does not work with button */}
      <div className="wrapper" onClick={() => navigate("/")}>
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

export default SearchBar;

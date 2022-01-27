import "../styles/MainContent.css";
import { useState } from "react";

export default function MainContent(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [inSearch, setInSearch] = useState<boolean>(false);

  const handleSearch = () => {
    setInSearch(true);
    console.log(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm("");
    setInSearch(false);
  };

  return (
    <div className="MainContent">
      {!inSearch ? (
        <form className="SearchArt" onSubmit={handleSearch}>
          <input
            className="SearchArtInput"
            type="text"
            placeholder="Search for art..."
            autoComplete="off"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
            className="SearchArtButton"
            type="submit"
            onClick={handleSearch}
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
      ) : (
        <div className="InSearch">
          <div className="SearchArt">
            <h2 className="SearchTerm">Results for "{searchTerm}"</h2>
            <button
              className="SearchArtButton"
              type="button"
              onClick={handleClear}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <p className="ResultsFound">... results found</p>
        </div>
      )}
    </div>
  );
}

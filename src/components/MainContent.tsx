import "../styles/MainContent.css";
import { useEffect, useState } from "react";
import SearchedArtworks from "./SearchedArtworks";
import FeaturedArtworks from "./FeaturedArtworks";
import { IArtwork, ISearchedArtwork, IUserArt } from "../utils/Interfaces";
import axios from "axios";
import { API_BASE } from "../utils/APIFragments";
import { formatSearchTerm } from "../utils/formatSearchTerm";
import { trackPromise } from "react-promise-tracker";
import { LoadingIndicator } from "./LoadingIndicator";

interface MainContentProps {
  userId: number | null;
  userGalleryArt: IUserArt[];
  triggerGetUserArt: boolean;
  setTriggerGetUserArt: (input: boolean) => void;
}

export default function MainContent({
  userId,
  userGalleryArt,
  triggerGetUserArt,
  setTriggerGetUserArt,
}: MainContentProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [inSearch, setInSearch] = useState<boolean>(false);
  const [featuredArt, setFeaturedArt] = useState<IArtwork[]>([]);
  const [searchResultArt, setSearchResultArt] = useState<ISearchedArtwork[]>(
    []
  );

  useEffect(() => {
    axios
      .get(`${API_BASE}/artworks/featured`)
      .then((response) => {
        setFeaturedArt(response.data.artworks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = () => {
    setInSearch(true);
    const getSearch = async () => {
      trackPromise(
        axios
          .get(`${API_BASE}/search/${formatSearchTerm(searchTerm)}`)
          .then((response) => {
            setSearchResultArt(response.data.artworks);
          })
          .catch((error) => {
            console.log(error);
          })
      );
    };
    getSearch();
  };

  const handleClear = () => {
    setSearchTerm("");
    setInSearch(false);
    setSearchResultArt([]);
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
          <p className="ResultsFound">{searchResultArt.length} results found</p>
        </div>
      )}
      <LoadingIndicator />
      <div className="ArtInMainContent">
        {inSearch ? (
          <SearchedArtworks
            searchResultArt={searchResultArt}
            userId={userId}
            userGalleryArt={userGalleryArt}
            triggerGetUserArt={triggerGetUserArt}
            setTriggerGetUserArt={setTriggerGetUserArt}
          />
        ) : (
          <FeaturedArtworks
            featuredArt={featuredArt}
            userId={userId}
            userGalleryArt={userGalleryArt}
            triggerGetUserArt={triggerGetUserArt}
            setTriggerGetUserArt={setTriggerGetUserArt}
          />
        )}
      </div>
    </div>
  );
}

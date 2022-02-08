import { useState } from "react";
import "../styles/Artworks.css";
import { Transition } from "react-transition-group";
import { ISearchedArtwork, IUserArt } from "../utils/Interfaces";
import ArtworkLoggedInSearch from "./artworkComponents/ArtworkLoggedInSearch";
import ArtworkSearch from "./artworkComponents/ArtworkSearch";
import SearchPanel from "./panels/SearchPanel";
import SearchPanelLoggedIn from "./panels/SearchPanelLoggedIn";

interface SearchedArtworksProps {
  searchResultArt: ISearchedArtwork[];
  userId: number | null;
  userGalleryArt: IUserArt[];
  triggerGetUserArt: boolean;
  setTriggerGetUserArt: (input: boolean) => void;
}

export default function SearchedArtworks({
  searchResultArt,
  userId,
  userGalleryArt,
  triggerGetUserArt,
  setTriggerGetUserArt,
}: SearchedArtworksProps): JSX.Element {
  const [selectedArtworkSearch, setSelectedArtworkSearch] =
    useState<ISearchedArtwork | null>(null);
  const [showSearchPanel, setShowSearchPanel] = useState<boolean>(false);

  const pickSearchArtwork = (artwork: ISearchedArtwork) => {
    setSelectedArtworkSearch(artwork);
    setShowSearchPanel(true);
  };

  const closeSearchPanel = () => {
    setShowSearchPanel(false);
    setSelectedArtworkSearch(null);
  };

  const searchResultArtElements =
    userId == null
      ? searchResultArt.map((artwork) => (
          <ArtworkSearch
            key={artwork.objectID}
            artwork={artwork}
            pickSearchArtwork={pickSearchArtwork}
          />
        ))
      : searchResultArt.map((artwork) => (
          <ArtworkLoggedInSearch
            key={artwork.objectID}
            artwork={artwork}
            userId={userId}
            userGalleryArt={userGalleryArt}
            triggerGetUserArt={triggerGetUserArt}
            setTriggerGetUserArt={setTriggerGetUserArt}
            pickSearchArtwork={pickSearchArtwork}
          />
        ));

  return (
    <div className="FeaturedArtworks">
      <div className="Artworks">{searchResultArtElements}</div>
      {selectedArtworkSearch !== null && userId === null && (
        <Transition in={showSearchPanel} timeout={300}>
          {(state) => (
            <SearchPanel
              artwork={selectedArtworkSearch}
              closeSearchPanel={closeSearchPanel}
            />
          )}
        </Transition>
      )}
      {selectedArtworkSearch !== null && userId !== null && (
        <Transition in={showSearchPanel} timeout={300}>
          {(state) => (
            <SearchPanelLoggedIn
              artwork={selectedArtworkSearch}
              closeSearchPanel={closeSearchPanel}
              userId={userId}
              userGalleryArt={userGalleryArt}
              triggerGetUserArt={triggerGetUserArt}
              setTriggerGetUserArt={setTriggerGetUserArt}
            />
          )}
        </Transition>
      )}
    </div>
  );
}

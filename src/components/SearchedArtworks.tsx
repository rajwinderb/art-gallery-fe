import "../styles/Artworks.css";
import { ISearchedArtwork, IUserArt } from "../utils/Interfaces";
import ArtworkLoggedInSearch from "./ArtworkLoggedInSearch";
import ArtworkSearch from "./ArtworkSearch";

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
  const searchResultArtElements =
    userId == null
      ? searchResultArt.map((artwork) => (
          <ArtworkSearch key={artwork.objectID} artwork={artwork} />
        ))
      : searchResultArt.map((artwork) => (
          <ArtworkLoggedInSearch
            key={artwork.objectID}
            artwork={artwork}
            search={true}
            userId={userId}
            userGalleryArt={userGalleryArt}
            triggerGetUserArt={triggerGetUserArt}
            setTriggerGetUserArt={setTriggerGetUserArt}
          />
        ));

  return (
    <div className="FeaturedArtworks">
      <div className="Artworks">{searchResultArtElements}</div>
    </div>
  );
}

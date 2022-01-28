import "../styles/Artworks.css";
import { ISearchedArtwork, IUserArt } from "../utils/Interfaces";
import Artwork from "./Artwork";
import ArtworkLoggedIn from "./ArtworkLoggedIn";

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
          <Artwork key={artwork.objectID} artwork={artwork} search={true} />
        ))
      : searchResultArt.map((artwork) => (
          <ArtworkLoggedIn
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

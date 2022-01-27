import "../styles/Artworks.css";
import { IArtwork, IUserArt } from "../utils/Interfaces";
import Artwork from "./Artwork";
import ArtworkLoggedIn from "./ArtworkLoggedIn";

interface FeaturedArtworksProps {
  featuredArt: IArtwork[];
  userId: number | null;
  userGalleryArt: IUserArt[];
  triggerGetUserArt: boolean;
  setTriggerGetUserArt: (input: boolean) => void;
}

export default function FeaturedArtworks({
  featuredArt,
  userId,
  userGalleryArt,
  triggerGetUserArt,
  setTriggerGetUserArt,
}: FeaturedArtworksProps): JSX.Element {
  const featuredArtElements =
    userId === null
      ? featuredArt.map((artwork) => (
          <Artwork key={artwork.id} artwork={artwork} search={false} />
        ))
      : featuredArt.map((artwork) => (
          <ArtworkLoggedIn
            key={artwork.id}
            artwork={artwork}
            search={false}
            userId={userId}
            userGalleryArt={userGalleryArt}
            triggerGetUserArt={triggerGetUserArt}
            setTriggerGetUserArt={setTriggerGetUserArt}
          />
        ));

  return (
    <div className="FeaturedArtworks">
      <h2>Featured Artworks</h2>
      <div className="Artworks">{featuredArtElements}</div>
    </div>
  );
}

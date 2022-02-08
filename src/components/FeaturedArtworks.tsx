import { useState } from "react";
import "../styles/Artworks.css";
import { IArtwork, IUserArt } from "../utils/Interfaces";
import Artwork from "./artworkComponents/Artwork";
import ArtworkLoggedInFeatured from "./artworkComponents/ArtworkLoggedInFeatured";
import { Transition } from "react-transition-group";
import FeaturedPanel from "./panels/FeaturedPanel";
import FeaturedPanelLoggedIn from "./panels/FeaturedPanelLoggedIn";

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
  const [selectedArtworkFeatured, setSelectedArtworkFeatured] =
    useState<IArtwork | null>(null);
  const [showFeaturedPanel, setShowFeaturedPanel] = useState<boolean>(false);

  const pickFeaturedArtwork = (artwork: IArtwork) => {
    setSelectedArtworkFeatured(artwork);
    setShowFeaturedPanel(true);
  };

  const closeFeaturedPanel = () => {
    setShowFeaturedPanel(false);
    setSelectedArtworkFeatured(null);
  };

  const featuredArtElements =
    userId === null
      ? featuredArt.map((artwork) => (
          <Artwork
            key={artwork.id}
            artwork={artwork}
            pickFeaturedArtwork={pickFeaturedArtwork}
          />
        ))
      : featuredArt.map((artwork) => (
          <ArtworkLoggedInFeatured
            key={artwork.id}
            artwork={artwork}
            userId={userId}
            userGalleryArt={userGalleryArt}
            triggerGetUserArt={triggerGetUserArt}
            setTriggerGetUserArt={setTriggerGetUserArt}
            pickFeaturedArtwork={pickFeaturedArtwork}
          />
        ));

  return (
    <div className="FeaturedArtworks">
      <h2>Featured Artworks</h2>
      <div className="Artworks">{featuredArtElements}</div>
      {selectedArtworkFeatured !== null && userId === null && (
        <Transition in={showFeaturedPanel} timeout={300}>
          {(state) => (
            <FeaturedPanel
              artwork={selectedArtworkFeatured}
              closeFeaturedPanel={closeFeaturedPanel}
            />
          )}
        </Transition>
      )}
      {selectedArtworkFeatured !== null && userId !== null && (
        <Transition in={showFeaturedPanel} timeout={300}>
          {(state) => (
            <FeaturedPanelLoggedIn
              artwork={selectedArtworkFeatured}
              closeFeaturedPanel={closeFeaturedPanel}
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

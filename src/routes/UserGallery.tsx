import "../styles/Artworks.css";
import { useNavigate } from "react-router-dom";
import { IUserArt } from "../utils/Interfaces";
import { useState } from "react";
import ArtworkUserGallery from "../components/artworkComponents/ArtworkUserGallery";
import { Transition } from "react-transition-group";
import UserGalleryPanel from "../components/panels/UserGalleryPanel";

interface UserGalleryProps {
  userId: number | null;
  userGalleryArt: IUserArt[];
  triggerGetUserArt: boolean;
  setTriggerGetUserArt: (input: boolean) => void;
}

export default function UserGallery({
  userId,
  userGalleryArt,
  triggerGetUserArt,
  setTriggerGetUserArt,
}: UserGalleryProps): JSX.Element {
  useNavigate();
  const [selectedArtworkUserGallery, setSelectedArtworkUserGallery] =
    useState<IUserArt | null>(null);
  const [showUserGalleryPanel, setShowUserGalleryPanel] =
    useState<boolean>(false);

  const pickUserGalleryArtwork = (artwork: IUserArt) => {
    setSelectedArtworkUserGallery(artwork);
    setShowUserGalleryPanel(true);
  };

  const closeUserGalleryPanel = () => {
    setShowUserGalleryPanel(false);
    setSelectedArtworkUserGallery(null);
  };

  const userGalleryArtElements =
    userId != null &&
    userGalleryArt.map((artwork) => (
      <ArtworkUserGallery
        key={artwork.id}
        artwork={artwork}
        userId={userId}
        userGalleryArt={userGalleryArt}
        triggerGetUserArt={triggerGetUserArt}
        setTriggerGetUserArt={setTriggerGetUserArt}
        pickUserGalleryArtwork={pickUserGalleryArtwork}
      />
    ));

  return (
    <div className="Artworks">
      {userGalleryArt.length === 0 ? (
        <p>No Art Added</p>
      ) : (
        userGalleryArtElements
      )}
      {selectedArtworkUserGallery !== null && userId !== null && (
        <Transition in={showUserGalleryPanel} timeout={300}>
          {(state) => (
            <UserGalleryPanel
              artwork={selectedArtworkUserGallery}
              closeUserGalleyPanel={closeUserGalleryPanel}
            />
          )}
        </Transition>
      )}
    </div>
  );
}

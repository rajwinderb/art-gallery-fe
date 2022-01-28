import "../styles/Artworks.css";
import { useNavigate } from "react-router-dom";
import ArtworkLoggedIn from "../components/ArtworkLoggedIn";
import { IUserArt } from "../utils/Interfaces";

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

  const userGalleryArtElements =
    userId != null &&
    userGalleryArt.map((artwork) => (
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
    <div className="Artworks">
      {userGalleryArt.length === 0 ? (
        <p>No Art Added</p>
      ) : (
        userGalleryArtElements
      )}
    </div>
  );
}

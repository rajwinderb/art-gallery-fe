import axios from "axios";
import "../../styles/Artwork.css";
import { addArtToUserGalleryFeatured } from "../../utils/addArtToUserGalleryFeatured";
import { API_BASE } from "../../utils/APIFragments";
import { IUserArt } from "../../utils/Interfaces";
import { inUserGallery } from "../../utils/inUserGallery";

interface ArtworkLoggedInFeaturedProps {
  artwork: IUserArt;
  userId: number;
  userGalleryArt: IUserArt[];
  triggerGetUserArt: boolean;
  setTriggerGetUserArt: (input: boolean) => void;
  pickUserGalleryArtwork: (artwork: IUserArt) => void;
}

export default function ArtworkLoggedInFeatured({
  artwork,
  userId,
  userGalleryArt,
  triggerGetUserArt,
  setTriggerGetUserArt,
  pickUserGalleryArtwork,
}: ArtworkLoggedInFeaturedProps): JSX.Element {
  const handleAdd = () => {
    addArtToUserGalleryFeatured(
      userId,
      artwork.id,
      triggerGetUserArt,
      setTriggerGetUserArt
    );
  };

  const handleRemove = async () => {
    await axios({
      method: "delete",
      url: `${API_BASE}/userart/${userId}`,
      data: { artid: artwork.id },
    })
      .then((response) => {
        setTriggerGetUserArt(!triggerGetUserArt);
      })
      .catch((error) => console.log(error));
  };

  const addButton = (
    <button type="button" onClick={handleAdd}>
      {" "}
      + Add to Art Gallery{" "}
    </button>
  );
  const removeButton = (
    <button type="button" onClick={handleRemove}>
      {" "}
      - Remove from Art Gallery{" "}
    </button>
  );

  const galleryButton = inUserGallery(artwork.id, userGalleryArt)
    ? removeButton
    : addButton;

  return (
    <div className="Artwork">
      <img
        src={artwork.primaryimagesmall}
        alt={artwork.title}
        className="ArtImage"
        onClick={() => pickUserGalleryArtwork(artwork)}
      />
      <h3 className="ArtTitle">{artwork.title}</h3>
      <p className="Artist">{artwork.artistdisplayname}</p>
      {galleryButton}
    </div>
  );
}

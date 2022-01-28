import axios from "axios";
import "../styles/Artwork.css";
import { addArtToUserGallery } from "../utils/addArtToUserGallery";
import { API_BASE } from "../utils/APIFragments";
import { IArtwork, ISearchedArtwork, IUserArt } from "../utils/Interfaces";
import { inUserGallery } from "../utils/inUserGallery";
import { reformatToAddArtwork } from "../utils/reformatToAddArtwork";

interface ArtworkLoggedInProps {
  artwork: IArtwork | ISearchedArtwork;
  search: boolean;
  userId: number;
  userGalleryArt: IUserArt[];
  triggerGetUserArt: boolean;
  setTriggerGetUserArt: (input: boolean) => void;
}

export default function ArtworkLoggedIn({
  artwork,
  search,
  userId,
  userGalleryArt,
  triggerGetUserArt,
  setTriggerGetUserArt,
}: ArtworkLoggedInProps): JSX.Element {
  const handleAdd = () => {
    addArtToUserGallery(
      userId,
      reformatToAddArtwork(artwork),
      triggerGetUserArt,
      setTriggerGetUserArt,
      search
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

  let galleryButton: JSX.Element = <></>;

  if (artwork.objectID) {
    galleryButton = inUserGallery(artwork.objectID, userGalleryArt)
      ? removeButton
      : addButton;
  }
  if (artwork.id) {
    galleryButton = inUserGallery(artwork.id, userGalleryArt)
      ? removeButton
      : addButton;
  }

  return (
    <div className="Artwork">
      <img
        src={search ? artwork.primaryImageSmall : artwork.primaryimagesmall}
        alt={artwork.title}
        className="ArtImage"
      />
      <h3 className="ArtTitle">{artwork.title}</h3>
      <p className="Artist">
        {search ? artwork.artistDisplayName : artwork.artistdisplayname}
      </p>
      {galleryButton}
    </div>
  );
}

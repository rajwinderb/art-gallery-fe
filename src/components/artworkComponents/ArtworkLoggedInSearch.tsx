import axios from "axios";
import "../../styles/Artwork.css";
import { addArtToUserGallerySearch } from "../../utils/addArtToUserGallerySearch";
import { API_BASE } from "../../utils/APIFragments";
import { ISearchedArtwork, IUserArt } from "../../utils/Interfaces";
import { inUserGallery } from "../../utils/inUserGallery";
import { reformatToAddArtwork } from "../../utils/reformatToAddArtwork";

interface ArtworkLoggedInSearchProps {
  artwork: ISearchedArtwork;
  userId: number;
  userGalleryArt: IUserArt[];
  triggerGetUserArt: boolean;
  setTriggerGetUserArt: (input: boolean) => void;
  pickSearchArtwork: (artwork: ISearchedArtwork) => void;
}

export default function ArtworkLoggedInSearch({
  artwork,
  userId,
  userGalleryArt,
  triggerGetUserArt,
  setTriggerGetUserArt,
  pickSearchArtwork,
}: ArtworkLoggedInSearchProps): JSX.Element {
  const handleAdd = () => {
    addArtToUserGallerySearch(
      userId,
      reformatToAddArtwork(artwork),
      triggerGetUserArt,
      setTriggerGetUserArt
    );
  };

  const handleRemove = async () => {
    await axios({
      method: "delete",
      url: `${API_BASE}/userart/${userId}`,
      data: { artid: artwork.objectID },
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

  galleryButton = inUserGallery(artwork.objectID, userGalleryArt)
    ? removeButton
    : addButton;

  return (
    <div className="Artwork">
      <img
        src={artwork.primaryImageSmall}
        alt={artwork.title}
        className="ArtImage"
        onClick={() => pickSearchArtwork(artwork)}
      />
      <h3 className="ArtTitle">{artwork.title}</h3>
      <p className="Artist">{artwork.artistDisplayName}</p>
      {galleryButton}
    </div>
  );
}

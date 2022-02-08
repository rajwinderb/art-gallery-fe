import axios from "axios";
import "../../styles/Panel.css";
import { addArtToUserGalleryFeatured } from "../../utils/addArtToUserGalleryFeatured";
import { API_BASE } from "../../utils/APIFragments";
import { IUserArt } from "../../utils/Interfaces";
import { inUserGallery } from "../../utils/inUserGallery";

interface UserGalleyPanelProps {
  artwork: IUserArt;
  closeUserGalleryPanel: () => void;
  userId: number;
  userGalleryArt: IUserArt[];
  triggerGetUserArt: boolean;
  setTriggerGetUserArt: (input: boolean) => void;
}

export default function UserGalleryPanel({
  artwork,
  closeUserGalleryPanel,
  userId,
  userGalleryArt,
  triggerGetUserArt,
  setTriggerGetUserArt,
}: UserGalleyPanelProps): JSX.Element {
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
    <button type="button" onClick={handleAdd} className="PanelArtGalleryButton">
      {" "}
      + Add to Art Gallery{" "}
    </button>
  );
  const removeButton = (
    <button
      type="button"
      onClick={handleRemove}
      className="PanelArtGalleryButton"
    >
      {" "}
      - Remove from Art Gallery{" "}
    </button>
  );

  const galleryButton = inUserGallery(artwork.id, userGalleryArt)
    ? removeButton
    : addButton;

  return (
    <div className="PanelBackgroundLoggedIn">
      <div className="PanelContainerLoggedIn">
        <div className="ButtonContainer">
          <button
            onClick={() => closeUserGalleryPanel()}
            className="CloseButton"
          >
            <i className="fas fa-times"></i>
          </button>
          {galleryButton}
        </div>
        <img src={artwork.primaryimagesmall} alt={artwork.title} />
        <h3>{artwork.title}</h3>
        <p className="ObjectDate">{artwork.objectdate}</p>
        <p className="Artist">{artwork.artistdisplayname}</p>
        <p className="AboutArtist">
          About {artwork.artistdisplayname}: {artwork.artistdisplaybio}
        </p>
        <p className="ClassificationDepartment">
          {`${artwork.classification} | ${artwork.department}`}
        </p>
        <p className="Medium">{artwork.medium}</p>
      </div>
    </div>
  );
}

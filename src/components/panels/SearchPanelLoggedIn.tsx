import axios from "axios";
import "../../styles/Panel.css";
import { addArtToUserGallerySearch } from "../../utils/addArtToUserGallerySearch";
import { API_BASE } from "../../utils/APIFragments";
import { ISearchedArtwork, IUserArt } from "../../utils/Interfaces";
import { inUserGallery } from "../../utils/inUserGallery";
import { reformatToAddArtwork } from "../../utils/reformatToAddArtwork";

interface SearchPanelLoggedInProps {
  artwork: ISearchedArtwork;
  closeSearchPanel: () => void;
  userId: number;
  userGalleryArt: IUserArt[];
  triggerGetUserArt: boolean;
  setTriggerGetUserArt: (input: boolean) => void;
}

export default function SearchPanelLoggedIn({
  artwork,
  closeSearchPanel,
  userId,
  userGalleryArt,
  triggerGetUserArt,
  setTriggerGetUserArt,
}: SearchPanelLoggedInProps): JSX.Element {
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

  let galleryButton: JSX.Element = <></>;

  galleryButton = inUserGallery(artwork.objectID, userGalleryArt)
    ? removeButton
    : addButton;

  return (
    <div className="PanelBackgroundLoggedIn">
      <div className="PanelContainerLoggedIn">
        <div className="ButtonContainer">
          <button onClick={() => closeSearchPanel()} className="CloseButton">
            <i className="fas fa-times"></i>
          </button>
          {galleryButton}
        </div>
        <img src={artwork.primaryImageSmall} alt={artwork.title} />
        <h3>{artwork.title}</h3>
        <p className="ObjectDate">{artwork.objectDate}</p>
        <p className="Artist">{artwork.artistDisplayName}</p>
        <p className="AboutArtist">
          About {artwork.artistDisplayName}: {artwork.artistDisplayBio}
        </p>
        <p className="ClassificationDepartment">
          {`${artwork.classification} | ${artwork.department}`}
        </p>
        <p className="Medium">{artwork.medium}</p>
      </div>
    </div>
  );
}

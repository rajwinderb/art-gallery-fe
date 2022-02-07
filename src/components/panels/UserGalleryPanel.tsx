import "../../styles/Panel.css";
import { IUserArt } from "../../utils/Interfaces";

interface UserGalleyPanelProps {
  artwork: IUserArt;
  closeUserGalleryPanel: () => void;
}

export default function UserGalleryPanel({
  artwork,
  closeUserGalleryPanel,
}: UserGalleyPanelProps): JSX.Element {
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
        </div>
        <img src={artwork.primaryimagesmall} alt={artwork.title} />
        <h3>{artwork.title}</h3>
        <p className="ObjectDate">{artwork.objectdate}</p>
        <p className="Artist">{artwork.artistdisplayname}</p>
        <p className="AboutArtist">
          About {artwork.artistdisplayname}: {artwork.artistdisplaybio}
        </p>
        <p className="ClassificationDepartmentMedium">
          {`${artwork.classification} | ${artwork.department} | ${artwork.medium}`}
        </p>
      </div>
    </div>
  );
}

import "../../styles/Panel.css";
import { IArtwork } from "../../utils/Interfaces";

interface FeaturedPanelLoggedInProps {
  artwork: IArtwork;
  closeFeaturedPanel: () => void;
}

export default function FeaturedPanelLoggedIn({
  artwork,
  closeFeaturedPanel,
}: FeaturedPanelLoggedInProps): JSX.Element {
  return (
    <div className="PanelBackgroundLoggedIn">
      <div className="PanelContainerLoggedIn">
        <div className="ButtonContainer">
          <button onClick={() => closeFeaturedPanel()} className="CloseButton">
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

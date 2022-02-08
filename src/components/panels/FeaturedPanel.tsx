import "../../styles/Panel.css";
import { IArtwork } from "../../utils/Interfaces";

interface FeaturedPanelProps {
  artwork: IArtwork;
  closeFeaturedPanel: () => void;
}

export default function FeaturedPanel({
  artwork,
  closeFeaturedPanel,
}: FeaturedPanelProps): JSX.Element {
  return (
    <div className="PanelBackground">
      <div className="PanelContainer">
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
        <p className="ClassificationDepartment">
          {`${artwork.classification} | ${artwork.department}`}
        </p>
        <p className="Medium">{artwork.medium}</p>
      </div>
    </div>
  );
}

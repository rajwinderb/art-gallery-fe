import "../../styles/Panel.css";
import { ISearchedArtwork } from "../../utils/Interfaces";

interface SearchPanelProps {
  artwork: ISearchedArtwork;
  closeSearchPanel: () => void;
}

export default function SearchPanel({
  artwork,
  closeSearchPanel,
}: SearchPanelProps): JSX.Element {
  return (
    <div className="PanelBackground">
      <div className="PanelContainer">
        <div className="ButtonContainer">
          <button onClick={() => closeSearchPanel()} className="CloseButton">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <img src={artwork.primaryImageSmall} alt={artwork.title} />
        <h3>{artwork.title}</h3>
        <p className="ObjectDate">{artwork.objectDate}</p>
        <p className="Artist">{artwork.artistDisplayName}</p>
        <p className="AboutArtist">
          About {artwork.artistDisplayName}: {artwork.artistDisplayBio}
        </p>
        <p className="ClassificationDepartmentMedium">
          {`${artwork.classification} | ${artwork.department} | ${artwork.medium}`}
        </p>
      </div>
    </div>
  );
}

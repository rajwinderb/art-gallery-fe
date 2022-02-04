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
        <button onClick={() => closeSearchPanel()}>close</button>
        <img src={artwork.primaryImageSmall} alt={artwork.title} />
        <h3>{artwork.title}</h3>
        <p className="Artist">{artwork.artistDisplayName}</p>
      </div>
    </div>
  );
}

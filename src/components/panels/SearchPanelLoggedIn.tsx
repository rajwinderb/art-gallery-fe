import "../../styles/Panel.css";
import { ISearchedArtwork } from "../../utils/Interfaces";

interface SearchPanelLoggedInProps {
  artwork: ISearchedArtwork;
  closeSearchPanel: () => void;
}

export default function SearchPanelLoggedIn({
  artwork,
  closeSearchPanel,
}: SearchPanelLoggedInProps): JSX.Element {
  return (
    <div className="PanelBackgroundLoggedIn">
      <div className="PanelContainerLoggedIn">
        <button onClick={() => closeSearchPanel()}>close</button>
        <img src={artwork.primaryImageSmall} alt={artwork.title} />
        <h3>{artwork.title}</h3>
        <p className="Artist">{artwork.artistDisplayName}</p>
      </div>
    </div>
  );
}

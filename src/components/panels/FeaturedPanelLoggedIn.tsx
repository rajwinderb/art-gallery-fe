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
        <button onClick={() => closeFeaturedPanel()}>close</button>
        <img src={artwork.primaryimagesmall} alt={artwork.title} />
        <h3>{artwork.title}</h3>
        <p className="Artist">{artwork.artistdisplayname}</p>
      </div>
    </div>
  );
}

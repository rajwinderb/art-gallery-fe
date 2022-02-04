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
        <button onClick={() => closeFeaturedPanel()}>close</button>
        <img src={artwork.primaryimagesmall} alt={artwork.title} />
        <h3>{artwork.title}</h3>
        <p className="Artist">{artwork.artistdisplayname}</p>
      </div>
    </div>
  );
}

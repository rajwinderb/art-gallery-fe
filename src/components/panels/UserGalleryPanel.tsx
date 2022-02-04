import "../../styles/Panel.css";
import { IUserArt } from "../../utils/Interfaces";

interface FeaturedPanelProps {
  artwork: IUserArt;
  closeFeaturedPanel: () => void;
}

export default function UserGalleryPanel({
  artwork,
  closeFeaturedPanel,
}: FeaturedPanelProps): JSX.Element {
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

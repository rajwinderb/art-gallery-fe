import "../../styles/Panel.css";
import { IUserArt } from "../../utils/Interfaces";

interface UserGalleyPanelProps {
  artwork: IUserArt;
  closeUserGalleyPanel: () => void;
}

export default function UserGalleryPanel({
  artwork,
  closeUserGalleyPanel,
}: UserGalleyPanelProps): JSX.Element {
  return (
    <div className="PanelBackgroundLoggedIn">
      <div className="PanelContainerLoggedIn">
        <button onClick={() => closeUserGalleyPanel()}>close</button>
        <img src={artwork.primaryimagesmall} alt={artwork.title} />
        <h3>{artwork.title}</h3>
        <p className="Artist">{artwork.artistdisplayname}</p>
      </div>
    </div>
  );
}

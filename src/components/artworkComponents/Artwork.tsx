import "../../styles/Artwork.css";
import { IArtwork } from "../../utils/Interfaces";

interface ArtworkProps {
  artwork: IArtwork;
}

export default function Artwork({ artwork }: ArtworkProps): JSX.Element {
  return (
    <div className="Artwork">
      <img
        src={artwork.primaryimagesmall}
        alt={artwork.title}
        className="ArtImage"
      />
      <h3 className="ArtTitle">{artwork.title}</h3>
      <p className="Artist">{artwork.artistdisplayname}</p>
    </div>
  );
}

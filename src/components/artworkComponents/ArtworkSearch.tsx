import "../../styles/Artwork.css";
import { ISearchedArtwork } from "../../utils/Interfaces";

interface ArtworkSearchProps {
  artwork: ISearchedArtwork;
}

export default function Artwork({ artwork }: ArtworkSearchProps): JSX.Element {
  return (
    <div className="Artwork">
      <img
        src={artwork.primaryImageSmall}
        alt={artwork.title}
        className="ArtImage"
      />
      <h3 className="ArtTitle">{artwork.title}</h3>
      <p className="Artist">{artwork.artistDisplayName}</p>
    </div>
  );
}

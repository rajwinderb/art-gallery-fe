import "../../styles/Artwork.css";
import { IArtwork } from "../../utils/Interfaces";

interface ArtworkProps {
  artwork: IArtwork;
  pickFeaturedArtwork: (artwork: IArtwork) => void;
}

export default function Artwork({
  artwork,
  pickFeaturedArtwork,
}: ArtworkProps): JSX.Element {
  return (
    <div className="Artwork">
      <img
        src={artwork.primaryimagesmall}
        alt={artwork.title}
        className="ArtImage"
        onClick={() => pickFeaturedArtwork(artwork)}
      />
      <h3 className="ArtTitle">{artwork.title}</h3>
      <p className="Artist">{artwork.artistdisplayname}</p>
    </div>
  );
}

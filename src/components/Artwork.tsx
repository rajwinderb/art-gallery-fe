import "../styles/Artwork.css";
import { IArtwork, ISearchedArtwork } from "../utils/Interfaces";

interface ArtworkProps {
  artwork: IArtwork | ISearchedArtwork;
  search: boolean;
}

export default function Artwork({
  artwork,
  search,
}: ArtworkProps): JSX.Element {
  return (
    <div className="Artwork">
      <img
        src={search ? artwork.primaryImageSmall : artwork.primaryimagesmall}
        alt={artwork.title}
        className="ArtImage"
      />
      <h3 className="ArtTitle">{artwork.title}</h3>
      <p className="Artist">
        {search ? artwork.artistDisplayName : artwork.artistdisplayname}
      </p>
    </div>
  );
}

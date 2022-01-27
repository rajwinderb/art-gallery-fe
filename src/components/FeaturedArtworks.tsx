import "../styles/Artworks.css";
import { IArtwork } from "../utils/Interfaces";
import Artwork from "./Artwork";

interface FeaturedArtworksProps {
  featuredArt: IArtwork[];
}

export default function FeaturedArtworks({
  featuredArt,
}: FeaturedArtworksProps): JSX.Element {
  const featuredArtElements = featuredArt.map((artwork) => (
    <Artwork key={artwork.id} artwork={artwork} search={false} />
  ));

  return (
    <div className="FeaturedArtworks">
      <h2>Featured Artworks</h2>
      <div className="Artworks">{featuredArtElements}</div>
    </div>
  );
}

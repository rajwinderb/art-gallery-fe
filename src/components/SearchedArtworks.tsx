import "../styles/Artworks.css";
import { ISearchedArtwork } from "../utils/Interfaces";
import Artwork from "./Artwork";

interface SearchedArtworksProps {
  searchResultArt: ISearchedArtwork[];
}

export default function SearchedArtworks({
  searchResultArt,
}: SearchedArtworksProps): JSX.Element {
  const searchResultArtElements = searchResultArt.map((artwork) => (
    <Artwork key={artwork.objectID} artwork={artwork} search={true} />
  ));

  return (
    <div className="FeaturedArtworks">
      <div className="Artworks">{searchResultArtElements}</div>
    </div>
  );
}

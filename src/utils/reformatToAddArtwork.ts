import { IPostArtwork, ISearchedArtwork } from "./Interfaces";

export function reformatToAddArtwork(artwork: ISearchedArtwork): IPostArtwork {
  const postArtwork = {
    id: artwork.objectID,
    primaryImage: artwork.primaryImage,
    primaryImageSmall: artwork.primaryImageSmall,
    department: artwork.department,
    objectName: artwork.objectName,
    title: artwork.title,
    culture: artwork.culture,
    period: artwork.period,
    dynasty: artwork.dynasty,
    artistPrefix: artwork.artistPrefix,
    artistDisplayName: artwork.artistDisplayName,
    artistDisplayBio: artwork.artistDisplayBio,
    artistGender: artwork.artistGender,
    objectDate: artwork.objectDate,
    medium: artwork.medium,
    country: artwork.country,
    classification: artwork.classification,
    linkResource: artwork.linkResource,
    featured: false,
    isHighlight: artwork.isHighlight,
    tags: artwork.tags.map((tag) => {
      return tag.term;
    }),
  };
  return postArtwork;
}

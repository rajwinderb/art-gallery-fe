import { IArtwork, IPostArtwork, ISearchedArtwork } from "./Interfaces";

export function reformatToAddArtwork(
  artwork: IArtwork | ISearchedArtwork
): IPostArtwork {
  const postArtwork = {
    id: artwork.objectID ? artwork.objectID : artwork.id,
    primaryImage: artwork.primaryImage
      ? artwork.primaryImage
      : artwork.primaryimage,
    primaryImageSmall: artwork.primaryImageSmall
      ? artwork.primaryImageSmall
      : artwork.primaryimagesmall,
    department: artwork.department,
    objectName: artwork.objectName ? artwork.objectName : artwork.objectname,
    title: artwork.title,
    culture: artwork.culture,
    period: artwork.period,
    dynasty: artwork.dynasty,
    artistPrefix: "",
    artistDisplayName: artwork.artistDisplayName
      ? artwork.artistDisplayName
      : artwork.artistdisplayname,
    artistDisplayBio: artwork.artistDisplayBio
      ? artwork.artistDisplayBio
      : artwork.artistdisplaybio,
    artistGender: "",
    objectDate: artwork.objectDate ? artwork.objectDate : artwork.objectdate,
    medium: artwork.medium,
    country: artwork.country,
    classification: artwork.classification,
    linkResource: "",
    featured: false,
    isHighlight: false,
    tags: artwork.tags.map((tag) => {
      if (tag.id === undefined) {
        return tag.term;
      } else {
        return tag.tag;
      }
    }),
  };
  return postArtwork;
}

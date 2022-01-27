import axios from "axios";
import { API_BASE } from "./APIFragments";
import { IPostArtwork } from "./Interfaces";

export function addArtToUserGallery(
  userId: number,
  artwork: IPostArtwork,
  triggerGetUserArt: boolean,
  setTriggerGetUserArt: (input: boolean) => void,
  search: boolean
): void {
  const postUserGallery = async (userid: number, artid: number | undefined) => {
    await axios
      .post(`${API_BASE}/userart/${userid}`, {
        artid: artid,
        isFavourite: false,
      })
      .then((response) => {
        console.log(response.data.new_user_art);
        console.log(
          "add to user gallery",
          userid,
          artid,
          response.data.new_user_art
        );
        setTriggerGetUserArt(!triggerGetUserArt);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postArtwork = async (artwork: IPostArtwork) => {
    console.log({
      id: artwork.id,
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
      tags: artwork.tags,
    });
    await axios
      .post(`${API_BASE}/artworks`, {
        id: artwork.id,
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
        tags: artwork.tags,
      })
      .then((response) => {
        console.log("new art added to db", response.data.new_artwork_id);
        postUserGallery(userId, artwork.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (search) {
    postArtwork(artwork);
  } else {
    postUserGallery(userId, artwork.id);
  }
}

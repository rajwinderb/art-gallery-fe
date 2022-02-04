import axios from "axios";
import { API_BASE } from "./APIFragments";
import { IPostArtwork } from "./Interfaces";

export async function addArtToUserGallerySearch(
  userId: number,
  artwork: IPostArtwork,
  triggerGetUserArt: boolean,
  setTriggerGetUserArt: (input: boolean) => void
): Promise<void> {
  const postUserGallery = async (userid: number, artid: number | undefined) => {
    await axios
      .post(`${API_BASE}/userart/${userid}`, {
        artid: artid,
        isFavourite: false,
      })
      .then((response) => {
        setTriggerGetUserArt(!triggerGetUserArt);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postArtwork = async (artwork: IPostArtwork) => {
    await axios
      .post(`${API_BASE}/artworks`, artwork)
      .then((response) => {
        postUserGallery(userId, artwork.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  await postArtwork(artwork);
  postUserGallery(userId, artwork.id);
}

import axios from "axios";
import { API_BASE } from "../APIFragments";
import { IPostArtwork } from "../Interfaces";

export async function addArtToUserGallerySearch(
  userId: number,
  artwork: IPostArtwork,
  triggerGetUserArt: boolean,
  setTriggerGetUserArt: (input: boolean) => void,
  postToUserGallery: (
    userId: number,
    artId: number,
    triggerGetUserArt: boolean,
    setTriggerGetUserArt: (input: boolean) => void
  ) => void
): Promise<void> {
  const postArtwork = async (artwork: IPostArtwork) => {
    await axios
      .post(`${API_BASE}/artworks`, artwork)
      .then((response) => {
        postToUserGallery(
          userId,
          response.data.new_artwork_id,
          triggerGetUserArt,
          setTriggerGetUserArt
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  await postArtwork(artwork);
}

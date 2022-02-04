import axios from "axios";
import { API_BASE } from "./APIFragments";

export function addArtToUserGalleryFeatured(
  userId: number,
  artId: number,
  triggerGetUserArt: boolean,
  setTriggerGetUserArt: (input: boolean) => void
): void {
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

  postUserGallery(userId, artId);
}

import { IUserArt } from "./Interfaces";

export function inUserGallery(
  artId: number,
  userGalleryArt: IUserArt[]
): boolean {
  const filtered = userGalleryArt.filter((artwork) => artwork.id === artId);
  return filtered.length === 0 ? false : true;
}

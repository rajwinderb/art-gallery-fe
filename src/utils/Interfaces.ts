import p5Types from "p5";

export interface IUser {
  id: number;
  username: string;
}

export interface ITag {
  id: number;
  tag: string;
  AAT_URL?: string;
  Wikidata_URL?: string;
  term?: string;
}

export interface ISearchTag {
  AAT_URL: string;
  Wikidata_URL: string;
  term: string;
  id?: number;
  tag?: string;
}

export interface IArtwork {
  id: number;
  artistdisplaybio: string;
  artistdisplayname: string;
  artistgender: string | null;
  artistprefix: string | null;
  classification: string | null;
  country: string | null;
  culture: string | null;
  department: string;
  dynasty: string | null;
  featured: boolean;
  ishighlight: boolean;
  linkresource: string | null;
  medium: string | null;
  objectdate: string | null;
  objectname: string;
  period: string | null;
  primaryimage: string;
  primaryimagesmall: string;
  tags: ITag[] | null;
  title: string;
}

export interface ISearchedArtwork {
  id?: number;
  objectID: number;
  artistDisplayBio: string;
  artistDisplayName: string;
  artistGender: string | null;
  artistPrefix: string | null;
  classification: string;
  country: string | null;
  culture: string | null;
  department: string;
  dynasty: string | null;
  isHighlight: boolean;
  linkResource: string | null;
  medium: string | null;
  objectDate: string | null;
  objectName: string;
  period: string | null;
  primaryImage: string;
  primaryImageSmall: string;
  tags: ISearchTag[] | null;
  title: string;
}

export interface IUserArt extends IArtwork {
  isfavourite: boolean;
}

export interface IPostArtwork {
  id: number | undefined;
  primaryImage: string | undefined;
  primaryImageSmall: string | undefined;
  department: string;
  objectName: string | undefined;
  title: string | null;
  culture: string | null;
  period: string | null;
  dynasty: string | null;
  artistPrefix: string | null | undefined;
  artistDisplayName: string | undefined;
  artistDisplayBio: string | undefined;
  artistGender: string | null | undefined;
  objectDate: string | null | undefined;
  medium: string | null;
  country: string | null;
  classification: string | null;
  linkResource: string | null | undefined;
  featured: boolean;
  isHighlight: boolean | undefined;
  tags: (string | undefined)[] | null;
}

export interface IWallInfo {
  id: number;
  translate: { x: number; y: number; z: number };
  colour: string;
  rotateY: number;
}

export interface ISingleWallImgs {
  [key: string]: p5Types.Image | undefined;
}

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
  objectID?: number;
  artistdisplaybio: string;
  artistdisplayname: string;
  artistgender: string | null;
  artistprefix: string | null;
  artistDisplayBio?: string;
  artistDisplayName?: string;
  artistGender?: string | null;
  artistPrefix?: string | null;
  classification: string;
  country: string | null;
  culture: string | null;
  department: string;
  dynasty: string | null;
  featured: boolean;
  ishighlight: boolean;
  isHighlight?: boolean;
  linkresource: string | null;
  linkResource?: string | null;
  medium: string | null;
  objectdate?: string | null;
  objectname?: string;
  objectDate: string | null;
  objectName: string;
  period: string | null;
  primaryimage?: string;
  primaryImage: string;
  primaryimagesmall: string;
  primaryImageSmall?: string;
  tags: ITag[];
  title: string;
}

export interface ISearchedArtwork {
  id?: number;
  objectID: number;
  artistdisplaybio?: string;
  artistdisplayname?: string;
  artistgender?: string | null;
  artistprefix?: string | null;
  artistDisplayBio: string;
  artistDisplayName: string;
  artistGender: string | null;
  artistPrefix: string | null;
  classification: string;
  country: string | null;
  culture: string | null;
  department: string;
  dynasty: string | null;
  ishighlight?: boolean;
  isHighlight: boolean;
  linkresource: string | null;
  linkResource: string | null;
  medium: string | null;
  objectdate?: string | null;
  objectname?: string;
  objectDate: string | null;
  objectName: string;
  period: string | null;
  primaryimage?: string;
  primaryImage: string;
  primaryimagesmall?: string;
  primaryImageSmall: string;
  tags: ISearchTag[];
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
  classification: string;
  linkResource: string | null | undefined;
  featured: boolean;
  isHighlight: boolean | undefined;
  tags: (string | undefined)[];
}

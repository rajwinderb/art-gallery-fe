export interface ITag {
  id: number;
  tag: string;
}

export interface ISearchTag {
  AAT_URL: string;
  Wikidata_URL: string;
  term: string;
}

export interface IArtwork {
  id: number;
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

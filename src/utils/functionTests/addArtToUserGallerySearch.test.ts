import axios, { AxiosResponse } from "axios";
import { addArtToUserGallerySearch } from "../functions/addArtToUserGallerySearch";
import { ISearchedArtwork } from "../Interfaces";
import { reformatToAddArtwork } from "../functions/reformatToAddArtwork";

//jest.mock(...) is used to automatically mock the axios
jest.mock("axios");

// Create an object of type of mocked Axios.
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("check if a post request is made", async () => {
  const userId = 2;
  const searchResult: ISearchedArtwork = {
    artistDisplayBio: "",
    artistDisplayName: "F. Gadesden",
    artistGender: "",
    artistPrefix: "",
    classification: "Ceramics-Pottery",
    country: "",
    culture: "",
    department: "European Sculpture and Decorative Arts",
    dynasty: "",
    isHighlight: false,
    linkResource: "",
    medium: "Earthenware",
    objectDate: "1876",
    objectID: 208554,
    objectName: "Charger",
    period: "",
    primaryImage:
      "https://images.metmuseum.org/CRDImages/es/original/DT4036.jpg",
    primaryImageSmall:
      "https://images.metmuseum.org/CRDImages/es/web-large/DT4036.jpg",
    tags: [
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300417320",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q11946202",
        term: "Butterflies",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300404749",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q171497",
        term: "Sunflowers",
      },
    ],
    title: "Charger",
  };

  const mockSetTriggerGetUserArt = jest.fn();
  const mockPostToUserGallery = jest.fn();

  //Prepare the response we want to get from axios
  const mockedResponse: AxiosResponse = {
    data: {
      status: "success",
      message: "new artwork added",
      new_artwork_id: 208554,
    },
    status: 200,
    statusText: "OK",
    headers: {},
    config: {},
  };

  // Make the mock return the custom axios response
  mockedAxios.post.mockResolvedValueOnce(mockedResponse);
  expect(axios.post).not.toHaveBeenCalled();
  const data = await addArtToUserGallerySearch(
    userId,
    reformatToAddArtwork(searchResult),
    false,
    mockSetTriggerGetUserArt,
    mockPostToUserGallery
  );
  expect(axios.post).toHaveBeenCalled();
  expect(data).toBe(undefined);
  expect(mockPostToUserGallery).toBeCalled();
});

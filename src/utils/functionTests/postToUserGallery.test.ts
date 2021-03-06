import axios, { AxiosResponse } from "axios";
import { postToUserGallery } from "../functions/postToUserGallery";

//jest.mock(...) is used to automatically mock the axios
jest.mock("axios");

// Create an object of type of mocked Axios.
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("check if a post request is made", async () => {
  const userId = 2;
  const artId = 4058;

  const mockSetTriggerGetUserArt = jest.fn();

  //Prepare the response we want to get from axios
  const mockedResponse: AxiosResponse = {
    data: {
      status: "success",
      message: "user art added",
      new_user_art: { userid: userId, artid: artId, isfavourite: false },
    },
    status: 200,
    statusText: "OK",
    headers: {},
    config: {},
  };

  // Make the mock return the custom axios response
  mockedAxios.post.mockResolvedValueOnce(mockedResponse);
  expect(axios.post).not.toHaveBeenCalled();
  const data = await postToUserGallery(
    userId,
    artId,
    false,
    mockSetTriggerGetUserArt
  );
  expect(axios.post).toHaveBeenCalled();
  expect(data).toBe(undefined);
  expect(mockSetTriggerGetUserArt).toBeCalled();
});

import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import MainContent from "./components/MainContent";
import UserGallery from "./routes/UserGallery";
import { useEffect, useState } from "react";
import { IUserArt } from "./utils/Interfaces";
import axios from "axios";
import { API_BASE } from "./utils/APIFragments";
import VirtualGallery from "./routes/VirtualGallery";

function App(): JSX.Element {
  const [userId, setUserId] = useState<number | null>(null);
  const [userGalleryArt, setUserGalleryArt] = useState<IUserArt[]>([]);
  const [triggerGetUserArt, setTriggerGetUserArt] = useState<boolean>(false);

  useEffect(() => {
    if (userId !== null) {
      axios
        .get(`${API_BASE}/userart/${userId}`)
        .then((response) => {
          setUserGalleryArt(response.data.artworks);
        })
        .catch((error) => console.log(error));
    }
  }, [triggerGetUserArt, userId]);

  const retrieveSavedUser = () => {
    return localStorage.getItem("savedUserId");
  };

  const savedUserId = retrieveSavedUser();

  // useEffect to save the current user id
  useEffect(() => {
    setUserId(savedUserId ? parseInt(savedUserId) : null);
  }, [savedUserId]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AppHeader userId={userId} setUserId={setUserId} />
                <MainContent
                  userId={userId}
                  userGalleryArt={userGalleryArt}
                  triggerGetUserArt={triggerGetUserArt}
                  setTriggerGetUserArt={setTriggerGetUserArt}
                />
              </>
            }
          />
          <Route
            path="/your-artworks"
            element={
              <>
                <AppHeader userId={userId} setUserId={setUserId} />
                <UserGallery
                  userId={userId}
                  userGalleryArt={userGalleryArt}
                  triggerGetUserArt={triggerGetUserArt}
                  setTriggerGetUserArt={setTriggerGetUserArt}
                />
              </>
            }
          />
          <Route
            path="/your-virtual-gallery"
            element={
              <>
                <AppHeader userId={userId} setUserId={setUserId} />
                <VirtualGallery />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

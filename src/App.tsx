import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import MainContent from "./components/MainContent";
import UserGallery from "./routes/UserGallery";
import { useEffect, useState } from "react";

function App(): JSX.Element {
  const [userId, setUserId] = useState<number | null>(null);

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
                <MainContent />
              </>
            }
          />
          <Route
            path="/your-art-gallery"
            element={
              <>
                <AppHeader userId={userId} setUserId={setUserId} />
                <UserGallery />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

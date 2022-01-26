import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import MainContent from "./components/MainContent";
import UserGallery from "./routes/UserGallery";

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AppHeader />
                <MainContent />
              </>
            }
          />
          <Route
            path="/your-art-gallery"
            element={
              <>
                <AppHeader />
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

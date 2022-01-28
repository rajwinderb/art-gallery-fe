import "../styles/AppHeader.css";
import NavBar from "./NavBar";
import Login from "./Login";

interface AppHeaderProps {
  userId: number | null;
  setUserId: (input: number | null) => void;
}

export default function AppHeader({
  userId,
  setUserId,
}: AppHeaderProps): JSX.Element {
  return (
    <header className="AppHeader">
      <div className="Header">
        <h1>Art Gallery</h1>
        <Login userId={userId} setUserId={setUserId} />
      </div>
      {userId !== null && <NavBar />}
    </header>
  );
}

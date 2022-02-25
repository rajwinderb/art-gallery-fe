import "../styles/NavBar.css";

export default function NavBar(): JSX.Element {
  // const baseURL = "http://localhost:3000/";

  const baseURL = "https://art-gallery-rb.netlify.app/";

  return (
    <nav>
      <ul className="NavBar">
        <li>
          <a href={`${baseURL}`}>Home</a>
        </li>
        <li>
          <a href={`${baseURL}your-artworks`}>Your Artworks</a>
        </li>
        <li>
          <a href={`${baseURL}your-virtual-gallery`}>Your Virtual Gallery</a>
        </li>
      </ul>
    </nav>
  );
}

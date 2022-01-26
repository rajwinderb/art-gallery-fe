export default function NavBar(): JSX.Element {
  // const baseURL = "http://localhost:3000/";

  const baseURL = "https://art-galley.netlify.app/";

  return (
    <nav>
      <ul className="NavBar">
        <li>
          <a href={`${baseURL}`}>Home</a>
        </li>
        <li>
          <a href={`${baseURL}your-art-gallery`}>Your Art Gallery</a>
        </li>
      </ul>
    </nav>
  );
}

import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

// function GalleryNavigation({ records }) {
//   return <nav>
//     records.map(ele => ({<NavLink prop={ele} />}))
//     </nav>;
// }
function GalleryNavigation({ records }) {
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to={"/"}>
        HOME <br></br>
      </NavLink>

      {records.map(({ id, name }) => (
        <NavLink key={id} to={`/galleries/${id}`}>
          {name}
          <br></br>
        </NavLink>
      ))}
    </nav>
  );
}

export default GalleryNavigation;

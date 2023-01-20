import { NavLink } from "react-router-dom";

// function GalleryNavigation({ records }) {
//   return <nav>
//     records.map(ele => ({<NavLink prop={ele} />}))
//     </nav>;
// }
function GalleryNavigation({ records }) {
  return (
    <nav>
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



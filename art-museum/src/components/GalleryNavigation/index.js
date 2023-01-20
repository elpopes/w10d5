import { NavLink } from "react-router-dom";

function GalleryNavigation({ records }) {
  return <nav>{records.map(ele => ({<NavLink prop={ele} />}))}</nav>;
}

export default GalleryNavigation;

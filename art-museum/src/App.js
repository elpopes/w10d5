import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";

function App() {
  // console.log(harvardArt);
  return <GalleryNavigation records={harvardArt.records} />; //syntax for key:value pair
}

//GalleryNavigation({harvardArt.records})
export default App;

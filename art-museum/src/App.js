import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation records={harvardArt.records} />
      <main>
        <Switch>
          <Route path="/" exact>
            <h2>Harvard Art Museum</h2>
            <p>Where the really smart art is!</p>
          </Route>
          <Route path="/galleries/:galleryId">
            <GalleryView records={harvardArt.records} />
          </Route>
          <Route>
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

//GalleryNavigation({harvardArt.records})
export default App;

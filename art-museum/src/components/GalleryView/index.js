import { useParams, Redirect, Route } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";

function GalleryView({ galleries }) {
  // Get the galleryId from the URL using the `useParams` hook
  const { galleryId } = useParams();

  // Find the gallery in the list of galleries that matches the galleryId
  // We use `Number(gallery.id)` to make sure that the comparison is done with numbers, not strings
  console.log(`this be galleries ${galleries}`);
  const gallery = galleries.find((gallery) => gallery.id === Number(galleryId));

  //

  if (!gallery) return <Redirect to="/" />;

  return (
    <>
      <h1>Hello from Gallery View</h1>
      <h2>{gallery.name}</h2>
      <Route path="/galleries/:galleryId" exact>
        <div className="art-nav">
          {gallery.objects.map((art) => (
            <ArtImageTile art={art} key={art.id} />
          ))}
        </div>
      </Route>
      <Route path="/galleries/:galleryId/art/:artId">
        {/* <ArtDescription gallery={gallery} /> */}
      </Route>
    </>
  );
}

export default GalleryView;

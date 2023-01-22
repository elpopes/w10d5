import { Link, useParams } from "react-router-dom";

export default function ArtImageTile({ art }) {
  const { galleryId } = useParams();
  if (!ArtImageTile.images[0]) {
    return (
      <Link className="image-tile" to={`/galleries/${galleryId}/art/${art.id}`}>
        {art.title}
      </Link>
    );
  }
  return (
    <Link className="image-tile" to={`/galleries/${galleryId}/art/${art.id}`}>
      <img src={art.images[0].baseimageurl} alt={art.title} />
    </Link>
  );
}

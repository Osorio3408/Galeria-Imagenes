import { useFetchImages } from "../hooks/useFetchImages";
import Card from "./Card";
import Formimg from "./Formimg";
import Loading from "./Loading";

const Cards = () => {
  const [images, loading, handleSubmit] = useFetchImages();

  return (
    <div className="text-center">
      <Formimg handleSubmit={handleSubmit} />
      <hr />

      {loading && <Loading />}

      <div className="row">
        {images.map((img) => {
          return (
            <div className="col" key={img.id}>
              <Card img={img.urls.regular} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;

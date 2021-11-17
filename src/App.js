import React, { useState, useEffect } from "react";
import CardImage from "./components/CardImage";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="App">
      <div className="container mx-auto">
        <h1 className="md:text-4xl text-3xl text-center font-bold text-green-500 pt-8">
          Search Your Fav Image
        </h1>

        <Search inputSearch={(inputText) => setTerm(inputText)} />

        <div className="grid md:grid-cols-3 md:gap-4 ">
          {images.map((image) => (
            <CardImage key={image.id} image={image} />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;

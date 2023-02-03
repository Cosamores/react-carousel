import React from "react";
import ImageCarousel from "./ImageCarousel";
import "./App.css";
import Card from "./Card";

const images = [
  { src: "https://img.ibxk.com.br/2017/07/13/13160112901226.jpg", alt: "Image 1" },
  { src: "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg", alt: "Image 2" },
  { src: "https://img.ibxk.com.br/materias/5866/21577.jpg", alt: "Image 3" },
  //{ src: "./src/images/5.jpg", alt: "Image 4" }
];
console.log('Rendered App');
function App() {
  return (
    <div>
      <Card>
        <h1 id="title">BLOG DO COSAMORES</h1>

      </Card>
      <Card >
        <div className="App">
          <ImageCarousel images={images} />
        </div>
      </Card>
    </div>
  );
}

export default App;

import "./ImageCarousel.css"
import { useState } from "react";

export default function Image() {
  const images= [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6grLVXJ8urLdHBRlAgUfovtkNTQ75URfRQg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s",
    "https://t4.ftcdn.net/jpg/03/23/82/99/360_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPtPClMgv5AjLq_xyuja5acNuzN0TeQXwXQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbCLhWAEcKDFFJWZliYitygdMkPkokKQKqFA&s"
  ];

  const [index, setIndex] = useState(0);

   function nextImage() {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function prevImage() {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <>
      <h1>Image Carousel</h1>
      <img src={images[index]} alt="" style={{ width: "400px", height: "200px" }}/>
        <br />
      <button onClick={prevImage}>Pre</button>
      <button onClick={nextImage}>Next</button>

    </>
  );
}





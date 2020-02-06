import React from "react";


const images = ["esports", "tech", "computer", "gaming"];

function RandomImage() {
  const [one, two, three, four] = images.map(i =>
    Math.floor(Math.random() * Math.floor(i.length))
  );
  return (
    <div className="img-container">
        <img
          className="events-img"
          src={`https://source.unsplash.com/600x400/?${images[one]},${images[two]},${images[three]},${images[four]}`}
          alt="images random"
        />
    <style jsx>{`
        .events-img {
            width: 14rem;
            height: fit-content;
            float: left;
            overflow: hidden;
            object-fit: cover;
            border-radius: 0.625rem 0 0 0.625rem;
        }
    
    `}</style>
    </div>
  );
}

export default RandomImage;
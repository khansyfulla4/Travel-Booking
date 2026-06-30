import React from "react";


const places = [
  {
    id: 1,
    name: "Goa",
    price: "₹15,000",
    image:
      "https://www.oyorooms.com/travel-guide/wp-content/uploads/2022/11/hours-in-goa-beaches-seafood-and-dance.jpg",
  },
  {
    id: 2,
    name: "Kerala",
    price: "₹18,000",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/38/8d/93/kerala-is-not-only-the.jpg",
  },
  {
    id: 3,
    name: "Kashmir",
    price: "₹25,000",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
  },
];

export default function Destinations() {
  return (
    <div className="cards">
      {places.map((place) => (
        <div className="card" key={place.id}>
          <img src={place.image} alt={place.name} />  
          <h3>{place.name}</h3>
          <p>{place.price}</p>
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
}
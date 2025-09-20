// generateData.js

const fs = require("fs");

// Predefined data pools
const titles = [
  "Cozy Beachfront Cottage",
  "Luxury Mountain Chalet",
  "Rustic Forest Cabin",
  "Modern City Apartment",
  "Desert Dome Retreat",
  "Floating Lake House",
  "Ice Hotel Suite",
  "Charming Farmhouse Stay",
  "Historic Castle Escape",
  "Tropical Jungle Bungalow",
  "Seaside Camping Spot",
  "Luxury Pool Villa",
  "Alaskan Log Cabin",
  "Greek Cliffside Apartment",
  "Ski-In Ski-Out Lodge",
  "Riverside Camping Grounds",
  "Charming Farm Stay",
  "Floating Boat Bungalow",
  "Cliffside Retreat",
  "Urban Loft Apartment",
];

const locations = [
  { city: "Malibu", country: "United States", coords: [-118.7798, 34.0259] },
  { city: "Zermatt", country: "Switzerland", coords: [7.7491, 46.0207] },
  { city: "Banff", country: "Canada", coords: [-115.5708, 51.1784] },
  {
    city: "New York City",
    country: "United States",
    coords: [-73.935242, 40.73061],
  },
  {
    city: "Joshua Tree",
    country: "United States",
    coords: [-116.3131, 34.1347],
  },
  { city: "Lake Como", country: "Italy", coords: [9.2572, 45.9901] },
  { city: "Jukkasjärvi", country: "Sweden", coords: [20.6155, 67.8519] },
  { city: "Tuscany", country: "Italy", coords: [11.2558, 43.7699] },
  { city: "Edinburgh", country: "United Kingdom", coords: [-3.1883, 55.9533] },
  { city: "Bali", country: "Indonesia", coords: [115.1889, -8.4095] },
  { city: "Goa", country: "India", coords: [73.8567, 15.2993] },
  { city: "Dubai", country: "UAE", coords: [55.2708, 25.2048] },
];

const categories = [
  "trending",
  "rooms",
  "iconic-cities",
  "mountain",
  "castle",
  "amazing-pools",
  "camping",
  "farms",
  "arctic",
  "doms",
  "boats",
];

const images = [
  "https://res.cloudinary.com/diuauiogr/image/upload/v1758344444/photo-1552733407-5d5c46c3bb3b_ks7ned.jpg",
  "https://res.cloudinary.com/diuauiogr/image/upload/v1758344450/photo-1522708323590-d24dbb6b0267_fkwvnn.jpg",
  "https://res.cloudinary.com/diuauiogr/image/upload/v1758344455/photo-1505691938895-1758d7feb511_mvtqcy.jpg",
  "https://res.cloudinary.com/diuauiogr/image/upload/v1758344460/photo-1560448075-bb4a0c5f23d3_pykqun.jpg",
  "https://res.cloudinary.com/diuauiogr/image/upload/v1758344470/photo-1501785888041-af3ef285b470_wgfcll.jpg",
  "https://res.cloudinary.com/diuauiogr/image/upload/v1758344480/photo-1470770841072-f978cf4d019e_wk2qij.jpg",
  "https://res.cloudinary.com/diuauiogr/image/upload/v1758344490/photo-1549924231-f129b911e442_azt7wl.jpg",
  "https://res.cloudinary.com/diuauiogr/image/upload/v1758344500/photo-1512917774080-9991f1c4c750_obxxwa.jpg",
];

// Function to get random element
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generate 50 listings
const listings = [];

for (let i = 0; i < 50; i++) {
  const loc = getRandom(locations);
  const listing = {
    title: getRandom(titles),
    description:
      "This is a beautiful property located in " +
      loc.city +
      ". Perfect for a staycation or adventure.",
    image: getRandom(images),
    price: Math.floor(Math.random() * 5000) + 300, // price between 300 - 5300
    location: loc.city,
    country: loc.country,
    category: getRandom(categories),
    geometry: {
      type: "Point",
      coordinates: loc.coords,
    },
  };
  listings.push(listing);
}

// Write to data.js
const fileContent = `module.exports.data = ${JSON.stringify(
  listings,
  null,
  2
)};`;

fs.writeFileSync("data.js", fileContent, "utf-8");

console.log("Generated 50 listings successfully!");

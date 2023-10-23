import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Cities from './Cities'; 

const citiesData = [
  {
    id: 1,
    name: "London",
    country: "United Kingdom",
    info: "London is the most visited city in Europe and has the busiest city airport system in the world.",
    image: "https://www.thetrainline.com/cms/media/1376/uk-london-tower-bridge-river-thames.jpg?mode=crop&width=800&height=800&quality=70"
  },
  {
    id: 2,
    name: "Paris",
    country: "France",
    info: "Paris, the capital of France, is famous for its art, gastronomy, and culture.",
    image: "https://busyinbrooklyn.com/wp-content/uploads/2019/05/eiffel-tower-paris.jpg"
  },
  {
    id: 3,
    name: "New York City",
    country: "United States",
    info: "New York City is known for its iconic skyline, Broadway shows, and world-class museums.",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/29/11/istock-623595614.jpg?width=1200&height=1200&fit=crop"
  },
];

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Home
        countries={['United Kingdom', 'France', 'United States']} 
        setSelectedCountry={setSelectedCountry}
      />
      {selectedCountry && <Cities selectedCountry={selectedCountry} cities={citiesData} />}
      <Footer />
    </div>
  );
};

export default App;

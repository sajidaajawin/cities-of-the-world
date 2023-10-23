import React from 'react';

const Home = ({ countries, setSelectedCountry }) => {
  return (
    <div className="bg-gray-200 py-20 text-center">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">World's Cities</h1>
        <select
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="p-2 rounded"
        >
          <option value="">Select a country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Home;

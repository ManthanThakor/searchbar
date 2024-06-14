import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AutoSuggest from 'react-autosuggest';
import './Home.css';

const cars = [
  { name: 'Audi', description: 'German luxury vehicle', image: '/images/audi.jpg' },
  { name: 'BMW', description: 'German luxury vehicle', image: '/images/bmw.jpg' },
  { name: 'Chevrolet', description: 'American vehicle', image: '/images/chevrolet.jpg' },
  { name: 'Dodge', description: 'American muscle car', image: '/images/dodge.jpg' },
  { name: 'Ferrari', description: 'Italian luxury sports car', image: '/images/ferrari.jpg' },
  { name: 'Ford', description: 'American vehicle', image: '/images/ford.jpg' },
  { name: 'Honda', description: 'Japanese vehicle', image: '/images/honda.jpg' },
  { name: 'Hyundai', description: 'South Korean vehicle', image: '/images/hyundai.jpg' },
  { name: 'Jaguar', description: 'British luxury vehicle', image: '/images/jaguar.jpg' },
  { name: 'Kia', description: 'South Korean vehicle', image: '/images/kia.jpg' },
  { name: 'Lamborghini', description: 'Italian luxury sports car', image: '/images/lamborghini.jpg' },
  { name: 'Mazda', description: 'Japanese vehicle', image: '/images/mazda.jpg' },
  { name: 'Mercedes', description: 'German luxury vehicle', image: '/images/mercedes.jpg' },
  { name: 'Nissan', description: 'Japanese vehicle', image: '/images/nissan.jpg' },
  { name: 'Toyota', description: 'Japanese vehicle', image: '/images/toyota.jpg' },
  { name: 'Volkswagen', description: 'German vehicle', image: '/images/volkswagen.jpg' }
];

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : cars.filter(car =>
    car.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = (suggestion) => suggestion.name;

const renderSuggestion = (suggestion) => (
  <div>
    {suggestion.name}
  </div>
);

const Home = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: 'Type a car brand',
    value,
    onChange
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    navigate(`/car/${suggestion.name}`);
  };

  return (
    <div>
      <section className="car-section">
        <AutoSuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={onSuggestionSelected}
        />
        {cars.map((car, index) => (
          <div key={index} className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <h2 className="car-name">{car.name}</h2>
            <p className="car-description">{car.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;

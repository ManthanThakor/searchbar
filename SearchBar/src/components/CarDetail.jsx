import React from 'react';
import { useParams } from 'react-router-dom';
import './CarDetail.css';

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

const CarDetail = () => {
  const { name } = useParams();
  const car = cars.find(car => car.name === name);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="car-detail">
      <img src={car.image} alt={car.name} className="car-detail-image" />
      <h2 className="car-detail-name">{car.name}</h2>
      <p className="car-detail-description">{car.description}</p>
    </div>
  );
};

export default CarDetail;

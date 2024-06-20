 // Sample car data
const cars = [
    { make: 'Toyota', model: 'Camry', year: 2020 },
    { make: 'Honda', model: 'Civic', year: 2021 },
    { make: 'Ford', model: 'Mustang', year: 2019 },
  ];
  
  // Function to filter cars by year
  function filterCarsByYear(year) {
    return cars.filter(car => car.year === year);
  }
  
  // Example usage
  console.log(filterCarsByYear(2020));
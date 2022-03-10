fetch('api/photos')
  .then(response => response.json())
  .then(data => console.log(data));

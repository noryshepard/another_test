import './main.css';

fetch('')
  .then(response => response.json())
  .then(data => console.log(data));

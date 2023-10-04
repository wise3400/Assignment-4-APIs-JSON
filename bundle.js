// dog api
fetch('https://dogapi.dog/docs/api-v2')
  .then((response) => { return response.json() })
  //.then(function(response) { return response.json() })
  .then((data) => { console.log(data) });

function writeDogFactsToPage(json) {
  for (const dogFact of json.data) {
    const p = document.createElement('p');
    console.log(dogFact);
    p.innerText = dogFact.attributes.name + ", " +  dogFact.attributes.description;
   
    document.body.appendChild(p);
  }
}

fetch('https://dogapi.dog/api/v2/breeds')
  .then(response => response.json())
  .then(writeDogFactsToPage);

// pexels API
const myQuery = 'Dogs';
fetch(`https://api.pexels.com/v1/search?query=${myQuery}&per_page=13`, {
  type: 'GET',
  headers: { Authorization: 'rUAeaXs8i1jb1agcojt7e1611gLOmko7P5rOtsdjLttQAXRI5WlJ4lZm' }
}).then(response => response.json())
  .then(json => {
    for (const photo of json.photos) {
      const img = document.createElement('img');
      img.src = photo.src.small;
      img.alt = photo.alt;
      document.body.appendChild(img);
    }
  });

const box = document.querySelector('.box');
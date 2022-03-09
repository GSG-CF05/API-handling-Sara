fetch(
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=c21c8c34fd8e4cf5934920dafbe6a706'
)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

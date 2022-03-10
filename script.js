let container = document.querySelector('.container');
let input = document.querySelector('.search-input');
let searchButton = document.querySelector('button');

searchButton.addEventListener('click', topicSearch);
fetch(
  'https://newsapi.org/v2/everything?q=war&apiKey=c21c8c34fd8e4cf5934920dafbe6a706'
)
  .then((res) => res.json())
  .then((data) => {
    let articles = data.articles;
    console.log(articles);
    //-------------
    articles.forEach((article) => {
      let card = document.createElement('div');
      card.classList = 'card';
      container.appendChild(card);
      let title = document.createElement('h2');
      let description = document.createElement('p');
      let img = document.createElement('img');
      let content = document.createElement('div');
      content.classList = 'content';
      let imgDiv = document.createElement('div');
      let descriptionDiv = document.createElement('div');
      let link = document.createElement('a');
      //------------------------------------------------
      title.textContent = article.title;
      card.appendChild(title);
      img.src = article.urlToImage;
      imgDiv.appendChild(img);
      content.appendChild(imgDiv);
      description.textContent = article.description;
      descriptionDiv.appendChild(description);
      content.appendChild(descriptionDiv);
      link.textContent = 'Read More';
      link.href = article.url;
      descriptionDiv.appendChild(link);
      card.appendChild(content);
    });
  })
  .catch((err) => console.log(err));

function topicSearch(e) {
  e.preventDefault();
  let value = input.value;
  console.log(value);
  container.textContent = '';
  fetch(
    `https://newsapi.org/v2/everything?q=${value}&apiKey=c21c8c34fd8e4cf5934920dafbe6a706`
  )
    .then((res) => res.json())
    .then((data) => {
      let articles = data.articles;
      console.log(articles);
      //-------------
      articles.forEach((article) => {
        let card = document.createElement('div');
        card.classList = 'card';
        container.appendChild(card);
        let title = document.createElement('h2');
        let description = document.createElement('p');
        let img = document.createElement('img');
        let content = document.createElement('div');
        content.classList = 'content';
        let imgDiv = document.createElement('div');
        let descriptionDiv = document.createElement('div');
        let link = document.createElement('a');
        //------------------------------------------------
        title.textContent = article.title;
        card.appendChild(title);
        img.src = article.urlToImage;
        imgDiv.appendChild(img);
        content.appendChild(imgDiv);
        description.textContent = article.description;
        descriptionDiv.appendChild(description);
        content.appendChild(descriptionDiv);
        link.textContent = 'Read More';
        link.href = article.url;
        descriptionDiv.appendChild(link);
        card.appendChild(content);
      });
    })
    .catch((err) => console.log(err));
}

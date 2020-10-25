const root = document.getElementById('root');
const books = [
  {
    bookName: 'The Nature of Software Development',
    author: 'Ron Jeffries',
    coverURL:
      'https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png',
  },
  {
    bookName: 'Clean Code',
    author: 'Robert Cecil Martin',
    coverURL: '',
  },
];

function injectBooksToDOM(arrayOfObjects) {
  arrayOfObjects.forEach((object) => {
    const title = document.createElement('h2');
    title.innerHTML = object.bookName;
    root.appendChild(title);
    const author = document.createElement('h3');
    author.innerHTML = object.author;
    root.appendChild(author);
    const image = document.createElement('img');
    image.src = object.coverURL;
    root.appendChild(image);
  });
  /// why on earth should it return true or false?
}

injectBooksToDOM(books);

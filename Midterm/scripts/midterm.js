//Define class constructor and methods
class Book{
  constructor(title, author, genre){
    this.title = title;
    this.author = author;
    this.genre = genre;
  }
  displayBookInfo(){
    var title_line = "<strong>Title:</strong>" + this.title + "<br>\n";
    var author_line = "<strong>Author:</strong>" + this.author + "<br>\n";
    var genre_line = "<strong>Genre:</strong>" + this.genre + "<hr>\n";
    return (title_line + author_line + genre_line);
  }
}

// define the functions
function addBook(){
  let title = prompt ('Please enter the title');
  let author = prompt ('Please enter the author');
  let genre = prompt('Please enter the genre');
  return new Book(title, author, genre);
  }

// Create the objects by asking user to input, q to quit
var bookArray = [];
while (true){
  let b = addBook();
  bookArray.push(b);
  var quit = prompt("Please enter q to quit entering book dtails ");
  if (quit==='q'){
    if (bookArray.length < 3){
      alert("Please enter at least 3 books!");
      }
      else{
        break;
      }
}
}
document.write('You have ' + bookArray.length + 'books: <br>')

for(let book of bookArray){
  document.write(book.displayBookInfo());
}

//document.querySelector('p').textContent = "You have n books, please see details below: ";

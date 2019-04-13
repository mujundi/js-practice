class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI class
class UI {
  addBookToList(book) {
    const list = document.querySelector("#book-list");
    // Create tr element
    const row = document.createElement("tr");
    // Insert cols in row
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
  }

  clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  showAlert(msg, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

// Local storage class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    const ui = new UI();
    books.forEach(function(book) {
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function(book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", Store.displayBooks);

document.querySelector("#book-form").addEventListener("submit", function(e) {
  const ui = new UI();
  const title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value;

  if (title && author && isbn) {
    const book = new Book(title, author, isbn);
    ui.addBookToList(book);
    Store.addBook(book);
    ui.showAlert(`Added "${title}" by ${author} to the list.`, "success");
    ui.clearFields();
  } else {
    ui.showAlert("Please fill in all fields.", "error");
  }

  e.preventDefault();
});

document.querySelector("#book-list").addEventListener("click", function(e) {
  const ui = new UI();
  if (e.target.classList.contains("delete")) {
    const isbn = e.target.parentElement.previousElementSibling.textContent;
    Store.removeBook(isbn);
    e.target.parentElement.parentElement.remove();
  }

  ui.showAlert("Book removed.", "success");
  e.preventDefault();
});

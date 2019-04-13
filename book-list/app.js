// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() {
  // Add book to list
  UI.prototype.addBookToList = function(book) {
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
  };

  UI.prototype.clearFields = function() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  };

  UI.prototype.showAlert = function(msg, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 3000);
  };
}

const ui = new UI();
// Event Listener (Add book)
document.querySelector("#book-form").addEventListener("submit", function(e) {
  const title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value;

  if (title && author && isbn) {
    const book = new Book(title, author, isbn);
    ui.addBookToList(book);
    ui.showAlert(`Added "${title}" by ${author} to the list.`, "success");
    ui.clearFields();
  } else {
    ui.showAlert("Please fill in all fields.", "error");
  }

  e.preventDefault();
});

document.querySelector("#book-list").addEventListener("click", function(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }

  e.preventDefault();
  ui.showAlert("Book removed.", "success");
});

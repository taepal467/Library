const form = document.querySelector("#form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const checkboxInput = document.querySelector("#reading-status");

class Book {
  constructor(title, author, pages, input) {
    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
    this.input = input.value;
  }
}

//UI class: Handle UI tasks
class UI {
    static displayBooks() {
      let myLibrary = [];
      const books = myLibrary;
      books.forEach(book => UI.addBookToLibrary(book))
    }

    static addBookToLibrary(book) {
        const container = document.querySelector(".book-container");

        book = document.createElement("div");

        let newTitle = document.createElement("h3");
        let newAuthor = document.createElement("h3");
        let newPages = document.createElement("h3");
        let newStatus = document.createElement("h3");
        let removeBtn = document.createElement("button");
   
        newTitle.classList.add("bookItem");
        newAuthor.classList.add("bookItem");
    
          newStatus.classList.add("status");
          newStatus.style.cursor = "pointer";
          newStatus.addEventListener("click", function() {
            if(newStatus.textContent === "Not Read") {
              newStatus.textContent = "Read";
              newStatus.style.color = "inherit";
              newStatus.style.border = "none";
            } else {
              newStatus.textContent = "Not Read";
              newStatus.style.border = "none";
              newStatus.style.color = "#AC7088";
            }
          })
    
        removeBtn.classList.add("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.textContent = "remove";
        removeBtn.addEventListener("click", () => {
          removeBtn.parentElement.remove();
        })
       
        book.classList.add("bookInfo-card");
        book.classList.add("bookInfo-card:nth-child(odd)");
      
        newTitle.textContent = `${titleInput.value} `;
        newAuthor.textContent = `${authorInput.value}`;
        newPages.textContent = `${pagesInput.value}`;
        newStatus.textContent = `${checkboxInput.value}`;

        if(checkboxInput.checked === false) {
          newStatus.textContent = "Not Read";
          newStatus.style.color = "#AC7088";
        }else {
          newStatus.textContent = "Read";
        }

       container.appendChild(book);
       book.appendChild(newTitle);
       book.appendChild(newAuthor);
       book.appendChild(newPages);
       book.appendChild(newStatus);
       book.appendChild(removeBtn);
    }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  titleInput.value;
  authorInput.value;
  pagesInput.value;
  checkboxInput.value;

  if(!titleInput.value ||
    !authorInput.value ||
    !pagesInput.value) {
      document.querySelector(".msg1").textContent = "Please enter a title";
      document.querySelector(".msg2").textContent = "Please enter an author";
      document.querySelector(".msg3").textContent = "Please enter the number of pages";
 
    } else {
      document.querySelector(".msg1").textContent = "";
      document.querySelector(".msg2").textContent = "";
      document.querySelector(".msg3").textContent = "";
      
      const book = new Book(titleInput, authorInput, pagesInput, checkboxInput);

      UI.addBookToLibrary(book);

     form.reset()
  }

  if(titleInput.value) {
    document.querySelector(".msg1").textContent = "";
  } 
  if(authorInput.value) {
    document.querySelector(".msg2").textContent = "";
  } 
  if(pagesInput.value) {
    document.querySelector(".msg3").textContent = "";
  }
})





  

















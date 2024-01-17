const myLibrary = [];
const showbutton = document.querySelector("#showDialog");
const bookSubmit = document.querySelector("#bookSubmit");
const confirmBtn = document.querySelector("#confirmBtn");
const closeBtn = document.querySelector("#closeBtn");
const bookTitle = document.querySelector("#bookTitle");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form = document.querySelector("#form");
    title = document.querySelector("#bookTitle").value;
    author = document.querySelector("#bookAuthor").value;
    pages = document.querySelector("#bookPages").value;
    read = document.querySelector("#bookStatus").value;
    title = new Book(title, author, pages, read);
    myLibrary.push(title);

    deleteAllCard();
    createCard();
    
    form.reset();
    bookSubmit.close();
  });
}

function createCard() {
  let i = 0;
  
  while (i < myLibrary.length) {
    let cardSection = document.querySelector("#bookCard");
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("style", "white-space: pre;");
    card.textContent = `\n\n\n\nTitle :${myLibrary[i].title}\n\n`;
    card.textContent += `Author : ${myLibrary[i].author}\n\n`;
    card.textContent += `Number of pages : ${myLibrary[i].pages}\n\n`;

    button = document.createElement("button");
    button.classList.add("deleteButton");
    button.textContent = "Delete Book";
    button.setAttribute("index", i);

    statusButton = document.createElement("button");
    statusButton.classList.add("statusButton");
    statusButton.textContent = `${myLibrary[i].read}`;
    statusButton.setAttribute("status", i);
    if (myLibrary[i].read=="read") {
      statusButton.id="read"
    }
    else{
      statusButton.id="notRead"
    }

    card.appendChild(statusButton);
    card.appendChild(button);
    cardSection.appendChild(card);
    
    i++;
  }
  deleteButton();
  readButton();
}

function deleteAllCard() {
  let allCard = document.querySelectorAll(".card");
  allCard.forEach((element) => {
    element.remove();
  });
}

function deleteButton() {
  let deleteButton = document.querySelectorAll(".deleteButton");
  

  deleteButton.forEach(function (deleteButton) {
    deleteButton.addEventListener("click", () => {
      let index = deleteButton.getAttribute("index");
      myLibrary.splice(index, 1);
      deleteAllCard();
      createCard();
      
    });
  });
  

  

}

function readButton() {
  let readButton = document.querySelectorAll(".statusButton");
  

  readButton.forEach(function (readButton) {
    readButton.addEventListener("click", () => {
      let status = readButton.getAttribute("status"); 
      if (myLibrary[status].read =="read") {
        myLibrary[status].read = "not read";
      }
      else {
        myLibrary[status].read = "read";
      }
      
      deleteAllCard();
      createCard();
      
    });
  });
  
}

let theHobbit = new Book("The Hobbit", " J.R.R. Tolkien", "295", "not read");

showbutton.addEventListener("click", () => {
  bookSubmit.showModal();
});

closeBtn.addEventListener("click",()=>{
  bookSubmit.close();
})
myLibrary.push(theHobbit);
addBookToLibrary();
createCard();

readButton();
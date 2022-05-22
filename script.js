const closeBtn = document.getElementById('close-modal');
const modal = document.querySelector('.modal');
const addBook = document.getElementById('modal-button');




let myLibrary = [];


function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

}




addBook.addEventListener('click', () => {
    modal.style.display = "flex";

});


closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

























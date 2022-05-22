
//modal DOM
const closeBtn = document.getElementById('close-modal');
const modal = document.querySelector('.hide-modal');
const addBook = document.getElementById('modal-button');




let myLibrary = [];

//constructor
function Book(title,author,pages){
    this.title = title
    this.author = author
    this.pages = pages
}
function addBookToLibrary(){
    //get the input values from user
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    //const read = document.getElementById("checkbox").value;

    const newBook = new Book(title,author,pages);
    myLibrary.push(newBook);

}


















// we can probably do this an easier way in one function? 
addBook.addEventListener('click', () => {
   modal.classList.remove('hide-modal');
   modal.classList.add('modal');

});


closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal')
    modal.classList.add("hide-modal");
});

























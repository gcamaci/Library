
//modal DOM
const closeBtn = document.getElementById('close-modal');
const modal = document.querySelector('.hide-modal');
const addBook = document.getElementById('modal-button');
const createBook = document.getElementById('create-btn')
const shelf = document.querySelector('main');
const form = document.getElementById('book-form')
let myLibrary = [];

//Placeholder books
const book1 = new Book('To Kill a Mocking Bird',"Harper Lee",299,false);
const book2 = new Book('A Dance With Dragons',"George RR Martin",299,false);
const book3 = new Book('The Winds of Winter',"George RR Martin",299,true);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);


//constructor
function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

}
Book.prototype.ifRead = function (){
    
    if(this.read === false){
        this.read = true;   
    }else{
        this.read = false
        console.log(this.read)
    }
}

function addBookToLibrary(){
    //get the input values from user
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const reads = document.getElementById("read-check").checked;
    
    if(title.value.length > 0 && author.value.length > 0 && pages.value > 0){
        const newBook = new Book(title.value,author.value,pages.value,reads.value);
        myLibrary.push(newBook);
        shelf.textContent = '';
        title.value = '';
        author.value = '';
        pages.value = '';
        console.log(reads)
        displayLibrary()
    }  
}
/* 
1) Loop through each index of Mylibrary and create DOM elements per book
2) Assign each DOM element a data attribute = its index in array
3) Create toggle for read/unread.
*/

function displayLibrary(){
    const readDisplay = document.getElementById('read-amount');
    const bookNumDisplay  = document.getElementById('books');
    const allPages = document.getElementById('total-pages');
    let readTotal = 0;
    let totalBooks = 0;
    let totalPages = 0;
    myLibrary.forEach((Book,index) => {
        totalBooks++
        totalPages = totalPages + parseInt(Book.pages);
        //create Card DOM
        const card = document.createElement('div');
        card.dataset.deleteBook = index;
        card.classList.add('card');
        shelf.appendChild(card);

        const trashCan = document.createElement('div');
        trashCan.classList.add('trash-can')
        const deleteBtn = document.createElement('button');
        deleteBtn.type = "button";
        deleteBtn.dataset.deleteBook = index;
        deleteBtn.classList.add('remove-card');
        card.appendChild(trashCan)
        trashCan.appendChild(deleteBtn);

        //create accent container
        const bookInfo = document.createElement('div');
        bookInfo.classList.add('book-info')
        card.appendChild(bookInfo)

        //card Title DOM
        const cardTitle = document.createElement('h2');
        cardTitle.textContent = Book.title;
        bookInfo.appendChild(cardTitle);

        //card Author
        const cardAuthor = document.createElement('h3');
        cardAuthor.textContent = Book.author;
        cardAuthor.classList.add('card-author')
        bookInfo.appendChild(cardAuthor);

        //Card Pages
        const cardPages = document.createElement('p');
        cardPages.classList.add('card-pages');
        cardPages.textContent = Book.pages;
        bookInfo.appendChild(cardPages);

        //Btn Wrapper
        const btnWrapper = document.createElement('div');
        btnWrapper.classList.add('btn-wrapper');
        card.appendChild(btnWrapper);
        
        // read button
        const readBtn = document.createElement('button')
        readBtn.classList.add('btn')
        readBtn.classList.add('unread')
        readBtn.dataset.readNum = index;
        readBtn.type = "button";
        readBtn.textContent = "Read";

        //switch to ternary
        
        if(Book.read === true){
            readBtn.style.border = "2px solid var(--read-color)"
            readBtn.textContent = "Read";
            readTotal++
            
        }else{
            readBtn.style.border = "2px solid var(--unread-color)"
            readBtn.textContent = 'Not Read';
            
        }
        
        btnWrapper.appendChild(readBtn);
       
        readBtn.addEventListener('click', () => {
            let bookIndex = myLibrary[parseInt(readBtn.dataset.readNum)]
            bookIndex.ifRead()
            shelf.innerHTML = ''
            console.log(myLibrary)
            displayLibrary()
 
        });
        //event listeners 
        deleteBtn.addEventListener('click',() => {
            let deleteMe = parseInt(deleteBtn.dataset.deleteBook);
            deleteBook(deleteMe);
        });
        
    });
    readDisplay.textContent = readTotal;
    bookNumDisplay.textContent = totalBooks;
    allPages.textContent = totalPages;
};

function deleteBook(bookNum){
    myLibrary.splice(bookNum,1)
    shelf.textContent = '';
    displayLibrary()
}

createBook.addEventListener('click', ()=>{
    addBookToLibrary()

});
// we can probably do this an easier way in one function? 

addBook.addEventListener('click', () => {
   modal.classList.remove('hide-modal');
   modal.classList.add('modal');

});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal')
    modal.classList.add("hide-modal");
});

form.addEventListener('submit',(e)=>{
    e.preventDefault()
});
displayLibrary();

function getModal(){
    

}
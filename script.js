
//modal DOM
const closeBtn = document.getElementById('close-modal');
const modal = document.querySelector('.hide-modal');
const addBook = document.getElementById('modal-button');


let myLibrary = [];


//Placeholder books
const book1 = new Book('Giuseppe',"Camaci",299,false);
const book2 = new Book('Giuseppe',"Camaci",299,false);
const book3 = new Book('Giuseppe',"Camaci",299,false);
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
function addBookToLibrary(){
    //get the input values from user
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const shelf = document.querySelector('main');
    //const read = document.getElementById("checkbox").value;
    const newBook = new Book(title,author,pages);
    myLibrary.push(newBook);
    shelf.textContent = '';
    displayLibrary()
    
}
/* 
1) Loop through each index of Mylibrary and create DOM elements per book
2) Assign each DOM element a data attribute = its index in array
3) Create toggle for read/unread.
*/
function displayLibrary(){
    const shelf = document.querySelector('main');
    
    myLibrary.forEach((Book,index) => {
        //create card container DOM
        const card = document.createElement('div');
        card.dataset.deleteBook = index;
        console.log(card.dataset.deleteBook)
        console.log(index)
        card.classList.add('card');
        shelf.appendChild(card);

        //card Title DOM
        const cardTitle = document.createElement('h3');
        cardTitle.textContent = Book.title;
        card.appendChild(cardTitle);

        //card Author
        const cardAuthor = document.createElement('p');
        cardAuthor.textContent = Book.author;
        cardAuthor.classList.add('card-author')
        card.appendChild(cardAuthor);

        //Card Pages
        const cardPages = document.createElement('p');
        cardPages.classList.add('card-pages');
        cardPages.textContent = Book.pages;
        card.appendChild(cardPages);

        //Btn Wrapper
        const btnWrapper = document.createElement('div');
        btnWrapper.classList.add('btn-wrapper');
        card.appendChild(btnWrapper);

        //create closeout button DOM
        const deleteBtn = document.createElement('button');
        deleteBtn.type = "button";
        //deleteBtn.dataset.deleteCard = index
        deleteBtn.textContent = "Remove"
        deleteBtn.classList.add('btn');
        deleteBtn.classList.add('remove-card')
        btnWrapper.appendChild(deleteBtn);
        // read button
        const readBtn = document.createElement('button')
        readBtn.classList.add('btn')
        readBtn.type = "button";
        readBtn.textContent = "read";
        btnWrapper.appendChild(readBtn);

        //event listeners 
        deleteBtn.addEventListener('click',() => {
            //console.log(card.dataset.deleteBook)
            let carder = parseInt(card.dataset.deleteBook);
            console.log(carder)
            
            //console.log(deleteThis);
            console.log(myLibrary)
            //deleteBook(deleteThis);
            deleteBook(carder)

        })


        
        
    });


}

//find an array method besides for each to loop through array and pop the one thats true 
function deleteBook(bookNum){
    const shelf = document.querySelector('main');
    myLibrary.forEach((Book,index) => {
        if(bookNum === index){
            console.log(index);
            shelf.removeChild
        }
        
    });
   
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


displayLibrary();






















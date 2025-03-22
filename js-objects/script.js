function Book(title, author, pages, read){
    if(!new.target){
        throw Error("You must use the new operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "already read" : "not read yet";
    this.info =  function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

const theHobbit = new Book("The Hobbit","J.R.R. Tolkien",295,false);

console.log(theHobbit.info());
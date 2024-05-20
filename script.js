const addBook = document.querySelector("button");
const lib = document.querySelector(".library-container");
const newBooks = document.querySelector(".book");
const dialog = document.querySelector("dialog");
const submit = document.querySelector(".submit");
const t = document.querySelector(".title");
const a = document.querySelector(".author");
const p = document.querySelector(".pages");
const r = document.querySelector("#no");
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
    myLibrary.push(Book);
}



addBook.addEventListener('click', () => {
    dialog.showModal();
    
  });
  submit.addEventListener('click', () => {
    submit.value = t.value;
    dialog.close();
    const boo = document.createElement("div");
    const ti = document.createElement("div");
    const au = document.createElement("div");
    const inf = document.createElement('div');
    const re = document.createElement('div');
    const pa = document.createElement('div');
    const remove = document.createElement('button');
    const img = document.createElement("img");
    img.setAttribute("src", "download (7).jpeg");
    boo.classList.add("book");
    inf.classList.add("info");
    remove.classList.add("remove");
    remove.textContent = "X";
    ti.setAttribute("id", "title");
    au.setAttribute("id", "author");
    re.setAttribute("id", "read");
    pa.setAttribute("id", "page");
    Book(t.value, a.value, p.value, r.checked);
    lib.appendChild(boo);
    boo.appendChild(ti);
    ti.textContent = this.title;
    boo.appendChild(img);
    boo.appendChild(au);
    au.textContent = 'Author: ' + this.author;
    au.appendChild(remove);
    boo.appendChild(inf);
    inf.appendChild(re);
    re.textContent = "Read? " + this.read;
    inf.appendChild(pa);
    pa.textContent = "Pages: " + this.pages;
    remove.addEventListener('click',() =>{
        lib.removeChild(boo);
    });
    console.log(myLibrary);
  });




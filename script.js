function createCards({bookName,ISBN,author,pages,Publisher,dateOfRelease}){
    const container=document.createElement("div");
    container.setAttribute("id","paragraph");
    container.setAttribute("class", "container");
    container.innerHTML=
    `
    <h2><strong>Name of the book:</strong><u> ${bookName}</u></h2>
    <p><strong>ISBN:</strong> ${ISBN}</p>
    <p><strong>Author:</strong> ${author}</p>
    <p><strong>No. of Pages:</strong>${pages} pages</p>
    <p><strong>Publishers:</strong> ${Publisher}</p>
    <p><strong>Date of Release:</strong> ${dateOfRelease}</p>
    `
    document.body.append(container);
    
}

fetch("https://anapioficeandfire.com/api/books")
.then((data) => data.json())
.then((api) => {
api.forEach((data_api) =>{
    const dataApi = {
        bookName: data_api.name,
        ISBN: data_api.isbn,
        author: data_api.authors,
        pages: data_api.numberOfPages,
        Publisher: data_api.publisher,
        dateOfRelease: data_api.released,
        
        

    };
    createCards(dataApi);
})
})

// Characters to be escaped [.*+?^${}()|[\]\\] 

function search(){
    let textToSearch = document.getElementById("texttosearch").value;
    let paragraph = document.getElementById("paragraph");
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    let pattern = new RegExp(`${textToSearch}`,"gi");

    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}
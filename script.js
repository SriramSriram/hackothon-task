var count=0;
function createCards({bookName,ISBN,author,pages,Publisher,dateOfRelease}){
    count++;
    const container=document.createElement("div");
    container.setAttribute("id",`paragraph${count}`);
    
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
    console.log(container)
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
for(i=1;i<=count;i++){    

  let textToSearch = document.getElementById("texttosearch").value;
  console.log(textToSearch)
    let paragraph = document.getElementById(`paragraph${i}`);
    console.log(paragraph)
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    
    let pattern = new RegExp(`${textToSearch}`,"gi");

    paragraph.innerHTML = paragraph.innerHTML.replace(pattern, match => `<mark>${match}</mark>`)
    console.log(paragraph)
    console.log(textToSearch)
    
   
    }
}
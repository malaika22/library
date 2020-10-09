//Query Selectors
const addBook=document.getElementById('add-book-button');
const modalContainer= document.querySelector(".modal-container");
const tableBody= document.querySelector('#table-body')
formInputs ={
  titleInput: document.getElementById('title'),
  authorInput: document.getElementById('author'),
  genreInput: document.getElementById('genre'),
  progessInput: () =>{
    const readInput=document.getElementById('read');
    const notReadInput = document.getElementById('not-read');
    if(readInput.checked){
      return readInput;
    }else{
      return notReadInput;
    }
  }
}


//intializing data
let books=[];

// #####################FUNCTIONS ######################

//Reset form fields function
resetFormFields= () =>{
  for(let i=0; i<Object.keys(formInputs).length ; i++){
    document.querySelectorAll('input')[i].value = ""
  } 
    formInputs.progessInput().checked = false;
}

//Modifying table function

const tableContent = () =>{
  return `<tr>
            <td>${books[books.length-1].title}</td>
            <td>${books[books.length-1].author}</td>
            <td>${books[books.length-1].genre}</td>
            <td>${books[books.length-1].progess}</td>
            <td class="delete-icon"><i class="fa fa-trash-o" aria-hidden="true"></i></td>   
          </tr>`
}



// #####################EVENT LISTENERS ######################

//popup form option
document.querySelector(".addBooks").addEventListener("click", function(){
    modalContainer.style.display= 'block';
});

//Cancel option
document.getElementById('cancel-button').addEventListener('click',function(event){
  event.preventDefault();
  modalContainer.style.display= "none";
})



 


//Adding books
addBook.addEventListener("click",function(event){
    event.preventDefault();
    books.push({
    title: formInputs.titleInput.value,
    author: formInputs.authorInput.value,
    genre: formInputs.genreInput.value,
    progess: formInputs.progessInput().value
    })
    resetFormFields();
    modalContainer.style.display= "none";
    tableBody.insertAdjacentHTML('beforeend', tableContent())
})

document.addEventListener('click', e => {
  const tbody = e.target.parentNode.parentNode;
  const row= e.target.parentNode
  const removeRowIndex = row.rowIndex-1;
  if(e.target.className === 'delete-icon'){
    console.log(removeRowIndex)
    books = books.filter(item =>{return books.indexOf(item) != removeRowIndex });
    tbody.removeChild(row);

  }
})
 


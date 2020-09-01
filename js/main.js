const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');
const completed = document.querySelector('.completed');

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input= document.createElement('input');
        input.value= itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type=Text;

        let itemBox= document.createElement('div')
        itemBox.classList.add('item');

        let editButton= document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');

        let removeButton= document.createElement('button')
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () =>this.edit(input));
       

    }


    edit(input){
        input.disabled= !input.disabled;
    }
}
showNotes();
showNotes2();
function check(){
    let addTxt = document.getElementById("addTxt");
    // console.log(addTxt.value)
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    notesObj = localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    
    // console.log(notes)
    showNotes();
    
}

function complete(){
    let addT = $('.item_input').attr('value')
   
    let notes2 = localStorage.getItem("notes2");
    if (notes2 == null) {
        notesObj2 = [];
    }
    else {
        notesObj2 = JSON.parse(notes2);
    }
    notesObj2.push(addT);
    notesObj2 = localStorage.setItem("notes2", JSON.stringify(notesObj2));
    
    
    showNotes2();
    deleteNote();
    
}

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="item">
        
        <input class="item_input" id="addT${index}" value=${element}>
        <button  class="editButton"><i class="far fa-edit"></i></buttton>
        <button id="${index}" onclick="deleteNote(this.id)" class="removeButton"><i class="far fa-trash-alt"></i></button>
        <button  onclick="complete()"  class="completed"><i class="fas fa-check-circle"></i></buttton>
    </div>`

    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `<h6><span class="styling">Nothing to show</span></h6>`;
    }

}

function showNotes2() {
    let notes2 = localStorage.getItem("notes2");
    if (notes2 == null) {
        notesObj2= [];
    }
    else {
        notesObj2 = JSON.parse(notes2);
    }
    let html2 = "";
    notesObj2.forEach(function (element, index) {
        html2 += `
        <div class="item">
        
        <input class="item_input"  value=${element}>
        
        <button id="${index}" onclick="deleteNote2(this.id)" class="removeButton"><i class="far fa-trash-alt"></i></button>
        
    </div>`

    });
    let notesElm2 = document.getElementById("notes2");
    if (notesObj2.length != 0) {
        notesElm2.innerHTML = html2;
    } else {
        notesElm2.innerHTML = `<h6><span class="styling">Nothing to show</span></h6>`;
    }

}

function deleteNote2(index) {
    // console.log(index);
    let notes2 = localStorage.getItem("notes2");
    if (notes2 == null) {
        notesObj2 = [];
    }
    else {
        notesObj2 = JSON.parse(notes2);
    }
    notesObj2.splice(index, 1);
    notesObj2 = localStorage.setItem("notes2", JSON.stringify(notesObj2));
    showNotes2();
}

function deleteNote(index) {
    
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    notesObj = localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


addButton.addEventListener('click', check);

















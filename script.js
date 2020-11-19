document.getElementById("listToDo").style.display='none'
let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", myFunction);
function myFunction() {
    let toDo = document.getElementById("toDo").value;
    if (!toDo) {
        return alert('Form tidak boleh kosong');
    }
    let table = document.getElementById("toDoTable"); 
    let i = table.rows.length;
    let row = table.insertRow(i);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML =  i+1+'.';
    cell2.innerHTML =  toDo;
    cell3.innerHTML =  `<button class="buttonDone"><img src="https://img.icons8.com/doodle/192/000000/checkmark.png" /></button>`;
    cell4.innerHTML =  `<button class="buttonDel"><img src="https://img.icons8.com/doodle/48/000000/delete-sign.png"/></button>`;
    document.getElementById("toDo").value = '';
    document.getElementById("listToDo").style.display='block';
    done(i);

}

function done(i) {
    let btnDone = document.getElementsByClassName("buttonDone");
    btnDone[i].addEventListener("click", function() {       
        let toDoTable = document.getElementById("toDoTable")
        let textDecor = toDoTable.rows[i].style.textDecoration;
        if (!textDecor || textDecor === 'none') {
            toDoTable.rows[i].style.textDecoration = "line-through"; 
        } else {
            toDoTable.rows[i].style.textDecoration = "none";
        }        
    });
   
  }
  
 


    
    
    
  
let btnDne = document.getElementById("btnDne");
console.log(btnDne);

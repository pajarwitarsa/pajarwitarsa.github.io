document.getElementById("listToDo").style.display='none'
let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", myFunction);
function myFunction() {
    let toDo = document.getElementById("toDo").value;
    if (!toDo) {
        return alert('Form tidak boleh kosong');
    }
    let table = document.getElementById("toDoTable"); 
    let idx = table.rows.length;
    let isiTd = [idx + 1 + '.', 
                toDo, 
                `<button class="buttonDone"><img src="https://img.icons8.com/doodle/192/000000/checkmark.png" /></button>`,
                `<button class="buttonDel"><img src="https://img.icons8.com/doodle/48/000000/delete-sign.png"/></button>`
                ]
    insertRow(table, idx, isiTd);
   
    document.getElementById("toDo").value = '';
    document.getElementById("listToDo").style.display='block';
    

}

function insertRow(table, idx, isiTd){

    let row = table.insertRow(idx);
    for (let i = 0; i < isiTd.length; i++) {
        let cell = row.insertCell(i);
        cell.innerHTML = isiTd[i];        
    }
    done(idx);
    del(idx);
}

function done(idx) {
    let btnDone = document.getElementsByClassName("buttonDone");
    btnDone[idx].addEventListener("click", function() {       
        let toDoTable = document.getElementById("toDoTable")
        let textDecor = toDoTable.rows[idx].style.textDecoration;
        if (!textDecor || textDecor === 'none') {
            toDoTable.rows[idx].style.textDecoration = "line-through"; 
        } else {
            toDoTable.rows[idx].style.textDecoration = "none";
        }        
    });
   
}

function del(idx) {
    let btnDel = document.getElementsByClassName("buttonDel");
    btnDel[idx].addEventListener("click", function() {       
        let table = document.getElementById("toDoTable");         
        let length = table.rows.length;
        let newArr = [];
        let newStr = '';
        for (let i = 0; i < length; i++) {
            if (i !== idx) {
                let str = table.rows[i].textContent;   
                for (let j = 2; j < str.length; j++) {
                    newStr += str[j];
                } 
                newArr.push(newStr);
                newStr = '';  
            }            
        } 
        if (newArr.length === 0) {
            document.getElementById("listToDo").style.display='none';
        }       
        for (let i = 0; i < length; i++) {
            table.deleteRow(0);            
        }
        for (let i = 0; i < newArr.length; i++) {
            let isiTd = [i + 1 + '.', 
            newArr[i], 
                `<button class="buttonDone"><img src="https://img.icons8.com/doodle/192/000000/checkmark.png" /></button>`,
                `<button class="buttonDel"><img src="https://img.icons8.com/doodle/48/000000/delete-sign.png"/></button>`
                ]
            insertRow(table, i, isiTd);
        }
        
    });
}


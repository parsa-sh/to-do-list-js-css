const addBtn = document.getElementById("submit");
const inputText = document.getElementById("input");
const taskList = document.getElementById("taskList");

function task() {
    if(inputText.value===""){
        alert("Your task can't be empty")
    }else{
        // console.log(inputText.value);
        let li = document.createElement("li");
        li.innerHTML = inputText.value; 
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    
    
}

taskList.addEventListener("click" , function (e){
    if(e.target.tagName === "LI" ){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
} , false );

addBtn.addEventListener('click',()=>{
    task();
    inputText.value = "";
    saveData()
})


inputText.addEventListener("keypress" , (i)=>{
    if(i.key === 'Enter'){
        task();
        inputText.value = "";
        saveData()
    }
})


function saveData(){
    localStorage.setItem("data" , taskList.innerHTML);
}

function restoreData(){
    taskList.innerHTML = localStorage.getItem("data");
}

restoreData();

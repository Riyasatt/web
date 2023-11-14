const inputData=document.getElementById("inputArea")
const listData=document.getElementById("listData")
inputData.val
function addTask(){
    if(inputData.value === ""){
        alert("There is no Input")
    }else{
        let listItem=document.createElement("li")
        listItem.innerHTML=inputData.value
        listData.appendChild(listItem)
        inputData.value=""
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        listItem.appendChild(span)
    }
    inputData.value=""
    saveData()
}

listData.addEventListener("click",function(event){
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("checked")
        saveData()
    }
    else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data",listData.innerHTML)
}
function showData(){
    listData.innerHTML=localStorage.getItem("data")
}
showData()
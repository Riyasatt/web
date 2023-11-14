const button=document.getElementById("containerId")
let inputScreen=document.getElementById("display")
button.addEventListener("click",function(event){
    if(event.target.className==="equals"){
        // inputScreen.value=eval(inputScreen.value)
        inputScreen.value=eval(inputScreen.value)         
    }
    else if(event.target.id==="clear"){
        inputScreen.value=""
    }
    else if(event.target.id==="negative"){
        inputScreen.value=(-1)*inputScreen.value
    }
    else if(event.target.id==="percent"){
        inputScreen.value=eval(inputScreen.value)
        inputScreen.value=inputScreen.value/100  
    }
    else if(event.target.tagName==="BUTTON"){
        inputScreen.value=inputScreen.value+event.target.value
    }
})


// with onclick function 
const body = document.querySelector('body')
const buttons=document.querySelectorAll('.button')
function colorchange(id) {
    // You can now use the 'id' parameter to get the ID of the clicked div
    console.log("Clicked div ID:", id);
    // Example: changing the background color of the clicked div
    if(id==='ash'){
        body.style.backgroundColor="#B2BEB5"
    }
    else if(id==='white'){
        body.style.backgroundColor="#FFFFFF"
    }
    else if(id==='yellow'){
        body.style.backgroundColor="#FFFF00"
    }
    else if(id==='blue'){
        body.style.backgroundColor="#0000FF"
    }
}
//without onclick function
buttons.forEach(function (button){
    button.addEventListener('click',function(e){
        if(e.target.id==='ash'){
            body.style.backgroundColor="#B2BEB5"
        }
        else if(e.target.id==='white'){
            body.style.backgroundColor="#FFFFFF"
        }
        else if(e.target.id==='yellow'){
            body.style.backgroundColor="#FFFF00"
        }
        else if(e.target.id==='blue'){
            body.style.backgroundColor="#0000FF"
        }
    })
})

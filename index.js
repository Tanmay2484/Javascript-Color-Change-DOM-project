function colorchange(id) {
    // You can now use the 'id' parameter to get the ID of the clicked div
    console.log("Clicked div ID:", id);
    // Example: changing the background color of the clicked div
    if(id==='ash'){
        document.querySelector('body').style.backgroundColor="#B2BEB5"
    }
    else if(id==='white'){
        document.querySelector('body').style.backgroundColor="#FFFFFF"
    }
    else if(id==='yellow'){
        document.querySelector('body').style.backgroundColor="#FFFF00"
    }
    else if(id==='blue'){
        document.querySelector('body').style.backgroundColor="#0000FF"
    }
}
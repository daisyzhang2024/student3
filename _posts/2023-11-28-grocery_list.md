---
layout: base
title: Grocery list
description: digital clock
type: hacks
courses: { compsci: {week: 16} }
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <title>Responsive grocery list</title>
</head>
<body>
<div class = "container">
<div class="groceries">
<h1 style="text-align: center;">Grocery List</h1>
<br>
<div style="text-align: center;">
<i id="pencil" class="fa-solid fa-pencil"></i><input id="userInput" type="text">
</div>
<br>
<div id="allItems"></div>
</div>
</div>
</body>
</html>

<style>
*{
    padding: 0;
    margin: 0;
}

body{
    font-family: "Momoyo";
    background: orange;
}

.container{
    width: 90%;
    margin: auto; /*in the center*/
    display: flex;
}

.groceries{
    width: 600px;
    min-height: 100vh; /* grocery list grows, container grows*/
    margin: auto;
    background: white;
    box-shadow: 10px 10px 24px 0 rgba(0, 0, 0, 0.5);
}
.groceries h1{
    font-size: 2.5rem;
    margin-top: 1em; /*bring it down from the top*/
}
.groceries i{
    font-size: 2rem;
    color: orange;
}

.groceries input{
    font-family: inherit;
    outline: 0;
    border: 0;
    border-bottom: 3px solid black;
    width: 70%;
    font-size: 1.5rem;
}

#allItems h2{
    margin-left: 50px; /* not so close to edge*/
    margin-right: 10px;
    margin-top: 15px;
    font-size: 2rem;
}

@media(max-width: 480px){
    .groceries h1{
        font-size: 2rem;
    }
    .groceries i{
        font-size: 1.5rem;
    }
    .groceries input{
        font-size: 1rem;
    }
    #allItems h2{
        margin-left: 25px;
        font-size: 1.5rem;
    }
}
</style>

<script>
const groceries = document.getElementsByClassName("groceries")
const pencil = document.getElementById("pencil");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");

//delete button
pencil.addEventListener("click", function(){
    allItems.innerHTML = "";
})

userInput.addEventListener("keydown", function(event){
    if(event.key =="Enter")
    addItem();
})
function addItem(){
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through";
    })

    allItems.insertAdjacentElement("beforeend", h2); //always insert grocery item at the end of the list

    userInput.value = "";


}
</script>
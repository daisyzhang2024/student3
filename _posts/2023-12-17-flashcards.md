---
layout: base
title: Flashcards
description: flashcareds loloosl
type: hacks
courses: { compsci: {week: 17} }
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <title>Flashcards</title>
</head>
<body>
<header>
<div class="container">
<div class="nav">
    <h1>Flashcards</h1>
    <div>
    <button onclick="showCreateCardBox()">New Card</button>
    <button onclick="delFlashcards()">Del Cards</button>
    </div>
</div>
</div>
</header>
<div class="container">
<div class="create-box">
<h2 style="text-align: center; color: black;">Create Flashcard</h2>
<label for="question">Question</label>
<textarea id="question"></textarea>
<br>
<label for="answer">Answer</label>
<textarea id="answer"></textarea>
<div>
<button onclick="AddFlashcard()">Save</button>
<button onclick="hideCreateBox()">Close</button>
</div>
</div>
<div class="flashcards"></div>
</div>
</body>
</html>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
/* remove default padding and margins with asterick*/
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Sacramento', cursive;
    font-size: 1rem;
    background-color: whitesmoke;
}

header{
    background-color: white;
}

button{
    padding: 8px;
    outline: none;
    cursor: pointer;
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: whitesmoke;
}

button:hover{
    background-color: rgba(0, 0, 0, 0.1);
}

.container{
    width: 95%;
    margin: auto;
}

.nav{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: auto;
    padding: 20px 0; /*0 padding on left and right*/
    background-color: white;
}

.nav button{
    font-family: inherit;
}

.create-box{
    width: 380px;
    margin: auto;
    padding: 20px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: whitesmoke;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5); /*only shadow on right and bottom of box*/
}

.create-box textarea{
    width: 100%;
    border-radius: 5px;
    font-family: inherit;
    border: 1px solid lightgray;
}

.create-box button{
    width: fit-content;
}

.flashcards{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start; /*starting from the left, flexes so that when it doesn't fit it goes underneath*/
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    margin-top: 10px;
    padding: 0 10px; /*left right padding is 10px*/
    }

.flashcard{
    width: 370px;
    height: 200px;
    word-wrap: break-word; /*very long word, will get broken up*/
    margin: 10px;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}

.flashcard h2{
    font-size: 1rem; /* actual font sixe of flashcard*/
}

@media(max-width: 768px){
    .flashcard{
        margin: auto; /* get to 768 px, flashcards go to center*/
    }

    .flashcard{
        margin-top: 10px;
        margin-bottom: 10px;
    }
}

@media(max-width:480px){
    .nav{
        flex-direction: column;
        align-items: center;
    }
    .create-box{
        width: 100%;
    }

    .flashcard{
        width: 100%;
    }
}
</style>

<script>
const flashcards = document.getElementByClassName("flashcards")[0];
const createBox = document.getElementByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; // if items array exists/using local storage, then JSON.parse, if doesn't exist then set it as empty

contentArray.forEach(divMaker);
function divMaker(text){
    //each flashcard is a div element, divmaker
    var div = document.createElement("div");
    var h2_question = document.createElement("h2");
    var h2_answer = document.createElement("h2");

    div.className = "flashcard";

    h2_question.setAttribute('style', "border-top:1px solid red; padding: 15px; margin-top: 30px"); //actual flashcard line;

    h2_question.innerHTML = text.my_question;
    //bringing in dictionary, to access question use key of my question

    h2_answer.setAttribute("style", "text-align: center;display: none; color:red");
    h2_answer.innerHTML = text.my_answer;

    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click", function(){
        if(h2_answer.style.display == "none")
        h2_answer.style.display = "block";
    else
        h2_answer.style.display = "none";
    });

    //add div element onto flashcards container
    flashcards.appendChild(div);
}

function addFlashcard(){
    var flashcard_info = {
        'my_question' : question.value,
        'my_answer' : answer.value
    }

    contentArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    question.value = '';
    answer.value = '';
}

function delFlashcards(){
    localStorage.clear();
    flashcards.innerHTML = ''; //gets rid of what you created
    contentArray = [];
}

function showCreateCardBox(){
    createBox.style.display = "block";
}
function hideCreateBox(){
    createBox.style.display = "none";
}
</script>
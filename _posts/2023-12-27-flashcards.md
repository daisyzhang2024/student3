---
layout: base
title: Flashcards 2 
description: flashcards again loloosl cause I failed the first time
type: hacks
courses: { compsci: {week: 18} }
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <title>Flashcards 2</title>
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
<!--Create flashcards box here-->
<div class="container">
    <div class="create-box">
        <h2 style="text-align: center;color: black;">Create Flashcard</h2>
        <label for="question">Question</label>
        <textarea id="question"></textarea>
        <br>
        <label for="answer">Answer</label>
        <textarea id="answer"></textarea>
        <div>
            <button onclick="addFlashcard()">Save</button>
            <button onclick="hideCreateBox()">Close</button>
        </div>
    </div>
    <!--Actual flashcards here, add via javascript-->
    <div class="flashcards"></div>
</div>
</body>
</html>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
/*remove default settings*/
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Sacramento', cursive;
    font-size: 1.5rem;
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
    padding: 20px 0;
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
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}

.create-box textarea{
    width: 100%;
    border-radius: 5px;
    font-size: 1.5rem;
    font-family: inherit;
    border: 1px solid lightgray;
}

.create-box button{
    width: fit-content;
}
/*flexbox flashcards, flex start starting it on the left*/
.flashcards{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    margin-top: 10px;
    padding: 0 10px; 
}

.flashcard{
    width: 370px;
    height: 200px;
    word-wrap: break-word; /*really long breaks the sentence*/
    margin: 10px;
    background-color: white;
    box-shardow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}

.flashcard h2{
    font-size: 1.5rem;
}

@media(max-width: 760px){
    .flashcard{
        margin: auto;
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
// get access to the flashcards container
const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
//storage to get content to display on screen
//if using local storage add to array if not create a new array
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

contentArray.forEach(divMaker);
function divMaker(text){
    var div = document.createElement("div");
    var h2_question = document.createElement("h2");
    var h2_answer = document.createElement("h2");

    div.className = 'flashcard';

    //creating h2 elements dynamically, add CSS here
    //set many CSS features at the same time
    h2_question.setAttribute('style', "border-top: 1px solid red; padding: 15px; margin-top: 30px");
    //accessing dictuionary
    h2_question.innerHTML = text.my_question;
    //first hidden, then display with red text
    h2_answer.setAttribute("style", "text-align:center; display:none; color:red");
    h2_answer.innerHTML = text.my_answer;
    //add h2 elements to div element
    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click", function(){
        if(h2_answer.style.display == "none")
            h2_answer.style.display = "block";
        else
            h2_answer.style.display = "none";
    });

    //add to flashcards container
    flashcards.appendChild(div);
}

function addFlashcard(){
    // adding keys and values
    var flashcard_info = {
        'my_question' : question.value,
        'my_answer' : answer.value,
    }
    //adding to local storage
    contentArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    //displaying on screen
    divMaker(contentArray[contentArray.length - 1]);
    question.value = '';
    answer.value = '';
    //now create div maker function to put flashcards on screen
    
}

function delFlashcards(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

function showCreateCardBox(){
    createBox.style.display = "block";
}

function hideCreateBox(){
    createBox.style.display = "none";
}
</script>

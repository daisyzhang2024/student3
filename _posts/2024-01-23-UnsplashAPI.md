---
layout: base
title: Unsplash API
description: Unsplash API lolol
type: hacks
courses: { compsci: {week: 20} }
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous">
    <title>Unsplash API</title>
</head>

<body>

<header>
<div class="container">
    <div class="nav">
        <h2><i class="fa-solid fa-camera" style="color: orange;"></i> Unsplash API Demo</h2>
        <div class="search-box">
            <input type="text" id="input" placeholder="Search..."><i onclick="loadImg()" class="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
</div>
</header>
<div class="container">
    <div class="grid"></div>
</div>
</body>
</html>


<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');

*{
    padding: 0;
    margin: 0;
}

body{
    font-family: 'Comfortaa', sans-serif;
    background-color: black;
    color: white;
}

header{
    border-bottom: 5px solid orange;
}

.container{
    width: 95%;
    margin: auto;
}

.nav{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 25px 0;
}

.nav h2{
    font-size: 2rem;
}

.search-box{
    position: relative;
    width: 350px;
}

.search-box input{
    box-sizing: border-box;
    width: 100%;
    font-size: 1rem;
    padding: 8px;
    border-radius: 25px;
    outline: none;

    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: 0.30s ease-in-out;
    transition: all 0.30s ease-in-out;
    border: 1px solid lightgray;
}

input:focus{
    box-shadow: 0 0 5px orange;
    border: 1px solid orange;
}

.search-box i{
    color: black;
    position: absolute;
    top: 25%;
    right: 4%;
    transition: 1.5s;
}

.search-box i:hover{
    color: orange;
}

.grid{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
}

.img{
    width: 380px;
    height: 200px;
    margin-top: 15px;
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 2px;
}

@media(max-width:768px){
    .img{
        width: 100%;
    }

    .nav{
        justify-content: center;
    }

    .nav h2{
        padding: 5px 0;
    }
}

@media(max-width:480px){
    .nav h2{
        text-align: center;
        font-size: 1.5rem;
    }

    .search-box{
        width: 80%;
        margin: auto;
    }

    .search-box input{
        font-size: .7rem;
    }
}
</style>

<script>
const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];

window.addEventListener('load', dayNightMode);

input.addEventListener('keydown', function(event){
    if(event.key === 'Enter')
        loadImg();
})

function loadImg(){
    removeImages();

    const url = 'https://api.unsplash.com/search/photos/?query='+input.value+'&per_page=12&client_id=gI3NW1cRIZuDhxjaaSw-T4dM2xWbD4jXRlR90uOgRg8';

    fetch(url)

    .then(response =>{
        console.log(response);
        if(response.ok) //check if response is true
            return response.json(); //send over data from request
        else
            alert(response.status)
        //display a message telling us why unsuccessful
    })

    .then(data =>{ //do whatever we want with data
        const imageNodes = []; //retrieve it, place it in an array
        for(let i = 0; i < data.results.length;i++){ // if less than array we are recieving, loop it again
            imageNodes[i] = document.createElement('div'); //a new div for the image
            imageNodes[i].className = 'img'; //each div element has img class name
            imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
            imageNodes[i].addEventListener('dblclick', function(){
                window.open(data.results[i].links.download, '_blank');
            }) //if double click, image opens on another page and you can download it 
            grid.appendChild(imageNodes[i]); //add div element onto grid
        }
    })
}

function removeImages(){ //everytime make a request remove old images
    grid.innerHTML = '';
}

function dayNightMode(){
    const date = new Date()
    const hour = date.getHours();

    if(hour >= 7 && hour <= 19){
        document.body.style.backgroundColor = 'whitesmoke';
        document.body.style.color = 'black';
    }
    else{
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
}
</script>

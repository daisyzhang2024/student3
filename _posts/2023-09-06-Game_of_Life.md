---
toc: false
comments: false
layout: post
title: Game of Life
description: Game with grid of cells, each being dead or alive and evolving over generations of "people"
type: hacks
courses: { compsci: {week: 3} }
---
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conway's Game of Life</title>
    <style>
        /* Define CSS styles for cells (alive and dead) */
        .grid-container {
            display: grid;
            grid-template-columns: repeat(10, 20px); /* Adjust grid size here */
            grid-template-rows: repeat(10, 20px); /* Adjust grid size here */
            grid-gap: 1px; /* Adjust gap between cells */
            aspect-ratio: 1; /* Maintain a square aspect ratio */
        }
        .cell {
            width: 20px;
            height: 20px;
            border: 1px solid #ccc;
            background-color: white;
        }
        .alive {
            background-color: #000;
        }
    </style>
</head>

<body>
    <h1>Conway's Game of Life</h1>
    <button id="startStop">Start</button>
    <button id="clear">Clear</button>
    <div class="grid-container" id="grid"></div>

<script>
    const gridSize = 10; // Adjust grid size here
    const gridContainer = document.getElementById("grid");
    const startStopButton = document.getElementById("startStop");
    const clearButton = document.getElementById("clear");
    let isRunning = false;
    let interval;

    // Create the initial grid
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridContainer.appendChild(cell);
    }

    // Function to update the grid based on the game rules
    function updateGrid() {
        const cells = document.querySelectorAll(".cell");
        // Your implementation of Conway's Game of Life rules here
        // Iterate through cells and update their state (alive or dead)
    }

    // Function to start/stop the game
    function toggleGame() {
        if (isRunning) {
            clearInterval(interval);
            isRunning = false;
            startStopButton.textContent = "Start";
        } else {
            interval = setInterval(updateGrid, 100); // Adjust the interval as needed
            isRunning = true;
            startStopButton.textContent = "Stop";
        }
    }

    // Function to clear the grid
    function clearGrid() {
        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.classList.remove("alive");
        });
    }

    // Event listeners
    startStopButton.addEventListener("click", toggleGame);
    clearButton.addEventListener("click", clearGrid);

    // Additional event listeners and game logic go here

</script>
</body>
</html>


---
toc: false
comments: false
layout: post
title: Calculator
description: Simple calculator using HTML, CSS, and JavaScript. This project has basic user interface design and event handling in JavaScript.
type: hacks
courses: { compsci: {week: 3} }
---

<html>
<head>
    <title>Simple Calculator</title>
</head>
<body>
    <h1>Simple Calculator</h1>
    <div id="calculator">
        <input type="text" id="display" readonly>
        <div>
            <button onclick="clearDisplay()">C</button>
            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button onclick="appendToDisplay('+')">+</button>
        </div>
        <div>
            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button onclick="appendToDisplay('-')">-</button>
        </div>
        <div>
            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button onclick="appendToDisplay('*')">*</button>
        </div>
        <div>
            <button onclick="appendToDisplay('0')">0</button>
            <button onclick="appendToDisplay('.')">.</button>
            <button onclick="calculateResult()">=</button>
            <button onclick="appendToDisplay('/')">/</button>
        </div>
    </div>

<script>
    let currentInput = "";

    function appendToDisplay(value) {
        currentInput += value;
        document.getElementById("display").value = currentInput;
    }

    function clearDisplay() {
        currentInput = "";
        document.getElementById("display").value = "";
    }

    function calculateResult() {
        try {
            currentInput = eval(currentInput).toString();
            document.getElementById("display").value = currentInput;
        } catch (error) {
            document.getElementById("display").value = "Error";
        }
    }
</script>
</body>
</html>

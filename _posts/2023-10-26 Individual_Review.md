---
toc: true
comments: false
layout: post
title: Individual Review
description: Individual Review showing my learnings for the trimester
type: hacks
courses: { compsci: {week: 9} }
---
# Daisy Zhang's Individual Review
## My key tangibles and learnings from this tri:
- Cases and functions via the snake game
- Learning how to use frames and animate with classes in Sprites
- Collision mechanisms in creating platforms
- Adding conditions and search Query in creating my minigames

## Snake Game
I figured out how to add WASD keys by using cases, also learned logic in Javascript.

<script>
let changeDir = function(key){
            // test key and switch direction
            switch(key) {
                case 37:    // left arrow
                case 65:    // 'A' key
                    if (snake_dir !== 1)    // not right
                        snake_next_dir = 3; // then switch left
                    break;
                case 38:    // up arrow
                case 87:    // 'W' key
                    if (snake_dir !== 2)    // not down
                        snake_next_dir = 0; // then switch up
                    break;
                case 39:    // right arrow
                case 68:    // 'D' key
                    if (snake_dir !== 3)    // not left
                        snake_next_dir = 1; // then switch right
                    break;
                case 40:    // down arrow
                case 83:    // 'S' key
                    if (snake_dir !== 0)    // not up
                        snake_next_dir = 2; // then switch down
                    break;
            }
        }
</script>

## Sprites

## Platforms

## Minigames
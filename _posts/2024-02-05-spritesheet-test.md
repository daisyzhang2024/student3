---
layout: base
title: Spritesheet Test
description: Spritesheet Test
type: hacks
courses: { compsci: {week: 21} }
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Spritesheet Test</title>
</head>


<style>

</style>

<script>
class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop) {
        Object.assign(this, { spritesheet, xStart, yStart, height, width, frameCount, frameDuration, framePadding, reverse, loop });

        this.elapsedTime = 0;
        this.totalTime = this.frameCount * this.frameDuration;
    };

    drawFrame(tick, ctx, x, y, scale) {
        this.elapsedTime += tick;

        if(this.isDone()) {
            if (this.loop) {
                this.elapsedTime -= this.totalTime;
            } else {
                return;
            }
        }

        let frame = this.currentFrame();
        if (this.reverse) frame = this.frameCount - frame - 1;

        ctx.drawImage(this.spritesheet, 
            this.xStart + frame * (this.width + this.framePadding), this.yStart,
            this.width, this.height,
            x, y, 
            this.width * scale,
            this.height * scale);
    };

    currentFrame(){
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };


};

class Timer {
    constructor() {
        this.gameTime = 0;
        this.maxStep = 0.05;
        this.lastTimestamp = 0;
    };

    tick() {
        var current = Date.now(); //returns current time in milliseconds
        var delta = (current - this.lastTimestamp) / 1000;
        //difference between current time and last time we did this, divide to get seconds
        this.lastTimestamp = current;
        //update to get current time

        var gameDelta = Math.min(delta, this.maxStep);
        this.gameTime += gameDelta;
        return gameDelta;
        //return the delta, return the difference
    };
};

class Goomba {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y, spritesheet });

        //state variables
        this.size = 0; // 0 = little, 1 = big, 2 = super, 3 = little invincible, 4 = big invincible
        this.facing = 0; // 0 = right, 1 = left
        this, state = 0; // 0 = idle, 1 = walking, 2 = running, 3 = jumping/falling

        this.velocity = 0;

        this.animaiton = new Animator(this.spritesheet)

        this.loadAnimations(spritesheet);
    };

    loadAnimations(spritesheet);

    update() {
        //update velocity
        //update position
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 209, 52, 16, 0, 0, 48, 96);
    }
}
</script>

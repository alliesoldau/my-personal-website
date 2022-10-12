
// Focusing on the AboutMe bubble for now
// Need to make the colors of the button toggle with each click
// Need to make the entire AboutMe box toggle with each click
// Need to add in this code for the other bubbles
// Need to make it so clicking one button makes all the others revert to neutral

var element = document.getElementById('toggleAboutMe');
element.onclick = function () { 
    if (this.style.backgroundColor = "e0ff4fff") {
        this.style.backgroundColor = "#57a773ff";
        this.style.borderRadius = "50% 50% 0% 0%";
        var boxAboutMe = document.getElementById("boxAboutMe");
        boxAboutMe.style.display = "none";
    } else {
        this.style.backgroundColor = "#e0ff4fff";
        var boxAboutMe = document.getElementById("boxAboutMe");
        boxAboutMe.style.display = "block";
    } 
 };

var element = document.getElementById('toggleResume');
element.onclick = function () { 
    if (this.style.backgroundColor = "e0ff4fff") {
        this.style.backgroundColor = "#57a773ff";
        this.style.borderRadius = "50% 50% 0% 0%";
    } else {
        this.style.backgroundColor = "#e0ff4fff";
    } 
};

var element = document.getElementById('toggleVolunteering');
element.onclick = function () { 
    if (this.style.backgroundColor = "e0ff4fff") {
        this.style.backgroundColor = "#57a773ff";
        this.style.borderRadius = "50% 50% 0% 0%";

    } else {
        this.style.backgroundColor = "#e0ff4fff";
    } 
};

var element = document.getElementById('togglePassions');
element.onclick = function () { 
    if (this.style.backgroundColor = "e0ff4fff") {
        this.style.backgroundColor = "#57a773ff";
        this.style.borderRadius = "50% 50% 0% 0%";
    } else {
        this.style.backgroundColor = "#e0ff4fff";
    } 
 };

var element = document.getElementById('togglePersonalProjects');
element.onclick = function () { 
    if (this.style.backgroundColor = "e0ff4fff") {
        this.style.backgroundColor = "#57a773ff";
        this.style.borderRadius = "50% 50% 0% 0%";
    } else {
        this.style.backgroundColor = "#e0ff4fff";
    } 
 };
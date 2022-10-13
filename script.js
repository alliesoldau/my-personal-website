
// Need to make it so clicking one button makes all the others revert to neutral
// All buttons need to be clicked twice to start --> the JS is "changing" the color of the dots on the first click
// To the yellow color. But it's meant to start out with the yellow color. So something is messed out with the logic.

var element = document.getElementById('toggleAboutMe');
element.onclick = function () {
    var toggleResume = document.getElementById("toggleResume");
    if (this.style.backgroundColor == "rgb(224, 255, 79)") {
        this.style.backgroundColor = "rgb(87, 167, 115)";
        this.style.borderRadius = "50% 50% 0% 0%";
        var boxAboutMe = document.getElementById("boxAboutMe");
        boxAboutMe.style.display = "block";
        // I'm playing with adding in this if statement to see if I can make the Resume dot change back to yellow and hide the block when I click the About Me Block. Once I get this to work
// I'll extend it to the other blocks and buttons.  
        if (toggleResume.style.backgroundColor == "rgb(87, 167, 115)") {
            console.log(`RESUME NOW: ${toggleResume.style.backgroundColor}`);
            //Currently it won't change the color (see log to show in action)
            toggleResume.style.backgroundColor == "rgb(224, 255, 79)";
            console.log(`RESUME NOW POST CHANGE: ${toggleResume.style.backgroundColor}`);
            toggleResume.style.borderRadius = "50%";
            }
    } else {
        this.style.backgroundColor = "rgb(224, 255, 79)";
        var boxAboutMe = document.getElementById("boxAboutMe");
        this.style.borderRadius = "50%";
        boxAboutMe.style.display = "none";
    } 
    console.log(`About Me: ${this.style.backgroundColor}`);
 };

var element = document.getElementById('toggleResume');
element.onclick = function () { 
    if (this.style.backgroundColor == "rgb(224, 255, 79)") {
        this.style.backgroundColor = "rgb(87, 167, 115)";
        this.style.borderRadius = "50% 50% 0% 0%";
        var boxResume = document.getElementById("boxResume");
        boxResume.style.display = "block";
    } else {
        this.style.backgroundColor = "rgb(224, 255, 79)";
        var boxResume = document.getElementById("boxResume");
        this.style.borderRadius = "50%";
        boxResume.style.display = "none";
    } 
    console.log(`Resume: ${this.style.backgroundColor}`);
 };

var element = document.getElementById('toggleVolunteering');
element.onclick = function () { 
    if (this.style.backgroundColor == "rgb(224, 255, 79)") {
        this.style.backgroundColor = "rgb(87, 167, 115)";
        this.style.borderRadius = "50% 50% 0% 0%";
        var boxVolunteering = document.getElementById("boxVolunteering");
        boxVolunteering.style.display = "block";
    } else {
        this.style.backgroundColor = "rgb(224, 255, 79)";
        var boxVolunteering = document.getElementById("boxVolunteering");
        this.style.borderRadius = "50%";
        boxVolunteering.style.display = "none";
    } 
    console.log(`Volunteering: ${this.style.backgroundColor}`);
 };

var element = document.getElementById('togglePassions');
element.onclick = function () { 
    if (this.style.backgroundColor == "rgb(224, 255, 79)") {
        this.style.backgroundColor = "rgb(87, 167, 115)";
        this.style.borderRadius = "50% 50% 0% 0%";
        var boxPassions = document.getElementById("boxPassions");
        boxPassions.style.display = "block";
    } else {
        this.style.backgroundColor = "rgb(224, 255, 79)";
        var boxPassions = document.getElementById("boxPassions");
        this.style.borderRadius = "50%";
        boxPassions.style.display = "none";
    } 
    console.log(`Passions: ${this.style.backgroundColor}`);
 };

var element = document.getElementById('togglePersonalProjects');
element.onclick = function () { 
    if (this.style.backgroundColor == "rgb(224, 255, 79)") {
        this.style.backgroundColor = "rgb(87, 167, 115)";
        this.style.borderRadius = "50% 50% 0% 0%";
        var boxPersonalProjects = document.getElementById("boxPersonalProjects");
        boxPersonalProjects.style.display = "block";
    } else {
        this.style.backgroundColor = "rgb(224, 255, 79)";
        var boxPersonalProjects = document.getElementById("boxPersonalProjects");
        this.style.borderRadius = "50%";
        boxPersonalProjects.style.display = "none";
    } 
    console.log(`Personal Projects: ${this.style.backgroundColor}`);
 };

// Need to make it so clicking one button makes all the others revert to neutral
// All buttons need to be clicked twice to start --> the JS is "changing" the color of the dots on the first click
// To the yellow color. But it's meant to start out with the yellow color. So something is messed out with the logic.

// ABOUT ME
var element = document.getElementById('toggleAboutMe');
element.onclick = function () {
    var toggleResume = document.getElementById("toggleResume");
    //var toggleVolunteering = document.getElementById('toggleVolunteering');
    var togglePassions = document.getElementById('togglePassions');
    var togglePersonalProjects = document.getElementById('togglePersonalProjects');
    var boxAboutMe = document.getElementById("boxAboutMe");
    var boxResume = document.getElementById("boxResume");
    // var boxVolunteering = document.getElementById("boxVolunteering");
    var boxPersonalProjects = document.getElementById("boxPersonalProjects");
    var boxPassions = document.getElementById("boxPassions");
    // Change the selected dot's styling and reveal the info box for that dot
    if (this.style.backgroundColor == "rgb(224, 255, 79)") {
        this.style.backgroundColor = "rgb(87, 167, 115)";
        this.style.borderRadius = "50% 50% 0% 0%";
        var boxAboutMe = document.getElementById("boxAboutMe");
        boxAboutMe.style.display = "block";  
        // INCLUDES VOLUNTEERING if (toggleResume.style.backgroundColor == "rgb(87, 167, 115)" || toggleVolunteering.style.backgroundColor == "rgb(87, 167, 115)" || togglePassions.style.backgroundColor == "rgb(87, 167, 115)" || togglePersonalProjects.style.backgroundColor == "rgb(87, 167, 115)") {
        if (toggleResume.style.backgroundColor == "rgb(87, 167, 115)" || togglePassions.style.backgroundColor == "rgb(87, 167, 115)" || togglePersonalProjects.style.backgroundColor == "rgb(87, 167, 115)") {
            // Change other dots colors back to yellow
            toggleResume.style.backgroundColor = "rgb(224, 255, 79)";
            // toggleVolunteering.style.backgroundColor = "rgb(224, 255, 79)";
            togglePassions.style.backgroundColor = "rgb(224, 255, 79)";
            togglePersonalProjects.style.backgroundColor = "rgb(224, 255, 79)";
            // Chat other dots back to full dots
            toggleResume.style.borderRadius = "50%";
            // toggleVolunteering.style.borderRadius = "50%";
            togglePassions.style.borderRadius = "50%";
            togglePersonalProjects.style.borderRadius = "50%";
            // Hide other dots info boxes
            boxResume.style.display = "none";
            // boxVolunteering.style.display = "none";
            boxPassions.style.display = "none";
            boxPersonalProjects.style.display = "none";
            }
    } else {
        this.style.backgroundColor = "rgb(224, 255, 79)";
        this.style.borderRadius = "50%";
        boxAboutMe.style.display = "none";
    } 
 };

 // RESUME 
var element = document.getElementById('toggleResume');
element.onclick = function () { 
    var toggleAboutMe = document.getElementById("toggleAboutMe");
    // var toggleVolunteering = document.getElementById('toggleVolunteering');
    var togglePassions = document.getElementById('togglePassions');
    var togglePersonalProjects = document.getElementById('togglePersonalProjects');
    var boxAboutMe = document.getElementById("boxAboutMe");
    var boxResume = document.getElementById("boxResume");
    // var boxVolunteering = document.getElementById("boxVolunteering");
    var boxPersonalProjects = document.getElementById("boxPersonalProjects");
    var boxPassions = document.getElementById("boxPassions");
    // Change the selected dot's styling and reveal the info box for that dot
    if (this.style.backgroundColor == "rgb(224, 255, 79)") {
        this.style.backgroundColor = "rgb(87, 167, 115)";
        this.style.borderRadius = "50% 50% 0% 0%";
        var boxResume = document.getElementById("boxResume");
        boxResume.style.display = "block";
        // INCLUDES VOLUNTEERING if (toggleAboutMe.style.backgroundColor == "rgb(87, 167, 115)" || toggleVolunteering.style.backgroundColor == "rgb(87, 167, 115)" || togglePassions.style.backgroundColor == "rgb(87, 167, 115)" || togglePersonalProjects.style.backgroundColor == "rgb(87, 167, 115)") {
        if (toggleAboutMe.style.backgroundColor == "rgb(87, 167, 115)" || togglePassions.style.backgroundColor == "rgb(87, 167, 115)" || togglePersonalProjects.style.backgroundColor == "rgb(87, 167, 115)") {
            // Change other dots colors back to yellow
            toggleAboutMe.style.backgroundColor = "rgb(224, 255, 79)";
            // toggleVolunteering.style.backgroundColor = "rgb(224, 255, 79)";
            togglePassions.style.backgroundColor = "rgb(224, 255, 79)";
            togglePersonalProjects.style.backgroundColor = "rgb(224, 255, 79)";
            // Chat other dots back to full dots
            toggleAboutMe.style.borderRadius = "50%";
            // toggleVolunteering.style.borderRadius = "50%";
            togglePassions.style.borderRadius = "50%";
            togglePersonalProjects.style.borderRadius = "50%";
            // Hide other dots info boxes
            boxAboutMe.style.display = "none";
            // boxVolunteering.style.display = "none";
            boxPassions.style.display = "none";
            boxPersonalProjects.style.display = "none";
            }
    } else {
        this.style.backgroundColor = "rgb(224, 255, 79)";
        var boxResume = document.getElementById("boxResume");
        this.style.borderRadius = "50%";
        boxResume.style.display = "none";
    } 
 };

// VOLUNTEERING 
/* var element = document.getElementById('toggleVolunteering');
element.onclick = function () {
    var toggleResume = document.getElementById("toggleResume");
    var toggleAboutMe = document.getElementById('toggleVolunteering');
    var togglePassions = document.getElementById('togglePassions');
    var togglePersonalProjects = document.getElementById('togglePersonalProjects');
    var boxAboutMe = document.getElementById("boxAboutMe");
    var boxResume = document.getElementById("boxResume");
    var boxVolunteering = document.getElementById("boxVolunteering");
    var boxPersonalProjects = document.getElementById("boxPersonalProjects");
    var boxPassions = document.getElementById("boxPassions");
    // Change the selected dot's styling and reveal the info box for that dot
    if (this.style.backgroundColor == "rgb(224, 255, 79)") {
        this.style.backgroundColor = "rgb(87, 167, 115)";
        this.style.borderRadius = "50% 50% 0% 0%";
        var boxVolunteering = document.getElementById("boxVolunteering");
        boxVolunteering.style.display = "block";  
        if (toggleResume.style.backgroundColor == "rgb(87, 167, 115)" || toggleAboutMe.style.backgroundColor == "rgb(87, 167, 115)" || togglePassions.style.backgroundColor == "rgb(87, 167, 115)" || togglePersonalProjects.style.backgroundColor == "rgb(87, 167, 115)") {
            // Change other dots colors back to yellow
            toggleResume.style.backgroundColor = "rgb(224, 255, 79)";
            toggleAboutMe.style.backgroundColor = "rgb(224, 255, 79)";
            togglePassions.style.backgroundColor = "rgb(224, 255, 79)";
            togglePersonalProjects.style.backgroundColor = "rgb(224, 255, 79)";
            // Chat other dots back to full dots
            toggleResume.style.borderRadius = "50%";
            toggleAboutMe.style.borderRadius = "50%";
            togglePassions.style.borderRadius = "50%";
            togglePersonalProjects.style.borderRadius = "50%";
            // Hide other dots info boxes
            boxResume.style.display = "none";
            boxAboutMe.style.display = "none";
            boxPassions.style.display = "none";
            boxPersonalProjects.style.display = "none";
            }
    } else {
        this.style.backgroundColor = "rgb(224, 255, 79)";
        this.style.borderRadius = "50%";
        boxVolunteering.style.display = "none";
    } 
 }; */

// PASSIONS
var element = document.getElementById('togglePassions');
element.onclick = function () { 
    var toggleResume = document.getElementById("toggleResume");
    // var toggleVolunteering = document.getElementById('toggleVolunteering');
    var toggleAboutMe = document.getElementById('toggleAboutMe');
    var togglePersonalProjects = document.getElementById('togglePersonalProjects');
    var boxAboutMe = document.getElementById("boxAboutMe");
    var boxResume = document.getElementById("boxResume");
    // var boxVolunteering = document.getElementById("boxVolunteering");
    var boxPersonalProjects = document.getElementById("boxPersonalProjects");
    var boxPassions = document.getElementById("boxPassions");
    // Change the selected dot's styling and reveal the info box for that dot
    if (this.style.backgroundColor == "rgb(224, 255, 79)") {
        this.style.backgroundColor = "rgb(87, 167, 115)";
        this.style.borderRadius = "50% 50% 0% 0%";
        var boxPassions = document.getElementById("boxPassions");
        boxPassions.style.display = "block";
        // INCLUDES VOLUNTEERING if (toggleResume.style.backgroundColor == "rgb(87, 167, 115)" || toggleVolunteering.style.backgroundColor == "rgb(87, 167, 115)" || toggleAboutMe.style.backgroundColor == "rgb(87, 167, 115)" || togglePersonalProjects.style.backgroundColor == "rgb(87, 167, 115)") {
        if (toggleResume.style.backgroundColor == "rgb(87, 167, 115)" || toggleAboutMe.style.backgroundColor == "rgb(87, 167, 115)" || togglePersonalProjects.style.backgroundColor == "rgb(87, 167, 115)") {
            // Change other dots colors back to yellow
            toggleResume.style.backgroundColor = "rgb(224, 255, 79)";
            // toggleVolunteering.style.backgroundColor = "rgb(224, 255, 79)";
            toggleAboutMe.style.backgroundColor = "rgb(224, 255, 79)";
            togglePersonalProjects.style.backgroundColor = "rgb(224, 255, 79)";
            // Chat other dots back to full dots
            toggleResume.style.borderRadius = "50%";
            // toggleVolunteering.style.borderRadius = "50%";
            toggleAboutMe.style.borderRadius = "50%";
            togglePersonalProjects.style.borderRadius = "50%";
            // Hide other dots info boxes
            boxResume.style.display = "none";
            // boxVolunteering.style.display = "none";
            boxAboutMe.style.display = "none";
            boxPersonalProjects.style.display = "none";
            }
    } else {
        this.style.backgroundColor = "rgb(224, 255, 79)";
        var boxPassions = document.getElementById("boxPassions");
        this.style.borderRadius = "50%";
        boxPassions.style.display = "none";
    } 
 };

 // PERSONAL PROJECTS
var element = document.getElementById('togglePersonalProjects');
element.onclick = function () {
    var toggleResume = document.getElementById("toggleResume");
    // var toggleVolunteering = document.getElementById('toggleVolunteering');
    var togglePassions = document.getElementById('togglePassions');
    var toggleAboutMe = document.getElementById('toggleAboutMe');
    var boxAboutMe = document.getElementById("boxAboutMe");
    var boxResume = document.getElementById("boxResume");
    // var boxVolunteering = document.getElementById("boxVolunteering");
    var boxPersonalProjects = document.getElementById("boxPersonalProjects");
    var boxPassions = document.getElementById("boxPassions");
    // Change the selected dot's styling and reveal the info box for that dot 
    if (this.style.backgroundColor == "rgb(224, 255, 79)") {
        this.style.backgroundColor = "rgb(87, 167, 115)";
        this.style.borderRadius = "50% 50% 0% 0%";
        var boxPersonalProjects = document.getElementById("boxPersonalProjects");
        boxPersonalProjects.style.display = "block";
        // INCLUDES VOLUNTEERING if (toggleResume.style.backgroundColor == "rgb(87, 167, 115)" || toggleVolunteering.style.backgroundColor == "rgb(87, 167, 115)" || togglePassions.style.backgroundColor == "rgb(87, 167, 115)" || toggleAboutMe.style.backgroundColor == "rgb(87, 167, 115)") {
            if (toggleResume.style.backgroundColor == "rgb(87, 167, 115)" || togglePassions.style.backgroundColor == "rgb(87, 167, 115)" || toggleAboutMe.style.backgroundColor == "rgb(87, 167, 115)") {    
            // Change other dots colors back to yellow
            toggleResume.style.backgroundColor = "rgb(224, 255, 79)";
            // toggleVolunteering.style.backgroundColor = "rgb(224, 255, 79)";
            togglePassions.style.backgroundColor = "rgb(224, 255, 79)";
            toggleAboutMe.style.backgroundColor = "rgb(224, 255, 79)";
            // Chat other dots back to full dots
            toggleResume.style.borderRadius = "50%";
            // toggleVolunteering.style.borderRadius = "50%";
            togglePassions.style.borderRadius = "50%";
            toggleAboutMe.style.borderRadius = "50%";
            // Hide other dots info boxes
            boxResume.style.display = "none";
            // boxVolunteering.style.display = "none";
            boxPassions.style.display = "none";
            boxAboutMe.style.display = "none";
            }
    } else {
        this.style.backgroundColor = "rgb(224, 255, 79)";
        var boxPersonalProjects = document.getElementById("boxPersonalProjects");
        this.style.borderRadius = "50%";
        boxPersonalProjects.style.display = "none";
    } 
 };
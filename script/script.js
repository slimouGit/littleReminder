'use strict';

window.addEventListener('DOMContentLoaded', init);

function init() {

    var reminderContent = document.getElementById("reminderContent");
    var reminderButton = document.getElementById("reminderButton");

    setInterval(function () {
        if(!(reminderContent.value)==""){
        console.log("content: " + reminderContent.value);
            reminderButton.style.display = "block";
        }else{
            reminderButton.style.display = "none";
        }
    },200);

};

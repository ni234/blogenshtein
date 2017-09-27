var main = function () {
    "use strict";
    var eNote = document.getElementById('eAudio');
    var aNote = document.getElementById('aAudio');
    var dNote = document.getElementById('dAudio');
    var gNote = document.getElementById('gAudio');
    var bNote = document.getElementById('bAudio');
    var ENote = document.getElementById('EAudio');
    $('#e').mousedown(function () {
        eNote.currentTime = 0;
        eNote.play();
    });
    $('#a').mousedown(function () {
        aNote.currentTime = 0;
        aNote.play();
    });
    $('#d').mousedown(function () {
        dNote.currentTime = 0;
        dNote.play();
    });
    $('#g').mousedown(function () {
        gNote.currentTime = 0;
        gNote.play();
    });
    $('#b').mousedown(function () {
        bNote.currentTime = 0;
        bNote.play();
    });
    $('#E').mousedown(function () {
        ENote.currentTime = 0;
        ENote.play();
    });
};
$(document).ready(main);

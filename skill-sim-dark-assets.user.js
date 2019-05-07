// ==UserScript==
// @name         Arks-Layer Skill Sim Dark Theme assets
// @version      1.0.1
// @description  Adds assets for the Skill Simulator Dark Theme
// @author       SynthSy
// @match        *arks-layer.com/skillsim/*
// @grant        none
// @run-at       document-start
// @namespace    arks-layer.com
// @updateURL    https://synthsy.github.io/Arks-Layer-Skill-Sim-Dark/skill-sim-dark-assets.user.js
// @downloadURL  https://synthsy.github.io/Arks-Layer-Skill-Sim-Dark/skill-sim-dark-assets.user.js
// ==/UserScript==
const activeDiv = document.querySelector('#skilltree');
activeDiv.setAttribute("class", "tabcontent bg-tweaks bg-dark");
activeDiv.setAttribute("style", "none");
console.log('Loaded.');

 /* Document Object Model  */

/**
 * DOM is a api of window object. Document is a element of window object.
 * DOM actually refer to our html document. 
 * selector provide either Elements or nodes. 
 * Element refers to  the only html element.
 * Node refers to html elements and text nodes. 
 */



// Selectors: Provide elements
// getElement provide _HTML Collections

document.getElementById('id'); 
document.getElementsBtClassName('class'); 
document.getElementsByTagName('tag'); 
document.getElementsByName('nameAttribute');



// Selectors : Provide nodes
// querySelector provide NodeLis

 document.querySelector('#name');
 document.querySelector('.name');  // only provide the first match.
 document.querySelectorAll('.name');
 document.querySelectorAll('p');
 document.querySelectorAll("input[type='text']");


// Traversing

// Provide elements
let main = document.getElementById("id");
let parent = main.parentElement;
let first_child = main.firstElementChild;
let last_child = main.lastElementChild;
let prev_sibling = main.previousElementSibling;
let next_sibling = main.nextElementSibling;


// Provide Nodes
let child = main.children;
let siblings = main.siblings;
let first_child = main.firstChild
let last_child = main.lastChild
let prev_sibling = main.previousSibling;
let next_sibling = main.nextSibling;
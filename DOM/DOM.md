__Document Object Model__<br>
DOM is a api of window object. Document is a element of window object. DOM actually refer to our html document. 
selector provide either Elements or nodes. Element refers to  the only html element. Node refers to html elements and text nodes. 

__Selectors: Provide elements__<br>
getElement provide __HTML Collections__

```javascript
document.getElementById('id'); 
document.getElementsBtClassName('class'); 
document.getElementsByTagName('tag'); 
document.getElementsByName('nameAttribute');
```

__Selectors : Provide nodes__<br>
querySelector provide __NodeList__

```javascript
 document.querySelector('#name');
 document.querySelector('.name');  // only provide the first match.
 document.querySelectorAll('.name');
 document.querySelectorAll('p');
 document.querySelectorAll("input[type='text']");
```

### Traversing

__Provide elements__

```javascript
let main = document.getElementById("id");
let parent = main.parentElement;
let first_child = main.firstElementChild;
let last_child = main.lastElementChild;
let prev_sibling = main.previousElementSibling;
let next_sibling = main.nextElementSibling;
```

__Provide Nodes__

```javascript
let child = main.children;
let siblings = main.siblings;
let first_child = main.firstChild
let last_child = main.lastChild
let prev_sibling = main.previousSibling;
let next_sibling = main.nextSibling;
```

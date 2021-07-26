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

__Convert HTML elements into array__

```javascript

let li = document.getElementsByTagName('li');
let list = Array.from(li);
let list = Array.prototype.slice.apply(li);
let list = [...li] // ES6 spread operator

// Array Traversing
list.forEach((li, index)=>{
   let text = li.innerHTML;
   li.innerHTML = `${index + 1}) ${text}`;
})
```
__Work With Attributes__

```javascript
// Get Attributes
console.log(list.attributes);
console.log(list.getAttribute('id'));
console.log(list.getAttributeNames());
console.log(list.getAttributeNode('class'));
console.log(list.classList);

// Set Attributes
list.id = 'myId';
list.setAttribute('id', 'myId');
let attr = document.createAttribute('title');
attr.value = 'This is title';
list.setAttributeNode(attr);
```

__Work With Style__

```javascript
// Individual Styles 
id.style.color = 'red';
id.style.fontSize = '20px';
id.style.fontWeight = 'bold';

// Style with object
let myStyle = {
    color : 'red',
    fontSize : '20px',
    fontWeight : 'bold',
}

Object.assign(id.style, myStyle);

// Style through a loop 
[...id.children].forEach(li => Object.assign(li.style, myStyle));
```

__Event Handling__

```javascript
/** 
* Do Not use arrow function in event
* It can't get the value of This
* Use normal function instead
*/ 

// Direct Event Functions
btn.onclick(function(e){
         e.preventDefault();
})
// With eventListener
btn.addEventListener('click', function(e){
        e.preventDefault();
})

/** 
* Mouse Functions 
* mousemove 
* Cursor position in document clientX, clientY
* Cursor position in container box offsetX, offsetY
*/

let list = document.getElementById('list');
let btn = document.getElementById('btn');

btn.addEventListener('click',function(e){
   let lastChild = list.lastElementChild.cloneNode(true);
    lastChild.innerHTML = "New Item";
    list.appendChild(lastChild);
});

// Add Event through loop to each element
[...list.children].forEach( li => li.addEventListener('click',function(e){
    e.target.remove();
}));

/** 
 * Add event to parent element then check it contain child
 * and remove the targeted element.
 */

list.addEventListener('click', function(e){
    if(list.contains(e.target)){
        e.target.remove();
    }
})
```
__Handle Form__

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="src/favicon.ico" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>JavaScript</title>
    <style>
        label{
            margin: 0;
            margin-left:15px;
        }
    </style>
</head>
<body>
      <div class="container">
        <div class="card p-4" id="card">
            <div class="ul list-group" id="list">
                <li class="list-group-item">list-item</li>
                <li class="list-group-item">list-item</li>
                <li class="list-group-item">list-item</li>
                <li class="list-group-item">list-item</li>
                <li class="list-group-item">list-item</li>
            </div>
            <script>
                // Handle list item and input event
                let list = document.getElementById('list');
                list.addEventListener('dblclick', function(e){
                    if(this.contains(e.target)){
                        let listText = e.target.innerText;
                        e.target.innerHTML = '';
                        let inputBox = input(listText);
                        e.target.appendChild(inputBox);

                        inputBox.addEventListener('keypress', function(event){
                            if(event.key == 'Enter'){
                                e.target.innerHTML = event.target.value;
                            }
                        })
                    }
                })
                function input(val){
                    let inp = document.createElement('input');
                    inp.type = 'text';
                    inp.className = 'form-control';
                    inp.value = val;
                    return inp;
                }
            </script>
        <div class="form-group my-3">
            <label>Name</label>
            <input type="text" class="form-control" name="name" id="fname" placeholder="name" />
            <p class="lead">My name is <span id="inputResult"></span></p>
        </div>
        <div class="form-control my-2">
            <h5>Select Your Programming Skill</h5>
            <div class="d-flex align-items-center">
                <input type="checkbox" value="Javascript" name="skill" id="js" />
                <label for="js">Javascript</label>
            </div>
            <div class="d-flex align-items-center">
                <input type="checkbox" value="Python" name="skill" id="python" />
                <label for="python">Python</label>
            </div>
            <div class="d-flex align-items-center">
                <input type="checkbox" value="PHP" name="skill" id="php" />
                <label for="php">PHP</label>
            </div>
            <div class="d-flex align-items-center">
                <input type="checkbox" value="SQL" name="skill" id="sql" />
                <label for="sql">SQL</label>
            </div>
            <div class="d-flex align-items-center">
                <input type="checkbox" value="Swift" name="skill" id="swift" />
                <label for="swift">Swift</label>
            </div>
        </div>
        <h5>Selected Language</h5>
        <p id="lang"></p> 
<script>
    // Checkbox Handling
    let skillInput = document.getElementById('fname');
    let inputText = document.getElementById('inputResult');
    let skills = document.getElementsByName('skill');
    let checkResult = document.getElementById('lang');

    skillInput.addEventListener('keypress', function(e){
        if(e.key == 'Enter'){
            inputText.innerHTML = e.target.value;
        }
    });

    function getLang(parent, skills){
        let result = '';
        skills.forEach((skill, index) => result +=`${index + 1}.${skill}&nbsp;&nbsp;  `);
        parent.innerHTML = result;

    }
    let lang = [];
    [...skills].forEach((skill)=>{
        skill.addEventListener('change', function(e){
            if(e.target.checked){
                lang.push(e.target.value);
                getLang(checkResult,lang);
            }else{
                let ind = lang.indexOf(e.target.value);
                lang.splice(ind,1);
                getLang(checkResult,lang);
            }
        })
    })
</script> 


             <form id="form" class="mt-5">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" id="name" placeholder="Enter Your Name">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com">
                </div>
                 <div class="mb-3">
                    <label for="pass" class="form-label">Password</label>
                    <input type="password" class="form-control" id="pass" name="pass" placeholder="Password">
                </div>
                <select class="form-select mb-3" name="country">
                    <option selected disabled>Select Your Country</option>
                    <option value="bangladesh">Bangladesh</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="india">India</option>
                    <option value="bhutan">Bhutan</option>
                    <option value="nepal">Nepal</option>
                </select>
                <input value="submit" type="submit" id="submit-btn" class="btn btn-primary" />
            </form>
<script>
    let form = document.getElementById('form');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        let formData = {};
        [...this.elements].forEach(el => {
            if(el.type != 'submit'){
                formData[el.name] = el.value;
            }
        })
        console.log(formData);
    });
</script> 
    </div>
</div> 
</body>
</html>

```

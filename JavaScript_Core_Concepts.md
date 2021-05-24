# JavaScript Core Concepts

<!------------------------------------------------------
---------------------------------------------------------
#######     JAVASCRIPT HOISTING   #######
---------------------------------------------------------
-------------------------------------------------------->

<details>
<summary><b> JavaScript Hoisting</b></summary>

__Hoisting:__
JavaScript engine working way is basically called hoisting.
JavaScript engine works in two step.
JavaScript Code will run line by line.
<br>
__First step__ it declarer variable and assign value undefined to each variable whether it is assigned or not. It will not look for its value.
For the function it will take the reference of function. It will not execute anything. <br><br>
__Second Step__ it will look for execution and look for values for variable. If it found variables got its value it will print that. Otherwise it will print undefined.
For function it will look for its call. where the function is called it will go for that.  it will go line by line. when it will found one more function is called in a function it will go for that one and skip others.

```JavaScript

// Example of Hoisting.

func(); // Function is called before creation. But it will execute properly.
console.log(a = 30); // variable is printed before declaration.
var a; // Variable is declared after using it.
function func(){ /// function is created after it is used.

  a(); // a function is called inside a function. it will go for it and skip the line below.
  console.log('ithsi is a primary function');
};

function a(){ // this function is called on another function;
  console.log('this is a nested function');
};

newFunc(); // it will return undefined
let newFunc = one; // function assigned to a variable.
function one(){
  console.log('new function');
};
newFunc(); // it will return its real value.
```
__Note__: For details on printing priority look at scope Example underneath this.
</details>

<!------------------------------------------------------
---------------------------------------------------------
#######     JAVASCRIPT SCOPE   #########
---------------------------------------------------------
-------------------------------------------------------->

<details>
<summary><b> JavaScript Scope </b></summary>

__Scope__ is Block {}. A variable or a function can be remembered, accessed  or called from where that is scope.
<br><br>

__Lexical Scope__:
 JavaScript Compiler tokenize every word variable, valued and functions that's called ***Lexim***
 When Compiler start leximing Compiler fix scope for every variable, values, functions. This core scoping concept is called ***Lexical Scope***. <br><br>
__BlockChain Scope__:  Blockchain scope is relational scope.
Relation between scopes like  parents, child, siblings is blockchain scope.
Blockchain means maintain a chain between parents, child and siblings.


```JavaScript

// Example of BlockChain Scope.

      var a = 11;
      function A(){

          var b = 12;

          function B(){
            var c = 23;
            console.log(c); // Printed Third c->23
            // Whatever Scope Parent A Has That will Automatically handed over to its child.
            // D() can be called from A(), SO it can be called from Here too
            D(c); // Printed Fourth c-> 23 + a->11 = 34;
          };

          function C(){
            var d = 56;
            console.log(d); // Printed Fifth d->56;
            // Whatever Scope Parent A Has That will Automatically handed over to its child.
            // D() can be called from A(), SO it can be called from Here too
            D(d); // Printed Seventh d->56 + a->11 = 67;
          };


          console.log(b);  // Printed First. b->12
          D(b); // Printed Second b->12 + a->11 = 23;
          B(); // Printed Third c->23
          C(); // Printed Fifth d->56;
      };

      function D(n){
        let r =  n + a;
        console.log(r);
      };
      A();

      // SCOP IN JAVASCRIPT
      // A => a, b, B(), C(), D(), A();
      // B => a, b, c, C(), B(), D(), A();
      // C => a, b, d, C(), B(), D(), A();
      // D => a, n, A(), D();
      // Result => 12, 23, 23, 34, 56,67

```

</details>

<!------------------------------------------------------
---------------------------------------------------------
#######     JAVASCRIPT CLOSURE   #######
---------------------------------------------------------
-------------------------------------------------------->

<details>
<summary><b> JavaScript Closure</b></summary>

***Closure:*** Closure is when function is able to remember and access its lexical scope even When <br>
the function executing outside of its lexical scope.


```JavaScript

// Example of Closure.

```

</details>

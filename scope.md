# JAVASCRIPT Scope
```JAVASCRIPT
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

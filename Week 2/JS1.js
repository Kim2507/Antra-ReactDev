// arrow function 
const arrowFunc = ()=> {
    // this "this" does not belongs and 
    //refer to a function but the parents outside the function
    console.log(this); 
}

// Why do we need an arrow function?
/**
Shorter syntax: Arrow functions have a more concise syntax than traditional function declarations, making the code easier to read and write.

Implicit return: Arrow functions automatically return the result of the expression inside the function body, without requiring the use of the return keyword. This can make the code shorter and more readable.

No binding of this: Arrow functions do not bind their own this value, but instead inherit the this value from the surrounding lexical context. This can be helpful in avoiding issues with scoping and context when using functions as callbacks or working with objects.

Function composition: Arrow functions can be used in functional programming techniques like function composition, where multiple functions are combined to create a new function. Arrow functions provide a concise syntax for creating these functions. */


const obj ={
    a:1,
    b:2,
    getSum(){
        console.log("outside",this); // this here refer to obj

        setTimeout((function(){
            console.log(this); // this here refer to window
            console.log(this.a+this.b)
        }),1000);

        //if we correct it as:
        setTimeout((function(){
            console.log(this); // this here refer to obj
            console.log(this.a+this.b)
        }).bind(this),1000); 

    },

    logNums(){
        [10,20,30].forEach((function(num){
            console.log(this);
            console.log(num* multipler);
        }).bind(this))
    }
}

function bar(){
    let count = 0;
    return{
        getCount:()=>{
            return count;
        },
        add: ()=>{
            count -=1;
        },
    };

    // or

    return{
        count,
        add: ()=>{
            count -=1;
        },
    };

}

const c = bar();
console.log(c.getCount());
c.add();
c.add();
c.add();
console.log(c.getCount);

function x(a){
    function y(b){
        function z(c){

        }
        z()
    }
    y();
}

function foo(a){
    console.log(a)
}
const x = (a) => (b) => (c) => a+b+c;
console.log(x(5)(10)(35));

// [1,2,3,4,5].forEach(value){

// }
/**Wrap up:
 * - function and class 
 * - Bind, this 
 * - Arrow function
 * - Closure
 */
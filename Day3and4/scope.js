var x=10; // global scope
function display()
{
    var x=30; // local scope
console.log(x);
}
display();
console.log(x);
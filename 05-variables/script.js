let cartQuantity = 0;

const show = document.querySelector('.show');
show.addEventListener('click', showQuant);

const add = document.querySelector('.add');
add.addEventListener('click', addOne);

const plus2 = document.querySelector('.plus2');
plus2.addEventListener('click', plusTwo);

const plus3 = document.querySelector('.plus3');
plus3.addEventListener('click', plusThree);

const reset = document.querySelector('.reset');
reset.addEventListener('click', resetQuant);


function showQuant(){
  console.log(`Cart quantity: ${cartQuantity}`);
};

function addOne(){
  console.log(`Cart quantity: ${cartQuantity+=1}`);
};

function plusTwo(){
  console.log(`Cart quantity: ${cartQuantity+=2}`);
};

function plusThree(){
  console.log(`Cart quantity: ${cartQuantity+=3}`);
};

function resetQuant(){
  console.log(`Cart quantity was reset. \nCart quantity: ${cartQuantity = 0}`);
}

const name = 'Que';

console.log(`My name is ${name}`);

const cost = (500 + 300 + 300 + 900) /100;

console.log(`Cost of food: $${cost}`);

const tax = cost * .1;
 
console.log(`Tax: $${tax}`);

const costNtax = cost + tax;

console.log(`Total cost: $${costNtax}`);




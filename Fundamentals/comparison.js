// {Exercise-1}

// let val1 = 5;
// let val2 = '5';

// // Checking of operands
// console.log(val1 == 5);  //true
// console.log(val2 == 5);   //true    
// console.log(val1 == val1); //true

// // Check against null and boolean value
// console.log(0 == false);   //true
// **console.log(0 == null);  //false

//{Exercise-2}

// Illustration of (==) operator
// let obj1 = {'val1': 'value'};
// let obj2 = {'val2': 'value'};

// // Checking of operands
// console.log(obj1.val1 == 'value');   true     
// console.log(obj1 == obj2);           false
// console.log(obj1.val1 == obj2.val2);  true

// // Check against undefined
// console.log(0 == undefined);   false
// console.log(null == undefined);  true


// {Exercise-3}
// // Illustration of (!=) operator
// let val1 = 5;
// let val2 = '5';

// // Checking of operands
// console.log(val1 != 6);     true
// console.log(val2 != '5');   false     
// console.log(val1 != val1);  true    //this is because val1 is undefined as loop

// // Check against null and boolean value
// console.log(0 != false);   false
// console.log(0 != null);   true

// {Exercise-4}

// // Illustration of (!=) operator
// let obj1 = {'val1': 'value'};
// let obj2 = {'val2': 'value'};

// // Checking of operands
// console.log(obj1.val1 != 'value');   false     
// console.log(obj1 != obj2);   true
// console.log(obj1.val1 != obj2.val2);   false
 
// // Check against undefined
// console.log(0 != undefined);   true
// console.log(null != undefined); false

// {Exercise-5}

// Illustration of (===) operator
// let val1 = 5;
// let val2 = '5';

// // Checking of operands
// console.log(val1 === 6);  false
// console.log(val2 === '5');     true   
// console.log(val1 === val1); false

// // Check against null and boolean value
// console.log(0 === false);  false
// console.log(0 === null);   false

// {Exercise -6}
// Illustration of (===) operator
// let obj1 = {'val1': 'value'};
// let obj2 = {'val2': 'value'};

// // Checking of operands
// console.log(obj1.val1 === 'value');    //true    
// console.log(obj1 === obj2);        //false
// console.log(obj1.val1 === obj2.val2);    //true

// // Check against undefined
// console.log(0 === undefined);   //false
// console.log(null === undefined);  //false

//{Exercise-7}
// Illustration of (!==) operator
let val1 = 5;
let val2 = '5';

// Checking of operands
console.log(val1 !== 6);   //false
console.log(val2 !== '5');      
console.log(val1 !== val1);

// Check against null and boolean value
console.log(0 !== false);   
console.log(0 !== null);
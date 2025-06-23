// function Yearofbirth(age)
// {
//     let Currentyear = 2025
//     console.log(`your Year of birth:  ${Currentyear - age}`)
// }

// Yearofbirth(25)


// const add = (num1, num2)=>{
//     console.log(num1 + num2)
// }

// add(2, 3)

// const Subtraction = (num1, num2)=>{
//     console.log(num1 - num2)
// }

// Subtraction(2, 1)


// const multiplication = (num1, num2)=>{
//     console.log(num1 * num2)
// }

// multiplication(2, 6)


// const Division = (num1, num2)=>{
//     console.log(num1 / num2)
// }

// Division(2, 6)



// function start(num)
// {
//     return Multi(num)
// }

// function Multi(num)
// {
//     const res = num * 2;
//     return sub(res)
// }

// function sub(num)
// {
//     const res = num - 5;
//     return div(res)
// }

// function div(num)
// {
//     const res = num / 10;
//     return res
// }

// console.log(start(5))

// function vbv()
// {
//     let x = 5
//     if(true)
//     {
//         var x = 10
//     }

//    console.log(x)
// }

// vbv()

// const names = ["bnbn", "vgvb", "vyb"]
// function printVal(val)
// {
//     console.log(val)
// }

// function myforeac(array, fan)
// {
//     for(let i = 0; i < array.length; i ++)
//     {
//         fan(array[i])
//     }
// }

// myforeac(names, printVal)



// // 1
const numbers = [1, 2, 3, 4, 5,]

// function doubleValues(array)
// {
//     return array.map(num => {return num * 2})
// }

// console.log(doubleValues(numbers))


// // 2
// function onlyEvenValues(array)
// {
//     return array.filter(number => number % 2 === 0);
// }

// console.log(onlyEvenValues(numbers))


// 3
const mixarray = ["hvy", 2, 3, "hvh", "wrm",]


function showFirstAndLast(array)
{
    const juststring = array.filter(item => typeof item === "string")
    return [juststring[0], juststring[juststring.length - 1]];}

console.log(showFirstAndLast(mixarray))
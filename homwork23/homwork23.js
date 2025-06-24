// js functions exe 1


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
// const mixarray = ["hvy", 2, 3, "hvh", "wrm",]


// function showFirstAndLast(array)
// {
//     const juststring = array.filter(item => typeof item === "string")
//     return [juststring[0], juststring[juststring.length - 1]];}

// console.log(showFirstAndLast(mixarray))



//// 4
// function vowelCount(str)
// {
//     const leters = ["a", "e", "i", "o", "u"];
//     let result = {}

//     str.toLowerCase().split('').forEach(element => {
//         for (let i = 0; i < leters.length; i++) {
//             if (element === leters[i]){
//                 if (result[element]) {
//                      result[element] += 1;
//                  } else {
//                       result[element] = 1;
//                  }}
        
//     }})
//     return result;
// }

// const test  = vowelCount("Hello World")
// console.log(test)


// // 5

function capitalize(str)
{
    return str.split('').map(char =>{return char.toUpperCase()}).join('');
}

// const test = capitalize("dxfgyhuji")
// console.log(test)



// //6
// function shiftLetters(str)
// {
//     const lowercase = "abcdefghijklmnopqrstuvwxyz";
//     const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     return str.split('').map(char => {
//         if (lowercase.includes(char))
//             {
//               if(char === "a")
//               {
//                 return "z"
//               }
//               else
//               {
//                 const index = lowercase.indexOf(char);
//                 return lowercase[index - 1];
//               }
//             }

//         else if (uppercase.includes(char))
//             {
//               if(char === "A")
//               {
//                 return "Z";
//               }
//               else
//               {
//                 const index = uppercase.indexOf(char);
//                 return uppercase[index - 1];
//               }
//             }
//         else
//             {
//                 return char;
//             }
// })
// .join("")
// }

// const test = shiftLetters("In Their Death They Were Not divideD")
// console.log(test)


//7
function swapCase(str)
{
    return str.split(' ').map((word, index) =>
    {
        if(index %2 === 1)
        {
            return capitalize(word)
        }
        else
        {
            return word
        }
    })
    .join(' ');
    
}

const test = swapCase("dxfgy huji vv yhmm")
console.log(test)



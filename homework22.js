// //1
// let a = "Frodo";
// let b = "Isfahan";

// [a, b] = [b, a];

// console.log(a, b)



// // 2
// const eixim = [ ["X", "x", "O", "X", " "],
//                 ["x", "O", "X", "x", "X"],
//                 ["O", "x", "x", "O", "X"],
//                 ["X", " ", "O", "X", "O"],
//                 ["x", "x", "X", "O", " "] ];

// let sum = 0;

// for(let i = 0; i < eixim.length; i++)
// {
//     for(let j = 0; j < eixim[i].length; j++)
//     {
//         if(eixim[i][j] === "X")
//         {
//             sum ++
//             console.log(`(${i}, ${j})`)
//         }
//     }
// }

// console.log(`Total X: ${sum}`);



// // 3
// let family = {
//   parents: {},
//   children: [
//     { name: "Ali" },
//     { name: "Lea" },
//     { name: "Mona" }
//   ]
// };

// const Name3 = family.children[2].name;
// console.log(Name3)

// let childrenlist = family.children
// let allChildren = []

// for (let child of childrenlist)
// {
//   allChildren.push(child.name);
// }
// console.log(allChildren.join(", "));



// // 4
// const numbers = [1,2,3,4,5];
// let reversnumbers = [];

// for(let i = numbers.length - 1; i >= 0; i--)
// {
//     reversnumbers.push(numbers[i])
// }

// console.log(reversnumbers);


// 5
const mixArray = [123, "helo", true, null, { god: 1 }, false, "world", null];

const counts = {
  number: 0,
  string: 0,
  object: 0,
  boolean: 0,
  null: 0,
};

for(let item of mixArray)
{
    if(item === null)
    {
        counts.null ++
    }
    else
    {
        let type = typeof(item);
        counts[type]++
    }
}
console.log(counts)
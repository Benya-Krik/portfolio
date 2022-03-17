'use string'

// let x = parseInt(prompt("Введите число"));
// let y = parseInt(prompt("Введите второе число"));

// if (x > 0 && y > 0) {
//     console.log(x - y);
// } else if (x < 0 && y < 0) {
//     console.log(x * y);
// } else if ((x > 0 && y < 0) || (x < 0 && y > 0)) {
//     console.log(x + y);
// }


// let a = parseInt(prompt("Введите первое число"));
// let b = parseInt(prompt("Введите второе число"));

// function watIs() {
//     let i = prompt("1 2 3 4?")
//     switch (i) {
//         case "1":
//             getSum()    
//             break;

//         case "2":
//             getMul()
//             break;

//         case "3":
//             getMin()
//             break;

//         case "4":
//             getDel()
//             break;

//         default:
//             alert("TI LOH EBANIY")
//             break;
//     }
// }

// watIs();


// function getSum() {
//     return alert(a + b);
// }

// function getMul() {
//     return alert(a * b);
// }

// function getMin() {
//     return alert(a - b)
// }

// function getDel() {
//     return alert(a / b)
// }


// for (let a = 0; a < 11; a++) {

//     if (a % 2 == 0) {
//         console.log(a + " - четное число");
//     } else if (a % 2 !== 0){
//         console.log(a + " - нечетное число");
//     } else if (a == 0){
//         console.log("Это ноль");
//     }
// }

// const post = {
//     author: "John", //вывести этот текст
//     postId: 23,
//     comments: [{
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2 //вывести это число
//             }
//         },
//         {
//             userId: 5, //вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", //вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1
//             }
//         },
//     ]
// };

// console.log(post.author);
// console.log(post.comments[0].rating.dislikes);
// console.log(post.comments[1].userId);
// console.log(post.comments[1].text);


// const products = [{
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];

// products.forEach(item => {
// item.price -= item.price * 0.15
// })

// console.log(products);
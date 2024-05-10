// 38-task 

// const item = (word) => {
//     const words = word.split(' ');
//     let count = 0;
//     words.forEach(word => {
//         if (word.includes('a') || word.includes('A')) {
//             count++;
//         }
//     });
//     return count;
// };
// const text = "ustoz 86 dan kottaroq bal qoyseyz yahshi bolardi";
// const result = item(text);
// console.log(result); 














// 40-misol 

// function middl_Number(params) {
//     let arr = [...params]
//     let number_1 = 0
//     let number_2 = 0
//     let number_3 = 0
//     if(arr.length % 2 == 0){
//         number_2 = (arr.length / 2)
//         number_3 = (arr.length / 2) - 1
//         number_1 = (arr[number_2] + arr[number_3]) / 2
//         return number_1
//     }else{
//         number_1 = (arr.length / 2) - 0.5
//         return (arr[number_1]);
//     }
// }
// console.log(middl_Number([1,2,3,4,5]));




// 42-misol 

// function world(arr) {
//     const obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         obj[arr[i]] = arr[i].length;
//     }
//     return obj;
// }
// const string = ["text", "world", "laptop"]
// const box = world(string)
// console.log(box);





// 43-misol  

// function item(obj, n) {
//     const box = {};
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             box[key] = obj[key] * n;
//         }
//     }
//     return box;
// }
// const n = 3;
// const obj = {a: 2, b: 3, c: 4};
// const box = item(obj, n);
// console.log(box);











// 44-misol 

// function item(n) {
//     const result = [];
//     for (let i = 1; i <= n; i++) {
//         result.push(Math.pow(2, i));
//     }
//     return result;
// }
// console.log(item(4)); 
// console.log(item(5)); 








// 48-misol 

// function item(str) {
//     const initials = str.split(' ').map(word => word.charAt(0)).join('');
//     return initials;
// }
// const input = 'George Raymond Richard Martin';
// const output = item(input);
// console.log(output); 











// 49-misol 

// function item(arr) {
//     arr.sort((a, b) => a.age - b.age);
//     const youngest = arr[0].age;
//     const oldest = arr[arr.length - 1].age;
//     const difference = oldest - youngest;
//     return difference;
// }
// const input = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
// ];
// const output = item(input);
// console.log(output); 










// 64-masala  


// function item(p, q) {
//     if (p.length !== q.length) {
//         return false;
//     }
//     for (let i = 0; i < p.length; i++) {
//         if (p[i] !== q[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// const testCases = [
//     [[1,2,3], [1,2,3]],
//     [[1,2], [1,null,2]],
//     [[1,2,1], [1,1,2]]
// ];
// testCases.forEach(([p, q]) => {
//     console.log("Input: p =", p, "q =", q);
//     console.log("Output:", item(p, q));
// });
















//65-misol 

// function item (obj){
//     let arr = Object.entries(obj);
//     let main = arr.map(([key, value]) => `${key}${value}`);
//     return main
// }
// console.log(item({a: 2, b: 5, c: 7}));





// 58-misol

// let getTruthyFalsy(arr):
//     truthy = []
//     falsy = []

//     for element in arr:
//         if (element):
//             truthy.append(element)
//         else:
//             falsy.append(element)

//     return {"truthy": truthy, "falsy": falsy}

// arr = [false, 1, 10, "", null, "sultonqul", 1.13, 0]
// result = getTruthyFalsy(arr)
// print(result)

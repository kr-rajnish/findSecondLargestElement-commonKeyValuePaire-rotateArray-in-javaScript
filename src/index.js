import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// find second largest element from given Array.
/*
const input = [1, 2, -2, 11, 7, 1];
//output=7
const input1 = [1, 4, 7, 2, 4, 7];
//output=4
function secodLargest(input2) {
  let arr = input2.sort((a,b)=>a-b);
  console.log(arr);
  let res = arr[input.length - 2];
  // console.log(res);
  for (let i = input.length - 1; i >= 0; i--) {
    if (arr[i - 1] < arr[i]) {
      res = arr[i - 1];
      break;
    }
  }
  return res;
}
// secodLargest(input);
console.log(secodLargest(input));
console.log(secodLargest(input1));
*/
//find the common key value paire.
/*
const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
const input2 = { a: 2, e: 12, f: 6, d: 10 };
//output = {d:10, e:12}
let obj = {};
function func(input1, input2) {
  for (let i in input1) {
    if (input1[i] === input2[i]) {
      obj[i] = input1[i];
    }
  }
  return obj;
}
console.log(func(input1, input2));
*/

//place fist element at 2nd last and 2nd element at last of the array.

const input = [2, 7, 11, 4, -2];
//output=[11,4,-2,2,7]

function rotateArr(input) {
  let newArr1 = [input[0], input[1]];
  let newArr2 = [];
  let k = 0;
  for (let i = 0; i < input.length; i++) {
    if (i < 2) {
      newArr2[input.legth - 1] = input[i];
    } else {
      newArr2[k] = input[i];
      k++;
    }
  }
  return newArr2.concat(newArr1);
}
console.log(rotateArr(input));


//Reverse String
const stringValue = "abcdefg"

let reverseString=[]
for(let i = stringValue.length ; i >= 0; i--){
    reverseString.push(stringValue[i])
}

console.log('Original String:',stringValue)

console.log('Reverse String:',reverseString.join(''))

console.log("In-build function: ",stringValue.split('').reverse().join())

//Output
// Original String: abcdefg
// Reverse String: gfedcba
// In-build function:  g,f,e,d,c,b,a



// // // Import stylesheets
// // import './style.css';

// // // Write Javascript code!
// // const appDiv = document.getElementById('app');
// // appDiv.innerHTML = `<h1>JS Starter</h1>`;

// var players = [
//   { id: 11, fname: 'Emma', lname: 'Radacannu', countryCode: 'UK', ranking: 25 },
//   {
//     id: 22,
//     fname: 'Aryana',
//     lname: 'Sabalenka',
//     countryCode: 'ROM',
//     ranking: 3,
//   },
//   {
//     id: 3,
//     fname: 'Serena',
//     lname: 'Williamns',
//     countryCode: 'US',
//     ranking: 12,
//   },
//   {
//     id: 41,
//     fname: 'Angelina',
//     lname: 'Kerber',
//     countryCode: 'GER',
//     ranking: 20,
//   },
//   { id: 5, fname: 'Petra', lname: 'Kviotva', countryCode: 'ROM', ranking: 10 },
//   { id: 63, fname: 'Ashley', lname: 'Barty', countryCode: 'AUS', ranking: 1 },
//   { id: 7, fname: 'Steffi', lname: 'Graph', countryCode: 'FRA', ranking: 3 },
// ];

// const filterData = players.filter((ele) => {
//   return ele.countryCode === 'US';
// });

// console.log(filterData);

// const sorted = players.sort((a, b) => {
//   return a.ranking - b.ranking;
// });

// console.log(sorted);

var text = 'welcome to my city';

const stringArray = text.split('');
console.log('stringArray:', stringArray);

console.log(stringArray.reverse().join(''));

const text2 = 'welcome';

//PureComponent
//compoentShouldUpdate
//Thunk - saga



let arr = [1, 2, 3];
let obj = arr.reduce((ac, a) => 
({ ...ac, [a]: a }), {}
);
console.log(obj);


//{1: 1, 2: 2, 3: 3}
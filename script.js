// Testdome: Automated Skill Testing https://www.testdome.com

// Techtonic Apprenticeship Technical Screen - Part 2
// Deadline: The test must be completed before Sep 17, 09:00 (CDT, 24-hour clock).

// IDE: We recommend having an environment ready, so you can solve problems outside of browser.

// Resources: You can use help files and other resources that you normally use.

// Test duration: 2h (no breaks allowed)

// ------------------ Sample Question -----------------------
// Fix the bug

// function average(a, b) {
//     return a + b / 2;
// }
// console.log(average(2, 1));

// Fixed

// function average(a, b) {
//     return (a + b) / 2; // Parenthesis were missing from operation
// }
// console.log(average(2, 1));

// ***************  Practice Exercises *************

// ------------------ Question 1 Ensure -----------------------

// Answer 1:
// function ensure(value) {
//     if (value === undefined) {
//         throw new Error('no arguments');
//     }

//     return value;
// }

// try {
//     console.log(ensure());
// } catch (err) {
//     console.log(err);
// }

// Answer 2
// function ensure(value) {
//     if (typeof value == 'undefined') {
//         throw 'Error';
//     } else {
//         return value;
//     }
// }

// try {
//     console.log(ensure());
// } catch (err) {
//     console.log(err);
// }

// ------------------ Question 2 Remove property -----------------------

// Answer 1
// function removeProperty(obj, prop) {
//     return Object.keys(obj).indexOf(prop) > -1 ? delete obj[prop] : false;
// }

// Answer 2
// function removeProperty(obj, prop) {
//     if (obj.hasOwnProperty(prop)) {
//         delete obj[prop];
//         return true;
//     }

//     return false;
// }

// ------------------ Question 3 Check Digit -----------------------

// Answer 1
// function createCheckDigit(membershipId) {
//     var sumMembershipId = aggregator(membershipId);
//     while (parseInt(sumMembershipId) > 9)
//         sumMembershipId = aggregator(sumMembershipId);
//     return sumMembershipId;
// }

// function aggregator(strMembershipId) {
//     return strMembershipId
//         .toString()
//         .split('')
//         .reduce((a, b) => parseInt(a) + parseInt(b), 0);
// }

// console.log(createCheckDigit('55555'));

// Answer 2
// function createCheckDigit(membershipId) {
//     if (membershipId.length > 1) {
//         var digits = membershipId.split('');
//         var sum = 0;
//         digits.forEach((digit) => {
//             sum += Number(digit);
//         });
//         return createCheckDigit(sum + '');
//     } else {
//         return Number(membershipId);
//     }
// }

// console.log(createCheckDigit('55555'));

// ------------------ Question 4 Date -----------------------

// Answer 1
// function formatDate(userDate) {
//     userDate = new Date(userDate);
//     y = userDate.getFullYear().toString();
//     m = (userDate.getMonth() + 1).toString();
//     d = userDate.getDate().toString();
//     if (m.length == 1) m = '0' + m;
//     if (d.length == 1) d = '0' + d;
//     return y + m + d;
// }

// console.log(formatDate('12/31/2014'));

// Answer 2
// function formatDate(userDate) {
//     var parts = userDate.split('/');
//     if (parts[0].length == 1) parts[0] = '0' + parts[0];
//     if (parts[1].length == 1) parts[1] = '0' + parts[1];
//     return parts[2] + parts[0] + parts[1];
// }

// console.log(formatDate('12/31/2014'));

// ------------------ Question 5 Image Gallery -----------------------

// Answer 1
// function setup() {
//     var items = document.getElementsByClassName('remove');
//     for (let i = 0; i < items.length; i++) {
//         items[i].addEventListener('click', function removeParentDiv() {
//             this.parentNode.remove();
//         });
//     }
// }

// // Example case.
// document.body.innerHTML = `
// <div class="image">
//   <img src="https://goo.gl/kjzfbE" alt="First">
//   <button class="remove">X</button>
// </div>
// <div class="image">
//   <img src="https://goo.gl/d2JncW" alt="Second">
//   <button class="remove">X</button>
// </div>`;

// setup();

// document.getElementsByClassName('remove')[0].click();
// console.log(document.body.innerHTML);

// Answer 2
// function setup() {
//     document
//         .querySelectorAll('.remove')
//         .forEach((button) =>
//             button.addEventListener('click', () =>
//                 button.parentElement.remove()
//             )
//         );
// }

// // Example case.
// document.body.innerHTML = `
// <div class="image">
//   <img src="https://goo.gl/kjzfbE" alt="First">
//   <button class="remove">X</button>
// </div>
// <div class="image">
//   <img src="https://goo.gl/d2JncW" alt="Second">
//   <button class="remove">X</button>
// </div>`;

// setup();

// document.getElementsByClassName('remove')[0].click();
// console.log(document.body.innerHTML);

// ------------------ Question 6 Closures -----------------------

// function registerHandlers() {
//   var as = document.getElementsByTagName('a');
//   for (var i = 0; i < as.length; i++) {
//     as[i].onclick = function(i) { // Index was missing from function(closure)
//       alert(i);
//       return false;
//     }
//   }
// }

/* HTML code for testing purposes (do not submit uncommented):
<body>
  In my life, I used the following web search engines:<br/>
  <a href="//www.yahoo.com">Yahoo!</a><br/>
  <a href="//www.altavista.com">AltaVista</a><br/>
  <a href="//www.google.com">Google</a><br/>
</body>
*/

// ------------------ Question 7 -----------------------

// Answer 1
// function appendChildren(decorateDivFunction) {
//     var allDivs = [...document.getElementsByTagName('div')];

//     for (var i = 0; i < allDivs.length; i++) {
//         var newDiv = document.createElement('div');
//         decorateDivFunction(newDiv);
//         allDivs[i].appendChild(newDiv);
//     }
// }

// // Example case.
// document.body.innerHTML = `
// <div id="a">
//   <div id="b">
//   </div>
// </div>`;

// //appendChildren(function(div) {});
// console.log(document.body.innerHTML);

//Answer 2
// function appendChildren(decorateDivFunction) {
//     var allDivs = Array.prototype.slice.call(
//         document.getElementsByTagName('div')
//     );

//     for (var i = 0; i < allDivs.length; i++) {
//         var newDiv = document.createElement('div');
//         decorateDivFunction(newDiv);
//         allDivs[i].appendChild(newDiv);
//     }
// }

// // Example case.
// document.body.innerHTML = `
// <div id="a">
//   <div id="b">
//   </div>
// </div>`;

// //appendChildren(function(div) {});
// console.log(document.body.innerHTML);

// ***************  Techtonic Apprenticeship Technical Screen - Part 2 *************

// ------------------ Question 1 -----------------------

var wordObj = {
    space: ' ',
    punctuation: '!',
    letterBank: {
        pairedLetters: { one: 'my', two: 'ch', three: '' },
        singleLetters: { one: 't', two: 'n', three: '' },
        vowels: ['a', 'e', 'i', 'o', 'u'],
    },
    wordBank: { one: 'way', two: 'tonic' },
};

//*******************************************************
//** DO NOT ALTER THE FUNCTION NAME BELOW THIS COMMENT **
//*******************************************************

function makeSentence() {
    let o = wordObj.letterBank.vowels[3];
    let n = wordObj.letterBank.singleLetters.two;
    let space = wordObj.space;
    let my = wordObj.letterBank.pairedLetters.one;
    let way = wordObj.wordBank.one;
    let t = wordObj.letterBank.singleLetters.one;
    let e = wordObj.letterBank.vowels[1];
    let ch = wordObj.letterBank.pairedLetters.two;
    let tonic = wordObj.wordBank.two;
    let punctuation = wordObj.punctuation;
    let output =
        o.toUpperCase() +
        n +
        space +
        my +
        space +
        way +
        space +
        t +
        o +
        space +
        t.toUpperCase() +
        e +
        ch +
        tonic +
        punctuation;
    return output;
}

console.log(makeSentence());

// ------------------ Question 2 -----------------------

//*******************************************************
//** DO NOT ALTER THE FUNCTION NAME BELOW THIS COMMENT **
//*******************************************************

function reverseIt(myString) {
    return myString.split('').reverse().join('');
}

console.log(reverseIt('gnirts tset'));

// ------------------ Question 3 -----------------------

var listOfCities = ['denver', 'philadelphia', 'chicago', 'dallas', 'seattle'];

//feel free to use listOfCities as an argument to the pascalCase function to test your solution.

//**********************************************
//** DO NOT ALTER ANY CODE ABOVE THIS COMMENT **
//**********************************************

function pascalCase(cityArr) {
    for (var i = 0; i < cityArr.length; i++) {
        var tempArr = cityArr[i].split('');
        tempArr[0] = tempArr[0].toUpperCase();
        cityArr[i] = tempArr.join('');
    }
    return cityArr;
}

console.log(pascalCase(listOfCities));

// ------------------ Question 4 -----------------------

function reverseVowels(input) {
    const LEN = input.length;
    const str = [...input];
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const rev = [];
    for (let i = 0; i < LEN; i++) {
        if (vowels.includes(input[i])) {
            rev.push(input[i]);
        }
    }
    for (let i = 0; i < LEN; i++) {
        if (vowels.includes(str[i])) {
            str[i] = rev.pop();
        }
    }
    return str.join('');
}

console.log(reverseVowels('input'));
console.log(reverseVowels('elephant'));

// ------------------ End -----------------------

// =========================
// NESTING
// =========================

// === PROBLEM 1 ===========

var employees = [{
  "firstName": "Von",
  "lastName": "Budibent",
  "email": "vbudibent0@163.com",
  "department": "Sales"
}, {
  "firstName": "Catherina",
  "lastName": "Swalowe",
  "email": "cswalowe1@example.com",
  "department": "Engineering"
}, {
  "firstName": "Theo",
  "lastName": "Trill",
  "email": "ttrill2@sina.com.cn",
  "department": "Services"
}, {
  "firstName": "Elsy",
  "lastName": "McCrorie",
  "email": "emccrorie3@netscape.com",
  "department": "Legal"
}, {
  "firstName": "Lorie",
  "lastName": "Handsheart",
  "email": "lhandsheart4@fotki.com",
  "department": "Research and Development"
}]

// Create a function called 'employeeUpdater'. employeeUpdater will loop over the array above and perform the following:
//  1. If employee's first name is Theo, remove that employee because he just got fired.
//  2. If the employee's first name is Lorie, change her department to 'HR'.
//  3. Return the updated employee array.

// Code here
function employeeUpdater(people) {
  for(i =0; i< people.length; i++) {
    if(people[i].firstName === 'Theo') {
      people.splice(i,1);
    }
    else if(people[i].firstName === 'Lorie') {
      people[i].department = 'HR';
    }
  }
  return people;

}

employeeUpdater(employees);






// === PROBLEM 2 ==========


// The array below represents IDs tied to reported workplace accidents. An employee accidentally entered in duplicates to array, making it look as though there are more accidents this year than there actually are.
// 1. Write a function called 'removeDuplicates' that will remove all duplicate entries in the workplaceAccidents array.
// 2. Use nested for loops to check for duplicate numbers, and then remove the duplicates from the array.
// 3. Return the updated array.

var workplaceAccidents = [12, 56, 44, 3, 29, 56, 56, 3, 7, 12];

// Code here
//with two loops

function removeDuplicates(arr) {
  var newArr = [];
  for(var i=0; i< arr.length; i++) {
    if(newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
//
// removeDuplicates(workplaceAccidents);


// function removeDuplicates(arr) {
//   for(var i = arr.length-1; i>; i++) {
//     while(arr.indexOf(arr[i])
//     for(var j = i+1; j<arr.length; j++) {
//       if(arr[i] === arr[j]) {
//         arr.splice(j,1)
//       }
//     }
//   }
//   return arr;
// }
//





// === PROBLEM 3 ==========

var cat = {
  name: 'Fluffy',
  catFriends: [{
    name: 'Grumpy',
    activities: ['be grumpy', 'eat food']
  }, {
    name: 'Lazy Bones',
    activities: ['sleep', 'pre-sleep naps']
    }]
}

// Fluffy has two friends, Grumpy and Lazy Bones.
// 1. Assign the value of Grumpy's 2nd activity to the variable below.
// 2. Assign fluffy2ndFriend the name of Fluffy's 2nd friend.

// Code here

var grumpyActivity = cat.catFriends[0].activities[1];
var fluffy2ndFriend = cat.catFriends[1].name;







// === PROBLEM 4 ==========

// Below is some information about my car. As you can see, I am not the best driver. I have caused a few accidents. Please update this driving record so that I can feel better about my driving skills.

// 1. Write a function called recordCleaner.
// 2. Loop over the accidents array.
// 3. Change atFaultForAccident from true to false.

var myCar = {
  make: 'Toyota',
  model: 'Corolla',
  year: 1992,
  accidents: [
    {
      date: '3/15/93',
      damage: '$5,000',
      atFaultForAccident: true
    },{
      date: '7/4/98',
      damage: '$2,200',
      atFaultForAccident: true
    },{
      date: '6/22/99',
      damage: '$7,900',
      atFaultForAccident: true
    }
  ]
}

// Code here

function recordCleaner() {
  for(var i=0; i<myCar.accidents.length; i++) {
    myCar.accidents[i].atFaultForAccident = false;
  }
}







// === PROBLEM 5 ==========

// Below is an array of arrays. Use two for loops.
// 1. Write a function called 'looper'.
// 2. 'looper' should loop over the arrays.
// 3. If the number is odd, replace it with 'odd'.
//    If the number is even, replace it with 'even'.
// 4. Return the modified numsArr.

var numsArr = [ [1, 2, 3, 4], [5, 6], [7, 8, 9, 10, 11]];

function looper(arr) {
  for(var i=0; i<arr.length; i++) {
    for(var j=0; j<arr[i].length; j++) {
      if(arr[i][j]%2 === 0 ) {
        arr[i][j] = 'even';
      }
      else {
        arr[i][j] = 'odd';
      }
    }
  }
  return arr;
}

looper(numsArr);

// Tüm doğru numaralar
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// Tüm yanlış numaralar
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Hem yanlış hem de doğru olabilecek numaralar
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// yukarıdaki array'leri kapsayan array
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Luhn algoritması... https://en.wikipedia.org/wiki/Luhn_algorithm#Description

function validateCred(array){
let arr1 = [];

arr1 = array.slice(0, array.length);

const checkDigit = arr1.pop();

arr1.splice(0,0,checkDigit);

for(i=1; i<=arr1.length; i = i+2){
  arr1[i] = arr1[i] * 2;
  if(arr1[i] >= 10){
    arr1[i] -= 9;
  };
}


var sum = arr1.reduce(function(a, b){
        return a + b;
    }, 0);


  if(sum % 10 === 0){
    return true;
  }else{
    return false
  }
}

function findInvalidCards(nestedArray){
  let invalidCardsArray= [];
  
  for(let key in nestedArray){
    let geciciArray = nestedArray[key];
    if(validateCred(geciciArray) === false){
      invalidCardsArray.push(geciciArray);
    }
  }
return invalidCardsArray;
}


//console.log(batch);

//console.log(findInvalidCards(batch));

//console.log(valid1);
//console.log(validateCred(valid1));
//console.log(valid1);

//console.log(findInvalidCards(batch));








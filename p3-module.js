/* 
CIT 281
Name: Amar Oberoi 
*/ 

function validDenomination(coin) {
  const validCoins = [1, 5, 10, 25, 50, 100];
  if (validCoins.indexOf(coin) !== -1) {
    return true;
  } else {
    return false;
  }
}

  
function valueFromCoinObject(obj) {
  const { denom = 0, count = 0 } = obj;
  return denom * count;
}

  function valueFromArray(arr) {
    return arr.reduce((accumulator, currentValue) => {
      return accumulator + valueFromCoinObject(currentValue);
    }, 0);
  }
  
  function coinCount(...coinage) {
    return valueFromArray(coinage);
  }
  
  console.log("{}", coinCount({ denom: 5, count: 3 }));
  console.log("{}s", coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 }));
  const coins = [{ denom: 25, count: 2 }, { denom: 1, count: 7 }];
  console.log("...[{}]", coinCount(...coins));
  console.log("[{}]", coinCount(coins)); // Extra credit
  
  module.exports = {
    coinCount 
  };
  
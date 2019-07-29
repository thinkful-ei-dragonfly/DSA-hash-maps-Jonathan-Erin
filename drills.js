const HashMap = require('./HashMap');

//input: 'hello'
//output: 'helo'

//algorithm:
//create a hashMap
//loop through the string
//if the hashMap doesn't contain the character of the add the character to the hashMap and to the result string
//Otherwise, move to next character
//return result


function removeDup(string) {
  string = string.toLowerCase()
  const HM = new Map()
  let result = ''
  for (let i = 0; i < string.length; i++) {
    char = string[i]
    if (!HM.has(char)) {
      HM.set(char, '')
      result += char
    }
  }

  return result
}

//input:acecarr
//output: true

//Algorithm:
//If the length of the string is even, then each character of the string must have a pair
//If the length of the string is odd, then at most one character can not have a pair



function palindrome(string) {
  let numOdd = 0
  let hashMap = new Map()
  for (let i = 0; i < string.length; i++) {
    char = string[i]
    if (!hashMap.has(char)) {
      hashMap.set(char, 1)
      numOdd++
    }
    else {
      let number = hashMap.get(char)
      const newNum = number + 1
      hashMap.set(char, newNum)
      if (newNum % 2 === 0) {
        numOdd--
      }
      else if (newNum % 2 !== 0) {
        numOdd++
      }
    }
  }
  if(numOdd > 1){
    return false
  }
  return true
}

  function main() {
    const lor = new HashMap();
    // // lor.MAX_LOAD_RATIO = 0.5;
    // // lor.SIZE_RATIO = 3;

    // lor.set("Hobbit", "Bilbo");
    // lor.set("Hobbit", "Frodo");
    // lor.set("Wizard", "Gandolf");
    // lor.set("Human", "Aragon");
    // lor.set("Elf", "Legolas");
    // lor.set("Maiar", "The Necromancer");
    // lor.set("Maiar", "Sauron");
    // lor.set("RingBearer", "Gollum");
    // lor.set("LadyOfLight", "Galadriel");
    // lor.set("HalfElven", "Arwen");
    // lor.set("Ent", "Treebeard");

    // console.log(lor);
    console.log(removeDup('Hello'))
    console.log(palindrome('nnaa'))
    console.log(palindrome('dda'))
    console.log(palindrome('acecrar'))
  }

  main();



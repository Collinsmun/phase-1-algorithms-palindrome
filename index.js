function isPalindrome(word) {
  // Write your algorithm here
  
  // const wordInput=word.split();

  // const reverseWordInput=word.reverse();
  // if(reverseWordInput===wordInput){
  //   return'Its a palindrome';
  // }else{
  //   return 'Not a palindrome';
  function reverseInput(){
  //   let a= word.split("");
  //   let b=word.reverse("");
  //   let c=b.join("");
    return word.split("").reverse("").join("");
  }
  const reverseWordInput=reverseInput(word);
  return word===reverseWordInput;

  }

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  First I declare another function reverseInput() to 
  convert the word into array values using split,
  reverse the value of the array value and finally
  use join() to convert the array to string
  Declare a variable reverseWordI input and assign it to 
  the function reverseInput() let argument be word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

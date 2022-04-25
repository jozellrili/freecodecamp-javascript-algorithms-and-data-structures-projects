function palindrome(str) {

  // First create a function the reverse text
  let reverseText = (str) => {
    let reversedStr = ""
    for(let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }

    return reversedStr;
  }

  // remove non-alphanumeric characters from the string
  let cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // get the reversed string
  let reversed = reverseText(cleanStr)

  // check if palindrome
  for(let i = 0; i < cleanStr.length; i++) {
      if (cleanStr[i] != reversed[i]) {
        return false;
      }
  }

  return true;
}

palindrome("eye");
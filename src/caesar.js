const caesarModule = (function () {
    
  const caesar = (input, shift, encode = true) => {
    
    // if shift value is missing, 0, less than -25, or greater than 25, return false
    if (!shift || shift > 25 || shift < -25) {return false}
    
    // set input to lowercase and split it into an array
    const message = input.toLowerCase().split('')
    
    //declare English alphabet
    const letters = /[a-z]/g
    
    // declare accumulator
    let newMessage = ""
    
    // if decoding, reverse the direction of the shift
    if (!encode) {shift = -shift}
    
    // helper function that appropriately replaces characters or passes them through: 
    const encoding = (newMessage, char) => {
      
      // get the charCode from the character
      const index = message.indexOf(char)
      const charCode = char.charCodeAt(message[index])
      
      // use arithmetic to allow the shift to wrap around to the opposite end of the alphabet when necessary
      const shiftWrap = shift < 0 ? shift+26 : shift
      
      // use arithmetic to find the replacement character's charCode, based on the shiftWrap value and original charCode
      const replacementCode = ((charCode - 97 + shiftWrap) % 26) + 97

      // get the replacement character using its charCode
      const replacement = String.fromCharCode(replacementCode)
    
      // Add the replacement character -or- if the original character isn't a letter, pass it through
      const passThru = char.match(letters)
      const newChar = passThru ? newMessage += replacement : newMessage += char
      return newChar
    }
    
    // loop through the input message and push new characters into the new message by calling in the encoding helper function
    let output = message.reduce(encoding, newMessage)
    return output
  }
  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

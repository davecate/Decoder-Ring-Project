const substitutionModule = (function () {
  
  const substitution = (input, alphabet, encode = true) => {
    
    // if no substitution alphabet, return false
    if (!alphabet) {return false}
    
    // if the alphabet string isn't 26 characters long, return false
    if (alphabet.length !== 26) {return false}
    
    // check alphabet string for repeat characters
    const uniqueChars = new Set(alphabet)
    if (uniqueChars.size !== alphabet.length) {return false}
    
    // set input string to lowercase and split it into an array
    let message = input.toLowerCase().split('')
    
    // set substitute alphabet string to lowercase
    let substitute = alphabet.toLowerCase()
    
    // declare English alphabet
    const english = "abcdefghijklmnopqrstuvwxyz"
    
    // declare accumulator
    const newMessage = ""
    
    // allow swapping of reference objects based on encode value
    const encodeRef = encode ? substitute : english
    const decodeRef = encode ? english : substitute
    
    // helper function that appropriately replaces characters or passes them through: 
    const encoding = (newMessage, char) => {
         
      // get the character's replacement character from the encode reference object
      const index = decodeRef.indexOf(char)
      const replacement = encodeRef.charAt(index)

      // if the the original character from the input message is part of the decode reference object, add its replacement to the new message -or- if not, pass it through
      const passThru = decodeRef.includes(char)
      const newChar = passThru ? newMessage += replacement : newMessage += char
      return newChar
    }
    
    const output = message.reduce(encoding, newMessage)
    
    return output
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

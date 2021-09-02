const polybiusModule = (function () {

  // declare reference objects which place the alphabet on a 5x5 grid, I/J sharing coordinates
  const encoder = {
     a: "11",
     b: "21",
     c: "31",
     d: "41",
     e: "51",
     f: "12",
     g: "22",
     h: "32",
     i: "42",
     j: "42",
     k: "52",
     l: "13",
     m: "23",
     n: "33",
     o: "43",
     p: "53",
     q: "14",
     r: "24",
     s: "34",
     t: "44",
     u: "54",
     v: "15",
     w: "25",
     x: "35",
     y: "45",
     z: "55"
    }
  
  const decoder = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "ij",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z"
  }
    
  const polybius = (input, encode = true) => {
    
    // change input so that it is all lower case
    let message = input.toLowerCase()
    
    // select the reference object for encoding or decoding based on encode parameter
    const mode = encode ? encoder : decoder
    
    // if decoding, reject any input with an odd amount of numbers (i.e., incomplete coordinates)
    if (!encode) {
      
      // remove spaces and get the remaining length
      let testForOdd = input.replace(/ /g, "").length
      
      // divide by 2, return false if any remainder exists
      if(testForOdd % 2 !== 0) {return false}
    }
    
    // create an array from the input message by matching against a regular expression which groups numbers into pairs for decoding
    const messageArray = message.match(/[0-9]{2}|[a-z]|\s/g)
    
    // map the replacement characters to a new arraybased on the current mode -or- if an input character isn't contained in the reference object, pass it through 
    const codedArray = messageArray.map(character => mode[character] || character);
    
    // join the new array into a string and return it
    const newMessage = codedArray.join('');
    return newMessage;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

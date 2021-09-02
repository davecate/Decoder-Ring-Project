const { polybius } = require("../src/polybius")
const { expect } = require("chai")

describe("polybius", () => {
  
  describe("encoding", () => {
    let encode = true
    it ("Should encode a message by translating each letter into a pair of numbers representing y-x coordinates on a 5x5 grid", () => {
      let input = "spice melange"
      let answer = "3453423151 23511311332251"
      const actual = polybius(input, encode)
      expect(typeof actual).to.eql("string")
    })
    it ("Should translate upper case the same as lower case", () => {
      let input = "sPiCe MeLaNgE"
      let answer = "3453423151 23511311332251"
      const actual = polybius(input, encode)
      expect(actual).to.eql(answer)
    })
    it ("Should maintain spaces from input to output", () => { 
      let input = "s p i c e  m e l a n g e"
      let answer = "34 53 42 31 51  23 51 13 11 33 22 51"
      const actual = polybius(input, encode)
      expect(actual).to.eql(answer)
    })
    it ("Should encode both I and J to 42", () => {
      let input = "bijou"
      let answer = "2142424354"
      const actual = polybius(input, encode)
      expect(actual).to.eql(answer)
    })
    it ("Should output a string", () => {
      let input = "spice melange"
      const actual = polybius(input, encode)
      expect(typeof actual).to.eql("string")
    })
  })
  
  describe("decoding", () => {
    let encode = false
    it ("Should decode a coded message by translating each pair of numbers into a letter", () => {
      let input = "3453423151 23511311332251"
      let answer = "spijce melange"
      const actual = polybius(input, encode)
      expect(actual).to.eql(answer)
      })
    it ("Should return false when decoding a string with an odd number of characters, excluding spaces", () => {
      let input = "1 23 45"
      let answer = false
      const actual = polybius(input, encode)
      expect(actual).to.eql(answer)
    })
    it ("Should maintain spaces from input to output", () => { 
      let input = "34 53 42 31 51  23 51 13 11 33 22 51"
      let answer = "s p ij c e  m e l a n g e"
      const actual = polybius(input, encode)
      expect(actual).to.eql(answer)
    })
    it ("Should return I and J in the same space when decoding", () => {
      let input = "3453423151 23511311332251"
      let answer = "spijce melange"
      const actual = polybius(input, encode)
      expect(actual[2]).to.eql(answer[2])
      expect(actual[3])
    })
    it ("Should output a string", () => {
      let input = "3453423151 23511311332251"
      const actual = polybius(input, encode)
      expect(typeof actual).to.eql("string")
    })
  })
})